import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiSend, FiX, FiMessageCircle } from "react-icons/fi";
import { getAllProducts } from "../services/productData";
import { GEMINI_ENDPOINT, isGeminiConfigured } from "../config/gemini";
import { BRAND } from "../config/constants";
import "./ShoppingAssistant.css";

const WELCOME_MESSAGE = {
  role: "model",
  text:
    "Hi! I'm your shopping assistant 🛍️ Ask me things like:\n" +
    "• \"What do I need to make paneer at home?\"\n" +
    "• \"What products should I buy for a trip?\"\n" +
    "I'll find the right products from our store for you.",
};

const OFF_TOPIC_REPLY =
  "I'm here to help with our products! Please ask me something about the products in our store. 🙂";

const buildSystemPrompt = (products) => {
  const catalogLines = products
    .map(
      (p) =>
        `- ${p.name} | brand: ${p.brand} | category: ${p.category} | price: ₹${p.price}`
    )
    .join("\n");

  return `You are the AI shopping assistant for "${BRAND.name}", an Indian online store.
You may ONLY discuss the store's products. The complete product catalog is listed below.

RULES:
1. Only recommend products that exist in the catalog below. Always mention the exact product name and its price in ₹.
2. For cooking or recipe questions (e.g. "what do I need to make paneer", "ingredients for paneer butter masala"): briefly explain what ingredients/items are needed for that dish, then list the matching products from the catalog with their prices as bullet points. If a needed ingredient is not in the catalog, mention it is currently not available in the store.
3. For trip, travel, trekking, or activity questions: recommend the relevant products from the catalog (especially the Travel category, plus anything else useful like power banks or clothing) with prices.
4. If the user's question is NOT related to products, shopping, cooking ingredients, or trip planning with products, reply politely with exactly: "${OFF_TOPIC_REPLY}"
5. Keep answers short and friendly. Use bullet points for product lists. Do not invent products, prices, or discounts.

PRODUCT CATALOG:
${catalogLines}`;
};

// Minimal markdown-ish renderer: bold + bullet lines, safe plain text otherwise.
const renderMessageText = (text) => {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    const isBullet = /^\s*[*•-]\s+/.test(line);
    return (
      <span key={i} className={isBullet ? "assistant-bullet" : undefined}>
        {isBullet ? rendered.map((r, k) =>
          typeof r === "string" ? r.replace(/^\s*[*•-]\s+/, "• ") : r
        ) : rendered}
        <br />
      </span>
    );
  });
};

const ShoppingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const allProducts = useMemo(() => getAllProducts(), []);
  const systemPrompt = useMemo(
    () => buildSystemPrompt(allProducts),
    [allProducts]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Products whose names appear in an assistant reply → shown as quick links.
  const matchProducts = (text) => {
    const lower = text.toLowerCase();
    return allProducts
      .filter((p) => lower.includes(p.name.toLowerCase()))
      .slice(0, 6);
  };

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || isLoading) return;

    if (!isGeminiConfigured()) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: question },
        {
          role: "model",
          text: "The AI assistant isn't configured yet — the site owner needs to set REACT_APP_GEMINI_API_KEY. Meanwhile, browse products from the Category menu above!",
        },
      ]);
      setInput("");
      return;
    }

    const nextMessages = [...messages, { role: "user", text: question }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const history = nextMessages
        .slice(-8)
        .map((m) => ({ role: m.role, parts: [{ text: m.text }] }));

      const response = await fetch(GEMINI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: history,
          generationConfig: { temperature: 0.4, maxOutputTokens: 800 },
        }),
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      const answer =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "Sorry, I couldn't find an answer. Please try asking about our products again.";

      setMessages((prev) => [
        ...prev,
        { role: "model", text: answer, products: matchProducts(answer) },
      ]);
    } catch (error) {
      console.error("Shopping assistant error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="shopping-assistant">
      {isOpen && (
        <div
          className="assistant-panel"
          role="dialog"
          aria-label="AI shopping assistant"
        >
          <div className="assistant-header">
            <div>
              <h3>AI Shopping Assistant</h3>
              <p>Ask about products, recipes, or trip planning</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          <div className="assistant-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`assistant-message ${
                  msg.role === "user" ? "from-user" : "from-bot"
                }`}
              >
                <div className="assistant-bubble">
                  {renderMessageText(msg.text)}
                </div>
                {msg.products?.length > 0 && (
                  <div className="assistant-products">
                    {msg.products.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        className="assistant-product-chip"
                        onClick={() =>
                          navigate(`/category/${encodeURIComponent(p.category)}`)
                        }
                        title={`View ${p.category}`}
                      >
                        <img src={p.img} alt="" loading="lazy" />
                        <span>
                          {p.name}
                          <em>₹{p.price.toLocaleString("en-IN")}</em>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="assistant-message from-bot">
                <div className="assistant-bubble assistant-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="assistant-input">
            <input
              type="text"
              value={input}
              placeholder="e.g. What do I need to make paneer?"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              aria-label="Ask the shopping assistant"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <FiSend aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="assistant-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close AI shopping assistant" : "Open AI shopping assistant"}
        aria-expanded={isOpen}
      >
        <FiMessageCircle aria-hidden="true" />
        <span>Ask AI</span>
      </button>
    </div>
  );
};

export default ShoppingAssistant;
