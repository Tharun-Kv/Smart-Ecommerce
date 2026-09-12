// Gemini AI configuration for the shopping assistant.
// The key is read from the environment only (see .env / .env.example) and is
// never committed to source control. For deployed builds, set
// REACT_APP_GEMINI_API_KEY in the hosting provider's environment settings.

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "";

export const GEMINI_MODEL = "gemini-2.5-flash";

export const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

export const isGeminiConfigured = () => Boolean(GEMINI_API_KEY);
