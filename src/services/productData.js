// Product data service - exports existing website products for comparison
// This ensures the comparison bot works only with products available on the website

// Self-contained SVG product tile (data URI) — always renders, no external
// image host required. Used for catalog entries without brand photography.
const productTileImg = (label, bg = "#2563eb") => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" rx="16" fill="${bg}"/><rect x="12" y="12" width="376" height="276" rx="12" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"/><text x="200" y="150" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${label}</text><text x="200" y="190" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.75)" text-anchor="middle">Smart E-Commerce</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const groceryImg = (label) => productTileImg(label, "#16a34a");
const travelImg = (label) => productTileImg(label, "#2563eb");

export const dummyCategoryProducts = {
  Mobiles: [
    { 
      name: "iPhone 14", 
      brand: "Apple", 
      price: 79999, 
      img: "https://store.storeimages.c-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=1663092988666",
      description: "The iPhone 14 features a stunning Super Retina XDR display, advanced dual-camera system, A15 Bionic chip, and improved battery life. It delivers powerful performance and seamless iOS experience.",
      features: ["A15 Bionic chip", "Super Retina XDR display", "Dual-camera system", "iOS ecosystem"],
      category: "Mobiles"
    },
    { 
      name: "Samsung Galaxy S22", 
      brand: "Samsung", 
      price: 69999, 
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-s901-sm-s906elgeins-530940617?$650_519_PNG$",
      description: "Samsung Galaxy S22 offers a brilliant AMOLED display, pro-grade camera system, and powerful Snapdragon processor. With a sleek design and long-lasting battery, it excels in performance and versatility.",
      features: ["AMOLED display", "Pro-grade camera", "Snapdragon processor", "Android ecosystem"],
      category: "Mobiles"
    },
    { 
      name: "Nothing Phone 1", 
      brand: "Nothing", 
      price: 39999, 
      img: "https://cdn.shopify.com/s/files/1/0549/7667/6306/products/Nothing-Phone-1-Black-1_1200x1200.jpg?v=1656542073",
      description: "Nothing Phone 1 brings a unique transparent design with Glyph interface, smooth OLED display, dual camera, and powerful performance. It's a bold, innovative smartphone redefining Android aesthetics.",
      features: ["Transparent design", "Glyph interface", "OLED display", "Unique aesthetics"],
      category: "Mobiles"
    },
    { 
      name: "iPhone 13", 
      brand: "Apple", 
      price: 69999, 
      img: "https://store.storeimages.c-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202203-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=1646092597126",
      description: "iPhone 13 features A15 Bionic chip, advanced dual-camera system, and Ceramic Shield front. It offers impressive battery life and 5G capability in a compact design.",
      features: ["A15 Bionic chip", "Ceramic Shield", "Dual-camera system", "5G capable"],
      category: "Mobiles"
    },
    { 
      name: "Samsung Galaxy S21", 
      brand: "Samsung", 
      price: 54999, 
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21-s901/gallery/in-galaxy-s21-s901-sm-g991bzgdins-531164407?$650_519_PNG$",
      description: "Samsung Galaxy S21 delivers professional-grade photography with its triple camera system, Dynamic AMOLED 2X display, and powerful Exynos processor for seamless performance.",
      features: ["Triple camera", "Dynamic AMOLED 2X", "Exynos processor", "Professional photography"],
      category: "Mobiles"
    },
    { 
      name: "OnePlus 9 Pro", 
      brand: "OnePlus", 
      price: 64999, 
      img: "https://image01.oneplus.net/oneplus_9_pro/spec/OnePlus_9_Pro_Pine_Green.png",
      description: "OnePlus 9 Pro features Hasselblad camera system, Fluid AMOLED display, and Snapdragon 888 processor. It offers ultra-fast charging and premium build quality.",
      features: ["Hasselblad camera", "Fluid AMOLED", "Snapdragon 888", "Ultra-fast charging"],
      category: "Mobiles"
    },
    { 
      name: "Xiaomi Mi 11", 
      brand: "Xiaomi", 
      price: 44999, 
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0/pms_1667323999.96581213.png",
      description: "Xiaomi Mi 11 boasts a 108MP camera, AMOLED display, and Snapdragon 888 processor. It offers flagship features at a competitive price point.",
      features: ["108MP camera", "AMOLED display", "Snapdragon 888", "Flagship value"],
      category: "Mobiles"
    },
    { 
      name: "Google Pixel 6", 
      brand: "Google", 
      price: 59999, 
      img: "https://store.google.com/product/pixel_6/images/koxavi/20221025_P6_4K_Devices_Front-Back_Dynamic_Hero_3D.png?width=1080",
      description: "Google Pixel 6 features Tensor chip, advanced AI photography, and clean Android experience. It offers exceptional camera performance and timely updates.",
      features: ["Tensor chip", "AI photography", "Clean Android", "Timely updates"],
      category: "Mobiles"
    },
    { 
      name: "Oppo Find X3 Pro", 
      brand: "Oppo", 
      price: 62999, 
      img: "https://images.oppo.com/content/dam/oppo/en-us/find-x3-pro/find-x3-pro-black.png",
      description: "Oppo Find X3 Pro features 10-bit color display, advanced microscopy camera, and Snapdragon 888 processor. It excels in color accuracy and photography.",
      features: ["10-bit display", "Microscopy camera", "Snapdragon 888", "Color accuracy"],
      category: "Mobiles"
    },
    { 
      name: "Vivo X60 Pro", 
      brand: "Vivo", 
      price: 49999, 
      img: "https://www.vivo.com/in/images/x60-pro/kv/x60-pro-2.png",
      description: "Vivo X60 Pro features gimbal stabilization, Zeiss optics, and professional photography features. It offers exceptional video stabilization and camera performance.",
      features: ["Gimbal stabilization", "Zeiss optics", "Professional video", "Advanced photography"],
      category: "Mobiles"
    },
    { 
      name: "Realme GT 5G", 
      brand: "Realme", 
      price: 37999, 
      img: "https://image01.realme.net/general/20210525/1621918429442.jpg",
      description: "Realme GT 5G features Snapdragon 888 processor, 120Hz AMOLED display, and 65W fast charging. It offers flagship performance at an affordable price.",
      features: ["Snapdragon 888", "120Hz display", "65W charging", "Affordable flagship"],
      category: "Mobiles"
    },
    { 
      name: "Motorola Edge 20", 
      brand: "Motorola", 
      price: 42999, 
      img: "https://motorola-global-portal-prod.cdn.motorola.com/content/dam/motorola/portal/en_in/products/edge-20/edge-20-hero.png",
      description: "Motorola Edge 20 features 144Hz OLED display, 108MP camera, and near-stock Android experience. It offers smooth display and clean software.",
      features: ["144Hz display", "108MP camera", "Stock Android", "Smooth performance"],
      category: "Mobiles"
    },
    { 
      name: "ASUS ROG Phone 5", 
      brand: "ASUS", 
      price: 57999, 
      img: "https://dlcdnweb.asus.com/rog/media/1597536374244.png",
      description: "ASUS ROG Phone 5 is designed for gaming with Snapdragon 888 processor, 144Hz display, and advanced cooling system. It offers ultimate gaming performance.",
      features: ["Gaming focused", "Advanced cooling", "144Hz gaming", "Snapdragon 888"],
      category: "Mobiles"
    }
  ],
  Electronics: [
    { 
      name: "Sony LED TV", 
      brand: "Sony", 
      price: 49999, 
      img: "https://images.sony.com/is/image/samsung/p6pim/in/55-inch-x80k-led-4k-uhd-smart-google-tv-kd55x80j/3314476323?$650_519_PNG$", 
      description: "Sony LED TV delivers ultra-clear 4K visuals, immersive surround sound, and Android TV features. Enjoy cinematic experiences at home with vibrant colors and fast refresh rates for gaming.",
      features: ["4K display", "Android TV", "Surround sound", "Gaming ready"],
      category: "Electronics"
    },
    { 
      name: "JBL Bluetooth Speaker", 
      brand: "JBL", 
      price: 1499, 
      img: "https://harmanaudio.com/content/dam/harman/jbl/wireless-speakers/flip-6/jbl-flip-6-black-product.png",
      description: "This JBL Bluetooth speaker is compact, portable, and powerful. With long battery life, waterproof design, and deep bass output, it's perfect for travel, parties, and everyday use.",
      features: ["Portable", "Waterproof", "Long battery", "Deep bass"],
      category: "Electronics"
    },
    { 
      name: "Philips LED Bulb", 
      brand: "Philips", 
      price: 1899, 
      img: "https://images.philips.com/is/image/PhilipsConsumer/LED-bulb-9W-E27-3-pcs-929001169101-global-001?$jpglarge$&wid=960", 
      description: "Philips LED bulb offers energy efficiency, long lifespan, and bright white light. It's ideal for home lighting, reducing electricity bills while enhancing visibility and comfort in all spaces.",
      features: ["Energy efficient", "Long lifespan", "Bright white light", "Cost effective"],
      category: "Electronics"
    },
    { 
      name: "Samsung OLED TV", 
      brand: "Samsung", 
      price: 89999, 
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/s95-oled-4k-smart-tv-qn55s95cafxza-530828788?$650_519_PNG$",
      description: "Samsung OLED TV features perfect black levels, vibrant colors, and smart TV capabilities. With ultra-thin design and powerful processors, it delivers premium viewing experience.",
      features: ["OLED display", "Perfect blacks", "Smart TV", "Ultra-thin design"],
      category: "Electronics"
    },
    { 
      name: "LG Soundbar", 
      brand: "LG", 
      price: 12999, 
      img: "https://www.lg.com/in/images/sound-bars/md07504546/gallery/SN4Y-2-1ch-DTS-Virtual-X-3D-Surround-Bluetooth-Soundbar-with-Wireless-Subwoofer-DN.jpg",
      description: "LG Soundbar delivers immersive audio with Dolby Atmos support, wireless subwoofer, and adaptive sound. It transforms your TV viewing experience with theater-like sound quality.",
      features: ["Dolby Atmos", "Wireless subwoofer", "Adaptive sound", "Theater quality"],
      category: "Electronics"
    },
    { 
      name: "Sony Headphones", 
      brand: "Sony", 
      price: 8999, 
      img: "https://sony.scene7.com/is/image/SonyElectronics/wh-1000xm5-hero-1?$600$&fmt=png-alpha",
      description: "Sony Headphones feature industry-leading noise cancellation, exceptional sound quality, and long battery life. Perfect for music lovers and frequent travelers.",
      features: ["Noise cancellation", "Premium sound", "Long battery", "Comfortable fit"],
      category: "Electronics"
    },
    { 
      name: "Boat Earbuds", 
      brand: "Boat", 
      price: 2999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU0N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X5T&s",
      description: "Boat Earbuds offer true wireless freedom, deep bass, and IPX water resistance. With touch controls and voice assistant support, they're perfect for active lifestyles.",
      features: ["True wireless", "Deep bass", "IPX water resistant", "Touch controls"],
      category: "Electronics"
    },
    { 
      name: "Mi Smart Band", 
      brand: "Xiaomi", 
      price: 2499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV1N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X6S&s",
      description: "Mi Smart Band tracks fitness activities, monitors heart rate, and provides smartphone notifications. With long battery life and water resistance, it's your perfect fitness companion.",
      features: ["Fitness tracking", "Heart rate monitor", "Smart notifications", "Water resistant"],
      category: "Electronics"
    },
    { 
      name: "Canon Camera", 
      brand: "Canon", 
      price: 45999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW2N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X7R&s",
      description: "Canon Camera features 24MP sensor, 4K video recording, and advanced autofocus system. Perfect for photography enthusiasts and content creators.",
      features: ["24MP sensor", "4K video", "Advanced autofocus", "Content creation"],
      category: "Electronics"
    },
    { 
      name: "Dell Monitor", 
      brand: "Dell", 
      price: 18999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX3N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X8Q&s",
      description: "Dell Monitor offers 27-inch 4K display, USB-C connectivity, and ergonomic stand. Ideal for professionals and gamers who demand color accuracy and performance.",
      features: ["4K display", "USB-C connectivity", "Ergonomic stand", "Color accurate"],
      category: "Electronics"
    },
    { 
      name: "HP Laptop", 
      brand: "HP", 
      price: 54999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY4N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X9W&s",
      description: "HP Laptop features 11th Gen Intel processor, 16GB RAM, and SSD storage. With long battery life and sleek design, it's perfect for work and entertainment.",
      features: ["Intel processor", "16GB RAM", "SSD storage", "Long battery"],
      category: "Electronics"
    },
    { 
      name: "Logitech Mouse", 
      brand: "Logitech", 
      price: 1999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ5N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X0E&s",
      description: "Logitech Mouse offers precision tracking, ergonomic design, and wireless connectivity. With customizable buttons and long battery life, it enhances productivity.",
      features: ["Precision tracking", "Ergonomic design", "Wireless", "Customizable buttons"],
      category: "Electronics"
    },
    { 
      name: "Amazon Echo", 
      brand: "Amazon", 
      price: 4999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA6N9O6K5I4J3H2G1F0E9D8C7B6A5Z4Y3X1F&s",
      description: "Amazon Echo features smart home control, premium sound, and Alexa voice assistant. Control your home with voice commands and enjoy music streaming.",
      features: ["Smart home", "Alexa assistant", "Premium sound", "Voice control"],
      category: "Electronics"
    }
  ],
  Fashion: [
    { 
      name: "Puma T-Shirt", 
      brand: "Puma", 
      price: 499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKD8QB-s0SO2deEzmxzJfpBGjkW5Hcq14dRg&s",
      description: "This Puma T-Shirt is crafted from soft, breathable cotton for all-day comfort. Its minimalist design makes it ideal for casual outings or gym sessions, blending performance with urban fashion easily.",
      features: ["Cotton fabric", "Breathable", "Minimalist design", "Versatile"],
      category: "Fashion"
    },
    { 
      name: "Men's Pant", 
      brand: "Levis", 
      price: 1999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0xV-xh_GNXfQVmCsRwOkwXr9iguMTe5bOg&s",
      description: "Levi's Men's Pant offers a perfect fit with stretchable fabric, delivering style and ease. It's suitable for formal and casual occasions, making it a versatile staple in any wardrobe.",
      features: ["Stretchable fabric", "Perfect fit", "Formal & casual", "Versatile"],
      category: "Fashion"
    },
    { 
      name: "Sweatshirt", 
      brand: "H&M", 
      price: 899, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E3N7cn2CKyumgN6AopSVjlpQJF46VZ8QNA&s",
      description: "This H&M sweatshirt features a soft fleece interior for cozy warmth, a classic fit, and ribbed cuffs. It's ideal for layering in winter or wearing solo on chilly evenings.",
      features: ["Fleece interior", "Cozy warmth", "Classic fit", "Winter wear"],
      category: "Fashion"
    },
    { 
      name: "Nike Sports Shoes", 
      brand: "Nike", 
      price: 3499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y&s",
      description: "Nike Sports Shoes feature advanced cushioning technology, breathable mesh upper, and durable rubber outsole. Perfect for running, training, and everyday athletic activities.",
      features: ["Advanced cushioning", "Breathable mesh", "Durable outsole", "Athletic performance"],
      category: "Fashion"
    },
    { 
      name: "Adidas Jacket", 
      brand: "Adidas", 
      price: 2999, 
      img: "https://www.vivo.com/in/images/x60-pro/kv/x60-pro-2.png",
      description: "Adidas Jacket offers water-resistant fabric, breathable design, and iconic three-stripes styling. Ideal for outdoor activities and light weather protection.",
      features: ["Water resistant", "Breathable design", "Iconic styling", "Outdoor ready"],
      category: "Fashion"
    },
    { 
      name: "Zara Dress", 
      brand: "Zara", 
      price: 1599, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3W&s",
      description: "Zara Dress features elegant silhouette, premium fabric, and contemporary design. Perfect for special occasions and formal events with sophisticated styling.",
      features: ["Elegant silhouette", "Premium fabric", "Contemporary design", "Formal occasions"],
      category: "Fashion"
    },
    { 
      name: "UCB Polo Shirt", 
      brand: "United Colors of Benetton", 
      price: 1299, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y2X&s",
      description: "UCB Polo Shirt features classic polo design, comfortable cotton fabric, and vibrant color options. A timeless wardrobe essential for casual and semi-formal wear.",
      features: ["Classic polo design", "Cotton fabric", "Vibrant colors", "Timeless style"],
      category: "Fashion"
    },
    { 
      name: "Rayban Sunglasses", 
      brand: "Rayban", 
      price: 2499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3V&s",
      description: "Rayban Sunglasses offer UV protection, classic aviator design, and premium lens quality. Essential accessory for style and eye protection in all conditions.",
      features: ["UV protection", "Classic design", "Premium lenses", "Eye protection"],
      category: "Fashion"
    },
    { 
      name: "Tommy Hilfiger Wallet", 
      brand: "Tommy Hilfiger", 
      price: 1999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3U&s",
      description: "Tommy Hilfiger Wallet features genuine leather, multiple card slots, and signature logo design. Combines functionality with classic American style.",
      features: ["Genuine leather", "Multiple slots", "Logo design", "Classic style"],
      category: "Fashion"
    },
    { 
      name: "Puma Backpack", 
      brand: "Puma", 
      price: 1799, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3W2&s",
      description: "Puma Backpack offers spacious compartments, padded laptop sleeve, and ergonomic shoulder straps. Perfect for daily commute, travel, and outdoor adventures.",
      features: ["Spacious compartments", "Laptop sleeve", "Ergonomic straps", "Travel ready"],
      category: "Fashion"
    },
    { 
      name: "Levi's Jeans", 
      brand: "Levis", 
      price: 2499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3X&s",
      description: "Levi's Jeans feature classic straight fit, durable denim fabric, and iconic styling. A timeless wardrobe staple that never goes out of fashion.",
      features: ["Classic fit", "Durable denim", "Iconic styling", "Timeless fashion"],
      category: "Fashion"
    },
    { 
      name: "Hoodie", 
      brand: "Tommy Hilfiger", 
      price: 2299, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Y&s",
      description: "Tommy Hilfiger Hoodie features premium cotton blend, comfortable hood design, and signature logo embroidery. Perfect for casual wear and layering.",
      features: ["Premium cotton", "Comfortable hood", "Logo embroidery", "Casual wear"],
      category: "Fashion"
    },
    { 
      name: "Sports Watch", 
      brand: "Casio", 
      price: 3999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcD6L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Z&s",
      description: "Casio Sports Watch features water resistance, digital display, and multiple sport modes. Designed for athletes and fitness enthusiasts with durable construction.",
      features: ["Water resistant", "Digital display", "Sport modes", "Durable construction"],
      category: "Fashion"
    }
  ],
  "Home Appliances": [
    { 
      name: "Air Conditioner", 
      brand: "Lollyd", 
      price: 29999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uNSj2Sn1p1Nokyg_SMiG0eZfOphxuVsOMA&s",
      description: "The Lollyd Air Conditioner cools rooms rapidly while conserving energy. With intelligent temperature control, it ensures consistent comfort even during hot summers, making it a must-have for modern households.",
      features: ["Energy efficient", "Rapid cooling", "Smart temperature", "Modern design"],
      category: "Home Appliances"
    },
    { 
      name: "Microwave Oven", 
      brand: "Samsung", 
      price: 8999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtJ0_WMAto3JBRgvfTdBN0J6707UqFLJj3Q&s",
      description: "Samsung's Microwave Oven delivers fast, even cooking with smart presets. Its sleek design complements modern kitchens, while safety features and efficiency make it perfect for daily meal preparations.",
      features: ["Smart presets", "Even cooking", "Sleek design", "Safety features"],
      category: "Home Appliances"
    },
    { 
      name: "Refrigerator", 
      brand: "LG", 
      price: 25999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx9bN1eWoW_2tTnZaPOH-zQQHIKjIArTG0g&s",
      description: "LG's Refrigerator offers spacious compartments, inverter cooling technology, and energy-saving performance. With an elegant finish and quiet operation, it keeps food fresh longer while enhancing your kitchen's aesthetics.",
      features: ["Spacious", "Inverter cooling", "Energy saving", "Quiet operation"],
      category: "Home Appliances"
    },
    { 
      name: "Washing Machine", 
      brand: "Whirlpool", 
      price: 18999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3A&s",
      description: "Whirlpool Washing Machine features 6th Sense technology, multiple wash programs, and energy-efficient operation. Perfect for modern households with advanced fabric care.",
      features: ["6th Sense tech", "Multiple programs", "Energy efficient", "Fabric care"],
      category: "Home Appliances"
    },
    { 
      name: "Air Purifier", 
      brand: "Philips", 
      price: 12999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3B3&s",
      description: "Philips Air Purifier removes 99.97% of pollutants, features smart sensors, and operates quietly. Ideal for allergy sufferers and maintaining clean indoor air quality.",
      features: ["HEPA filter", "Smart sensors", "Quiet operation", "Allergy relief"],
      category: "Home Appliances"
    },
    { 
      name: "Electric Kettle", 
      brand: "Prestige", 
      price: 1499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3C3&s",
      description: "Prestige Electric Kettle offers rapid boiling, auto shut-off, and cordless convenience. Perfect for tea, coffee, and instant meals with energy-efficient performance.",
      features: ["Rapid boiling", "Auto shut-off", "Cordless", "Energy efficient"],
      category: "Home Appliances"
    },
    { 
      name: "Mixer Grinder", 
      brand: "Bajaj", 
      price: 2999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y2D3&s",
      description: "Bajaj Mixer Grinder features powerful motor, multiple jars, and stainless steel blades. Essential for modern kitchens with versatile grinding capabilities.",
      features: ["Powerful motor", "Multiple jars", "Steel blades", "Versatile grinding"],
      category: "Home Appliances"
    },
    { 
      name: "Induction Cooktop", 
      brand: "Prestige", 
      price: 3499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3D3&s",
      description: "Prestige Induction Cooktop offers fast cooking, energy efficiency, and preset menus. With automatic voltage regulation and safety features, it's perfect for modern cooking.",
      features: ["Fast cooking", "Energy efficient", "Preset menus", "Safety features"],
      category: "Home Appliances"
    },
    { 
      name: "Vacuum Cleaner", 
      brand: "Eureka Forbes", 
      price: 7999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3E3&s",
      description: "Eureka Forbes Vacuum Cleaner features powerful suction, HEPA filtration, and lightweight design. Ideal for thorough home cleaning with multiple attachments.",
      features: ["Powerful suction", "HEPA filtration", "Lightweight", "Multiple attachments"],
      category: "Home Appliances"
    },
    { 
      name: "Electric Iron", 
      brand: "Havells", 
      price: 1299, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3F3&s",
      description: "Havells Electric Iron features non-stick soleplate, steam burst, and auto shut-off. Perfect for wrinkle-free clothes with professional ironing results.",
      features: ["Non-stick soleplate", "Steam burst", "Auto shut-off", "Professional results"],
      category: "Home Appliances"
    },
    { 
      name: "Water Heater", 
      brand: "Racold", 
      price: 8999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3G3&s",
      description: "Racold Water Heater offers instant heating, energy efficiency, and safety features. Perfect for consistent hot water supply in modern bathrooms.",
      features: ["Instant heating", "Energy efficient", "Safety features", "Consistent supply"],
      category: "Home Appliances"
    },
    { 
      name: "Chimney", 
      brand: "Kaff", 
      price: 15999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3H3&s",
      description: "Kaff Chimney features powerful suction, auto-clean technology, and sleek design. Essential for smoke-free kitchens with modern aesthetics.",
      features: ["Powerful suction", "Auto-clean", "Sleek design", "Smoke-free kitchen"],
      category: "Home Appliances"
    },
    { 
      name: "Toaster", 
      brand: "Morphy Richards", 
      price: 1999, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcD6L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3I3&s",
      description: "Morphy Richards Toaster offers even browning, multiple settings, and compact design. Perfect for quick breakfast preparation with consistent results.",
      features: ["Even browning", "Multiple settings", "Compact design", "Quick breakfast"],
      category: "Home Appliances"
    }
  ],
  Books: [
    { 
      name: "Atomic Habits", 
      price: 599, 
      brand: "Penguin", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3tdnYcCKO8NuWennfZbfr86P7gIoBjl2AQ&s",
      description: "Atomic Habits by James Clear teaches practical techniques to form good habits, break bad ones, and master small behaviors that lead to remarkable results. It's a must-read for self-growth.",
      features: ["Self-help", "Practical techniques", "Habit formation", "Personal growth"],
      category: "Books"
    },
    { 
      name: "The Psychology of Money", 
      price: 399, 
      brand: "Harriman House", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzV23fyGLxpgQULqfjC00obRANbjKq9-t5A&s",
      description: "This book explores how emotions and behavior affect our financial decisions. Morgan Housel's insights into wealth, greed, and happiness help readers develop a healthier, long-term mindset about money.",
      features: ["Financial psychology", "Behavioral insights", "Long-term mindset", "Wealth building"],
      category: "Books"
    },
    { 
      name: "Ikigai", 
      price: 250, 
      brand: "SSEP", 
      img: "https://gyaanstore.com/cdn/shop/products/61YHrxO0EgL_6e35eec6-242e-406a-966a-0488c8deb782.jpg?v=1701690449&width=1445",
      description: "This book explores the Japanese concept of finding purpose and meaning in life. It combines philosophy, psychology, and practical wisdom to help readers discover their reason for being.",
      features: ["Japanese philosophy", "Life purpose", "Meaningful living", "Practical wisdom"],
      category: "Books"
    },
    { 
      name: "Rich Dad Poor Dad", 
      price: 450, 
      brand: "Warner Books", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3J3&s",
      description: "Robert Kiyosaki's classic teaches financial literacy through contrasting lessons from his rich dad and poor dad. Essential reading for understanding money and investing.",
      features: ["Financial literacy", "Investment basics", "Money mindset", "Wealth creation"],
      category: "Books"
    },
    { 
      name: "The 7 Habits of Highly Effective People", 
      price: 650, 
      brand: "Simon & Schuster", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3K3&s",
      description: "Stephen Covey's timeless guide to personal and professional effectiveness. Seven powerful habits that transform how you approach life and work.",
      features: ["Personal effectiveness", "Professional development", "Life transformation", "Timeless wisdom"],
      category: "Books"
    },
    { 
      name: "Think and Grow Rich", 
      price: 350, 
      brand: "Fawcett", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3L3&s",
      description: "Napoleon Hill's masterpiece on wealth creation and success principles. Based on studying successful people, it reveals 13 steps to riches.",
      features: ["Success principles", "Wealth creation", "Mindset training", "Actionable steps"],
      category: "Books"
    },
    { 
      name: "The Subtle Art of Not Giving a F*ck", 
      price: 550, 
      brand: "Harper", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3M3&s",
      description: "Mark Manson's counterintuitive guide to living a good life. Teaches how to embrace struggles and focus on what truly matters.",
      features: ["Life philosophy", "Mental health", "Authentic living", "Modern wisdom"],
      category: "Books"
    },
    { 
      name: "Sapiens", 
      price: 750, 
      brand: "Random House", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3N3&s",
      description: "Yuval Noah Harari's exploration of human history from the Stone Age to the present. A fascinating journey through how Homo sapiens came to dominate the world.",
      features: ["Human history", "Evolution", "Civilization", "Historical analysis"],
      category: "Books"
    },
    { 
      name: "The Power of Habit", 
      price: 480, 
      brand: "Random House", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3O3&s",
      description: "Charles Duhigg's scientific exploration of why habits exist and how they can be changed. Practical insights for personal and professional transformation.",
      features: ["Habit science", "Behavior change", "Psychology", "Practical application"],
      category: "Books"
    },
    { 
      name: "Zero to One", 
      price: 420, 
      brand: "Crown Business", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3P3&s",
      description: "Peter Thiel's guide to innovation and building the future. Teaches how to go from zero to one by creating something entirely new.",
      features: ["Innovation", "Entrepreneurship", "Future building", "Startup wisdom"],
      category: "Books"
    },
    { 
      name: "The Lean Startup", 
      price: 580, 
      brand: "Crown Business", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX4L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Q3&s",
      description: "Eric Ries' methodology for building successful businesses. Teaches how to launch products faster and more efficiently.",
      features: ["Business methodology", "Startup strategy", "Product development", "Efficiency"],
      category: "Books"
    },
    { 
      name: "Deep Work", 
      price: 520, 
      brand: "Grand Central", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY5L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3R3&s",
      description: "Cal Newport's guide to focused success in a distracted world. Teaches how to develop the superpower of deep, focused work.",
      features: ["Focus training", "Productivity", "Professional success", "Mental discipline"],
      category: "Books"
    },
    { 
      name: "The Alchemist", 
      price: 380, 
      brand: "HarperCollins", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ6L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3S3&s",
      description: "Paulo Coelho's mystical story about following your dreams. A timeless tale of self-discovery and spiritual journey.",
      features: ["Spiritual journey", "Dream following", "Self-discovery", "Inspirational fiction"],
      category: "Books"
    }
  ],
  "Beauty products": [
    { 
      name: "Facial Cleanser", 
      brand: "Cetaphil", 
      price: 499, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelu7vWR2Kzvg07jNJtgx8TyKpCMROQVpblw&s",
      description: "Cetaphil's Facial Cleanser gently removes dirt, oil, and makeup without irritating or drying out your skin. Dermatologist-recommended, it's ideal for all skin types and perfect for everyday use.",
      features: ["Gentle cleansing", "Dermatologist recommended", "All skin types", "Everyday use"],
      category: "Beauty products"
    },
    { 
      name: "Soap", 
      price: 799, 
      brand: "LUX",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qE-opWsX4GBSq_ZytwJqSaUiKRusN__WLA&s",
      description: "LUX soap combines fragrant essential oils with creamy lather for a luxurious bathing experience. It cleanses thoroughly, leaving your skin smooth, refreshed, and delicately perfumed after every wash.",
      features: ["Essential oils", "Creamy lather", "Luxurious experience", "Fragrant"],
      category: "Beauty products"
    },
    { 
      name: "Moisturizer", 
      price: 999, 
      brand: "Mama Earth", 
      img: "https://www.jiomart.com/images/product/original/492848024/pond-s-glycerin-vitamin-e-light-moisturizer-for-soft-glowing-skin-200-ml-product-images-o492848024-p591962562-0-202410011449.jpg?im=Resize=(420,420)",
      description: "Mama Earth Moisturizer is enriched with natural ingredients like glycerin and Vitamin E. It hydrates dry skin deeply, locks in moisture, and provides long-lasting softness without leaving a greasy feeling.",
      features: ["Natural ingredients", "Deep hydration", "Non-greasy", "Long-lasting softness"],
      category: "Beauty products"
    },
    { 
      name: "Sunscreen", 
      brand: "Lotus", 
      price: 699, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3T3&s",
      description: "Lotus Sunscreen offers broad-spectrum SPF 50 protection, non-greasy formula, and water resistance. Essential for daily sun protection with natural ingredients.",
      features: ["SPF 50", "Broad spectrum", "Non-greasy", "Water resistant"],
      category: "Beauty products"
    },
    { 
      name: "Face Serum", 
      brand: "Plum", 
      price: 899, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3U3&s",
      description: "Plum Face Serum contains vitamin C, hyaluronic acid, and antioxidants. Brightens skin, reduces dark spots, and provides intense hydration for glowing skin.",
      features: ["Vitamin C", "Hyaluronic acid", "Brightening", "Intense hydration"],
      category: "Beauty products"
    },
    { 
      name: "Lip Balm", 
      brand: "Burt's Bees", 
      price: 299, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3V3&s",
      description: "Burt's Bees Lip Balm features natural beeswax, vitamin E, and peppermint oil. Moisturizes dry lips and provides long-lasting protection.",
      features: ["Natural beeswax", "Vitamin E", "Peppermint oil", "Long-lasting"],
      category: "Beauty products"
    },
    { 
      name: "Face Mask", 
      brand: "Innisfree", 
      price: 449, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3W3&s",
      description: "Innisfree Face Mask contains volcanic clay, tea tree oil, and natural extracts. Deep cleanses pores and controls excess oil for clear skin.",
      features: ["Volcanic clay", "Tea tree oil", "Pore cleansing", "Oil control"],
      category: "Beauty products"
    },
    { 
      name: "Eye Cream", 
      brand: "The Face Shop", 
      price: 799, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3X3&s",
      description: "The Face Shop Eye Cream contains retinol, peptides, and caffeine. Reduces dark circles, fine lines, and puffiness around the eyes.",
      features: ["Retinol", "Peptides", "Caffeine", "Anti-aging"],
      category: "Beauty products"
    },
    { 
      name: "Body Lotion", 
      brand: "Nivea", 
      price: 399, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Y3&s",
      description: "Nivea Body Lotion features deep moisture formula, almond oil, and long-lasting hydration. Keeps skin soft and smooth all day.",
      features: ["Deep moisture", "Almond oil", "Long-lasting", "All-day softness"],
      category: "Beauty products"
    },
    { 
      name: "Hair Oil", 
      brand: "Parachute", 
      price: 349, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Z3&s",
      description: "Parachute Hair Oil contains pure coconut oil, vitamin E, and essential nutrients. Nourishes hair, reduces hair fall, and promotes growth.",
      features: ["Coconut oil", "Vitamin E", "Hair nourishment", "Reduces hair fall"],
      category: "Beauty products"
    },
    { 
      name: "Shampoo", 
      brand: "Dove", 
      price: 449, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3A3&s",
      description: "Dove Shampoo features keratin repair, moisture lock, and gentle cleansing. Repairs damaged hair and provides salon-like results.",
      features: ["Keratin repair", "Moisture lock", "Gentle cleansing", "Salon results"],
      category: "Beauty products"
    },
    { 
      name: "Face Wash", 
      brand: "Himalaya", 
      price: 299, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3B3&s",
      description: "Himalaya Face Wash contains neem, turmeric, and natural herbs. Cleanses deeply, removes impurities, and prevents acne.",
      features: ["Neem extract", "Turmeric", "Natural herbs", "Acne prevention"],
      category: "Beauty products"
    },
    { 
      name: "Toner", 
      brand: "Kaya", 
      price: 899, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcD6L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3C3&s",
      description: "Kaya Toner contains rose water, aloe vera, and witch hazel. Balances pH, tightens pores, and refreshes skin.",
      features: ["Rose water", "Aloe vera", "Witch hazel", "pH balance"],
      category: "Beauty products"
    }
  ],
  "Dry fruits": [
    { 
      name: "Almonds", 
      brand: "NutRaj", 
      price: 899, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboksNhGzNTow__4-kQWH3OLuiwCZ7bk6MAA&s",
      description: "NutRaj Almonds are crunchy, nutrient-rich, and loaded with antioxidants. They're a great source of protein, fiber, and Vitamin E, perfect for snacking or adding to breakfast cereals and desserts.",
      features: ["High protein", "Antioxidants", "Vitamin E rich", "Versatile usage"],
      category: "Dry fruits"
    },
    { 
      name: "Cashew Nuts", 
      price: 999, 
      brand: "Gretel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK5LCuqlGF0-2jpK8C6PmK6Z-wpua3aHEVw&s",
      description: "Gretel Cashew Nuts offer a rich, buttery flavor and are packed with healthy fats, minerals, and protein. Perfect for cooking, baking, or enjoying straight from the pack as a snack.",
      features: ["Healthy fats", "Rich flavor", "High protein", "Cooking versatile"],
      category: "Dry fruits"
    },
    { 
      name: "Walnuts", 
      price: 1099, 
      brand: "Happilo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5rDUYeqDU_p0GDuHk7iWn9bv5TIi9vjMWg&s",
      description: "Happilo Walnuts are premium quality, brain-boosting dry fruits filled with Omega-3 fatty acids. They support heart health and cognitive function, making them a smart addition to your daily diet.",
      features: ["Omega-3 rich", "Brain health", "Heart healthy", "Premium quality"],
      category: "Dry fruits"
    },
    { 
      name: "Pistachios", 
      price: 1299, 
      brand: "Tata Sampann",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3D3&s",
      description: "Tata Sampann Pistachios are premium quality nuts with rich flavor and vibrant green color. High in protein and antioxidants, perfect for healthy snacking.",
      features: ["High protein", "Antioxidants", "Rich flavor", "Premium quality"],
      category: "Dry fruits"
    },
    { 
      name: "Raisins", 
      price: 499, 
      brand: "Nutraj",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3E3&s",
      description: "Nutraj Raisins are naturally sweet, sun-dried grapes packed with energy and fiber. Perfect for baking, cooking, or as a healthy snack.",
      features: ["Natural sweetness", "High fiber", "Energy rich", "Versatile"],
      category: "Dry fruits"
    },
    { 
      name: "Dates", 
      price: 599, 
      brand: "Safal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3F3&s",
      description: "Safal Dates are soft, chewy, and naturally sweet. Rich in vitamins and minerals, they provide instant energy and support digestive health.",
      features: ["Natural sweetness", "Vitamin rich", "Energy boost", "Digestive health"],
      category: "Dry fruits"
    },
    { 
      name: "Figs", 
      price: 899, 
      brand: "DryFruit House",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3G3&s",
      description: "DryFruit House Figs are premium quality dried figs with natural sweetness and high fiber content. Excellent for digestive health and natural sweetness.",
      features: ["High fiber", "Natural sweetness", "Digestive health", "Premium quality"],
      category: "Dry fruits"
    },
    { 
      name: "Peanuts", 
      price: 399, 
      brand: "Bikano",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3H3&s",
      description: "Bikano Peanuts are crunchy, protein-rich nuts perfect for snacking. High in healthy fats and essential nutrients for overall wellness.",
      features: ["High protein", "Healthy fats", "Crunchy texture", "Essential nutrients"],
      category: "Dry fruits"
    },
    { 
      name: "Mixed Nuts", 
      price: 1499, 
      brand: "Royal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3I3&s",
      description: "Royal Mixed Nuts combine almonds, cashews, walnuts, and pistachios in perfect proportions. A nutritious blend offering variety and balanced nutrition.",
      features: ["Nutritious blend", "Variety pack", "Balanced nutrition", "Premium mix"],
      category: "Dry fruits"
    },
    { 
      name: "Apricots", 
      price: 799, 
      brand: "Kashmir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3J3&s",
      description: "Kashmir Apricots are sun-dried, sweet, and tangy with high vitamin A content. Perfect for snacking and supporting eye health.",
      features: ["Vitamin A rich", "Sun-dried", "Sweet tangy", "Eye health"],
      category: "Dry fruits"
    },
    { 
      name: "Hazelnuts", 
      price: 1199, 
      brand: "Nutraj",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3K3&s",
      description: "Nutraj Hazelnuts are crunchy, flavorful nuts rich in healthy fats and antioxidants. Perfect for baking and healthy snacking.",
      features: ["Healthy fats", "Antioxidants", "Crunchy texture", "Baking perfect"],
      category: "Dry fruits"
    },
    { 
      name: "Brazil Nuts", 
      price: 1399, 
      brand: "Organic India",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3L3&s",
      description: "Organic India Brazil Nuts are selenium-rich nuts supporting immune function and thyroid health. Large, creamy nuts with rich flavor.",
      features: ["Selenium rich", "Immune support", "Thyroid health", "Creamy texture"],
      category: "Dry fruits"
    }
  ],
  "Home Furnitures": [
    { 
      name: "Sofa Set", 
      price: 19999,
      brand: "Royalok", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDVh6kklPNEsj5U7pSdlfuq9fzCrEoH2fA&s",
      description: "The Royalok Sofa Set offers plush seating with high-density foam and durable fabric. Its modern aesthetic and sturdy wooden frame make it a stylish and lasting addition to your living room.",
      features: ["High-density foam", "Durable fabric", "Modern design", "Sturdy frame"],
      category: "Home Furnitures"
    },
    { 
      name: "Dining Table", 
      price: 15999, 
      brand: "Sun furniture",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6e_zn4b-UyF9743JIErlKAhLlguZ41bxPQ&s",
      description: "Crafted from premium wood, this Sun Furniture Dining Table combines elegance with durability. Its spacious design comfortably seats six, perfect for family dinners or hosting guests in style.",
      features: ["Premium wood", "Spacious design", "Seats six", "Elegant finish"],
      category: "Home Furnitures"
    },
    { 
      name: "Queen Bed", 
      price: 24999, 
      brand: "Wooden twist",
      img: "https://damroimages.blob.core.windows.net/damroimages/9186-1.jpg",
      description: "The Wooden Twist Queen Bed features a solid hardwood frame and a sleek headboard. Designed for both comfort and durability, it's the centerpiece your bedroom deserves for restful nights.",
      features: ["Hardwood frame", "Sleek headboard", "Comfortable", "Durable"],
      category: "Home Furnitures"
    },
    { 
      name: "Office Chair", 
      price: 8999, 
      brand: "Green Soul",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3M3&s",
      description: "Green Soul Office Chair features ergonomic design, lumbar support, and breathable mesh back. Perfect for long working hours with adjustable height and tilt.",
      features: ["Ergonomic design", "Lumbar support", "Breathable mesh", "Adjustable"],
      category: "Home Furnitures"
    },
    { 
      name: "Wardrobe", 
      price: 12999, 
      brand: "Godrej",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3N3&s",
      description: "Godrej Wardrobe offers spacious storage with multiple compartments, durable construction, and modern design. Perfect for organizing clothes and accessories efficiently.",
      features: ["Spacious storage", "Multiple compartments", "Durable construction", "Modern design"],
      category: "Home Furnitures"
    },
    { 
      name: "Study Table", 
      price: 6999, 
      brand: "Amazon Basics",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3O3&s",
      description: "Amazon Basics Study Table features sturdy construction, spacious desktop, and cable management. Ideal for students and professionals with clean, minimalist design.",
      features: ["Sturdy construction", "Spacious desktop", "Cable management", "Minimalist design"],
      category: "Home Furnitures"
    },
    { 
      name: "TV Unit", 
      price: 7999, 
      brand: "Urban Ladder",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3P3&s",
      description: "Urban Ladder TV Unit combines style with functionality, featuring ample storage space and modern design. Perfect for organizing entertainment systems.",
      features: ["Ample storage", "Modern design", "Entertainment ready", "Stylish"],
      category: "Home Furnitures"
    },
    { 
      name: "Bookshelf", 
      price: 4999, 
      brand: "Nilkamal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Q3&s",
      description: "Nilkamal Bookshelf offers multiple tiers, sturdy construction, and space-saving design. Perfect for organizing books and decorative items.",
      features: ["Multiple tiers", "Sturdy construction", "Space saving", "Versatile"],
      category: "Home Furnitures"
    },
    { 
      name: "Coffee Table", 
      price: 5999, 
      brand: "Woodsworth",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3R3&s",
      description: "Woodsworth Coffee Table features elegant design, sturdy construction, and spacious surface. Perfect complement to your living room with functional storage.",
      features: ["Elegant design", "Sturdy construction", "Spacious surface", "Functional storage"],
      category: "Home Furnitures"
    },
    { 
      name: "Recliner", 
      price: 18999, 
      brand: "Durian",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3S3&s",
      description: "Durian Recliner offers luxurious comfort, multiple reclining positions, and premium upholstery. Perfect for relaxation and entertainment.",
      features: ["Luxurious comfort", "Multiple positions", "Premium upholstery", "Entertainment ready"],
      category: "Home Furnitures"
    },
    { 
      name: "Side Table", 
      price: 2999, 
      brand: "Furniture Kraft",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3T3&s",
      description: "Furniture Kraft Side Table features compact design, sturdy construction, and versatile usage. Perfect as bedside table or accent piece.",
      features: ["Compact design", "Sturdy construction", "Versatile usage", "Accent piece"],
      category: "Home Furnitures"
    },
    { 
      name: "Shoe Rack", 
      price: 1999, 
      brand: "Crystal Furnitech",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3U3&s",
      description: "Crystal Furnitech Shoe Rack offers multiple tiers, space-saving design, and durable construction. Perfect for organizing footwear efficiently.",
      features: ["Multiple tiers", "Space saving", "Durable construction", "Efficient organization"],
      category: "Home Furnitures"
    }
  ],
  Kilos: [
    { 
      name: "Rice (5kg)", 
      price: 599,
      brand: "India Gate", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpr68FDh6xxaWIwFmu5mm3bYd0zBc503i5Q&s",
      description: "India Gate Basmati Rice is long-grained, aromatic, and perfect for biryanis and daily meals. It cooks fluffy and non-sticky, providing high-quality nutrition and authentic taste with every delicious serving.",
      features: ["Long-grained", "Aromatic", "Non-sticky", "Nutritious"],
      category: "Kilos"
    },
    { 
      name: "Wheat Flour (5kg)", 
      price: 399,
      brand: "Patanjali", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNiEUY9dmXOPdrRZSc-Uzi6Qk5GXUf7sucg&s",
      description: "Patanjali Wheat Flour is made from 100% whole grains using traditional stone grinding techniques. Rich in dietary fiber and essential nutrients, it ensures soft rotis and promotes digestive health naturally.",
      features: ["100% whole grains", "Stone ground", "High fiber", "Digestive health"],
      category: "Kilos"
    },
    { 
      name: "Sugar (5kg)", 
      price: 250,
      brand: "Madhur", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzQ4pycumT-eihOXuWT3B8r_BwsrLVrWlyg&s",
      description: "Madhur Sugar is crystal-clear and made from superior-quality cane. It dissolves quickly and enhances the flavor of your beverages, desserts, and sweets while meeting the highest purity and hygiene standards.",
      features: ["Crystal clear", "Superior cane", "Quick dissolving", "High purity"],
      category: "Kilos"
    },
    { 
      name: "Toor Dal (5kg)", 
      price: 699,
      brand: "Tata Sampann", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3V3&s",
      description: "Tata Sampann Toor Dal is premium quality pigeon pea lentils, rich in protein and essential nutrients. Perfect for making delicious dal tadka and traditional Indian dishes.",
      features: ["High protein", "Premium quality", "Nutrient rich", "Traditional taste"],
      category: "Kilos"
    },
    { 
      name: "Moong Dal (5kg)", 
      price: 549,
      brand: "Safal", 
      img: "https://image01.realme.net/general/20210525/1621918429442.jpg",
      description: "Safal Moong Dal is high-quality green gram lentils, easy to digest and rich in protein. Perfect for making dal, soups, and traditional Indian dishes.",
      features: ["Easy to digest", "High protein", "Quality lentils", "Versatile"],
      category: "Kilos"
    },
    { 
      name: "Chana Dal (5kg)", 
      price: 599,
      brand: "Nutraj", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3X3&s",
      description: "Nutraj Chana Dal is premium quality Bengal gram lentils, rich in protein and dietary fiber. Perfect for making delicious dal and traditional Indian recipes.",
      features: ["High protein", "Dietary fiber", "Premium quality", "Traditional recipes"],
      category: "Kilos"
    },
    { 
      name: "Masoor Dal (5kg)", 
      price: 449,
      brand: "Organic India", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3Y3&s",
      description: "Organic India Masoor Dal is organic red lentils, rich in protein and iron. Quick cooking and easy to digest, perfect for healthy meals.",
      features: ["Organic", "Rich in iron", "Quick cooking", "Easy to digest"],
      category: "Kilos"
    },
    { 
      name: "Urad Dal (5kg)", 
      price: 699,
      brand: "24 Mantra", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Z3&s",
      description: "24 Mantra Urad Dal is organic black gram lentils, rich in protein and essential nutrients. Perfect for making dal makhani and traditional dishes.",
      features: ["Organic", "High protein", "Essential nutrients", "Traditional dishes"],
      category: "Kilos"
    },
    { 
      name: "Besan (5kg)", 
      price: 399,
      brand: "Aashirvaad", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3A3&s",
      description: "Aashirvaad Besan is fine gram flour, perfect for making pakoras, kadhi, and sweets. Made from premium quality chickpeas with consistent texture.",
      features: ["Fine texture", "Premium chickpeas", "Consistent quality", "Versatile"],
      category: "Kilos"
    },
    { 
      name: "Sooji (5kg)", 
      price: 299,
      brand: "Annapurna", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3B3&s",
      description: "Annapurna Sooji is coarse semolina, perfect for making upma, halwa, and desserts. Made from premium wheat with consistent quality.",
      features: ["Coarse texture", "Premium wheat", "Consistent quality", "Traditional dishes"],
      category: "Kilos"
    },
    { 
      name: "Maida (5kg)", 
      price: 249,
      brand: "Nature Fresh", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3C3&s",
      description: "Nature Fresh Maida is refined wheat flour, perfect for making breads, naans, and baked goods. Fine texture and consistent quality.",
      features: ["Refined wheat", "Fine texture", "Consistent quality", "Baking perfect"],
      category: "Kilos"
    },
    { 
      name: "Rava (5kg)", 
      price: 279,
      brand: "Sri Sri Tattva", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3D3&s",
      description: "Sri Sri Tattva Rava is medium coarse semolina, perfect for making traditional dishes. Made from premium quality wheat.",
      features: ["Medium coarse", "Premium wheat", "Traditional dishes", "Quality assured"],
      category: "Kilos"
    },
    { 
      name: "Jaggery (5kg)", 
      price: 399,
      brand: "24 Mantra", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSnoemSOIW7b92stk0ipFFUfu8SR9bw3CpQ&s",
      description: "24 Mantra Jaggery is organic and unrefined, rich in minerals and antioxidants. Perfect for sweetening beverages and desserts.",
      features: ["Organic", "Unrefined", "Rich in minerals", "Antioxidants"],
      category: "Kilos"
    },
    { 
      name: "Bajra (5kg)", 
      price: 499,
      brand: "Nature Fresh", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3E3&s",
      description: "Nature Fresh Bajra is pearl millet, rich in protein and fiber. Perfect for making traditional dishes and healthy meals.",
      features: ["High protein", "High fiber", "Traditional dishes", "Healthy meals"],
      category: "Kilos"
    },
    { 
      name: "Ragi (5kg)", 
      price: 549,
      brand: "Sri Sri Tattva", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3F3&s",
      description: "Sri Sri Tattva Ragi is finger millet, rich in calcium and iron. Perfect for making traditional dishes and healthy meals.",
      features: ["High calcium", "High iron", "Traditional dishes", "Healthy meals"],
      category: "Kilos"
    },
    { 
      name: "Oats (5kg)", 
      price: 699,
      brand: "Quaker", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3G3&s",
      description: "Quaker Oats is rolled oats, perfect for making oatmeal, smoothies, and baked goods. Rich in fiber and essential nutrients.",
      features: ["High fiber", "Essential nutrients", "Versatile usage", "Healthy meals"],
      category: "Kilos"
    },
    { 
      name: "Corn Flakes (5kg)", 
      price: 799,
      brand: "Kellogg's", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3H3&s",
      description: "Kellogg's Corn Flakes is crunchy and delicious, perfect for breakfast and snacking. Made from high-quality corn and essential nutrients.",
      features: ["Crunchy texture", "High-quality corn", "Essential nutrients", "Breakfast perfect"],
      category: "Kilos"
    },
    { 
      name: "Poha (5kg)", 
      price: 499,
      brand: "Aashirvaad", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3I3&s",
      description: "Aashirvaad Poha is flattened rice, perfect for making traditional dishes and healthy meals. Rich in carbohydrates and essential nutrients.",
      features: ["High carbohydrates", "Essential nutrients", "Traditional dishes", "Healthy meals"],
      category: "Kilos"
    },
    { 
      name: "Millet (5kg)", 
      price: 599,
      brand: "Sri Sri Tattva", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3J3&s",
      description: "Sri Sri Tattva Millet is a blend of millets, rich in protein and fiber. Perfect for making traditional dishes and healthy meals.",
      features: ["High protein", "High fiber", "Traditional dishes", "Healthy meals"],
      category: "Kilos"
    },
    { 
      name: "Gram Flour (5kg)", 
      price: 399,
      brand: "Aashirvaad", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3K3&s",
      description: "Aashirvaad Gram Flour is fine gram flour, perfect for making pakoras, kadhi, and sweets. Made from premium quality chickpeas with consistent texture.",
      features: ["Fine texture", "Premium chickpeas", "Consistent quality", "Versatile"],
      category: "Kilos"
    },
    { 
      name: "Sattu (5kg)", 
      price: 499,
      brand: "Sri Sri Tattva", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3L3&s",
      description: "Sri Sri Tattva Sattu is roasted gram flour, perfect for making traditional dishes and healthy meals. Rich in protein and essential nutrients.",
      features: ["High protein", "Essential nutrients", "Traditional dishes", "Healthy meals"],
      category: "Kilos"
    },
    {
      name: "Fresh Paneer (1kg)",
      price: 399,
      brand: "Amul",
      img: groceryImg("Fresh Paneer"),
      description: "Amul Fresh Paneer is soft, fresh cottage cheese made from pure milk. Perfect for paneer butter masala, palak paneer, tikka, and other Indian dishes.",
      features: ["Made from pure milk", "Soft texture", "High protein", "Ready to cook"],
      category: "Kilos"
    },
    {
      name: "Toned Milk (1L)",
      price: 68,
      brand: "Amul",
      img: groceryImg("Toned Milk"),
      description: "Amul Taaza Toned Milk is pasteurised fresh milk — the essential base for making paneer, curd, sweets, tea, and everyday cooking.",
      features: ["Pasteurised", "Fresh daily", "Base for paneer and curd", "Rich in calcium"],
      category: "Kilos"
    },
    {
      name: "Fresh Curd (1kg)",
      price: 75,
      brand: "Nandini",
      img: groceryImg("Fresh Curd"),
      description: "Nandini Fresh Curd is thick, creamy dahi. Used to curdle milk when making paneer at home, for marinades, raita, and kadhi.",
      features: ["Thick and creamy", "Curdling agent for paneer", "Probiotic", "Marinades and raita"],
      category: "Kilos"
    },
    {
      name: "Fresh Lemons (500g)",
      price: 45,
      brand: "Farm Fresh",
      img: groceryImg("Fresh Lemons"),
      description: "Juicy fresh lemons — squeeze into hot milk to split it when making paneer at home, or use for salads, drinks, and seasoning.",
      features: ["Curdling agent for paneer", "Rich in vitamin C", "Fresh and juicy", "Multi-purpose"],
      category: "Kilos"
    },
    {
      name: "Iodised Salt (1kg)",
      price: 28,
      brand: "Tata",
      img: groceryImg("Iodised Salt"),
      description: "Tata Iodised Salt — the everyday essential for all cooking, from paneer dishes to baking and seasoning.",
      features: ["Iodised", "Everyday essential", "Free-flowing", "Trusted brand"],
      category: "Kilos"
    },
    {
      name: "Butter (500g)",
      price: 275,
      brand: "Amul",
      img: groceryImg("Butter"),
      description: "Amul Butter — creamy and delicious, essential for paneer butter masala, parathas, baking, and breakfast toast.",
      features: ["Creamy texture", "For butter masala", "Baking essential", "Made from fresh cream"],
      category: "Kilos"
    },
    {
      name: "Pure Ghee (1L)",
      price: 649,
      brand: "Amul",
      img: groceryImg("Pure Ghee"),
      description: "Amul Pure Ghee made from fresh cream. Adds rich aroma to curries, dals, sweets, and traditional cooking.",
      features: ["Pure cow ghee", "Rich aroma", "Traditional cooking", "High smoke point"],
      category: "Kilos"
    },
    {
      name: "Sunflower Oil (1L)",
      price: 145,
      brand: "Fortune",
      img: groceryImg("Sunflower Oil"),
      description: "Fortune Sunflower Oil is a light, healthy refined oil for everyday frying, sautéing, and all Indian cooking.",
      features: ["Light and healthy", "Refined", "Everyday cooking", "Vitamin E enriched"],
      category: "Kilos"
    },
    {
      name: "Garam Masala (100g)",
      price: 95,
      brand: "MDH",
      img: groceryImg("Garam Masala"),
      description: "MDH Garam Masala is an aromatic blend of ground spices — the finishing touch for paneer butter masala, curries, and gravies.",
      features: ["Aromatic spice blend", "For curries and gravies", "Authentic taste", "Premium spices"],
      category: "Kilos"
    },
    {
      name: "Turmeric Powder (200g)",
      price: 68,
      brand: "Everest",
      img: groceryImg("Turmeric Powder"),
      description: "Everest Turmeric Powder adds colour, flavour, and health benefits to dals, curries, and everyday Indian cooking.",
      features: ["Rich colour", "Anti-inflammatory", "Everyday cooking", "Pure and natural"],
      category: "Kilos"
    },
    {
      name: "Red Chilli Powder (200g)",
      price: 88,
      brand: "Everest",
      img: groceryImg("Red Chilli Powder"),
      description: "Everest Red Chilli Powder brings heat and vibrant colour to curries, marinades, and paneer dishes.",
      features: ["Vibrant colour", "Perfect heat", "For curries and marinades", "Premium chillies"],
      category: "Kilos"
    },
    {
      name: "Cumin Seeds (200g)",
      price: 120,
      brand: "Catch",
      img: groceryImg("Cumin Seeds"),
      description: "Catch Cumin Seeds (jeera) for tempering dals, curries, rice, and adding earthy flavour to Indian dishes.",
      features: ["Earthy flavour", "For tempering", "Aids digestion", "Premium quality"],
      category: "Kilos"
    },
    {
      name: "Ginger Garlic Paste (300g)",
      price: 85,
      brand: "Smith & Jones",
      img: groceryImg("Ginger Garlic Paste"),
      description: "Smith & Jones Ginger Garlic Paste — a ready-to-use base for gravies, paneer dishes, biryanis, and marinades.",
      features: ["Ready to use", "Base for gravies", "No chopping needed", "Fresh taste"],
      category: "Kilos"
    },
    {
      name: "Fresh Onions (2kg)",
      price: 70,
      brand: "Farm Fresh",
      img: groceryImg("Fresh Onions"),
      description: "Farm fresh onions — the base of almost every Indian gravy, curry, and salad.",
      features: ["Gravy base", "Fresh from farms", "Everyday essential", "Rich flavour"],
      category: "Kilos"
    },
    {
      name: "Fresh Tomatoes (1kg)",
      price: 40,
      brand: "Farm Fresh",
      img: groceryImg("Fresh Tomatoes"),
      description: "Juicy farm fresh tomatoes for gravies, paneer butter masala, salads, and everyday cooking.",
      features: ["Juicy and ripe", "For gravies and salads", "Rich in lycopene", "Fresh from farms"],
      category: "Kilos"
    },
    {
      name: "Kasuri Methi (100g)",
      price: 60,
      brand: "MDH",
      img: groceryImg("Kasuri Methi"),
      description: "MDH Kasuri Methi (dried fenugreek leaves) — the signature aroma in paneer butter masala and rich North Indian gravies.",
      features: ["Signature aroma", "For rich gravies", "Dried fenugreek leaves", "Premium quality"],
      category: "Kilos"
    },
    {
      name: "Fresh Cream (250ml)",
      price: 95,
      brand: "Amul",
      img: groceryImg("Fresh Cream"),
      description: "Amul Fresh Cream adds richness to paneer butter masala, soups, desserts, and creamy gravies.",
      features: ["Rich and smooth", "For creamy gravies", "Desserts and soups", "UHT processed"],
      category: "Kilos"
    },
    {
      name: "Sugar (1kg)",
      price: 48,
      brand: "Madhur",
      img: groceryImg("Sugar"),
      description: "Madhur Pure Refined Sugar for tea, desserts, baking, and balancing flavours in curries.",
      features: ["Pure refined", "Fine crystals", "Everyday essential", "Hygienically packed"],
      category: "Kilos"
    }
  ],
  "Toys and More": [
    { 
      name: "Remote Control Car", 
      price: 599,
      brand: "CPT toys", 
      img: "https://images.jdmagicbox.com/comp/bangalore/e8/080pxx80.xx80.230711192913.v7e8/catalogue/cpt-toys-rmv-extension-2nd-stage-bangalore-toy-dealers-z7binljm6b-250.jpg?clr=#5a330c",
      description: "This CPT Toys Remote Control Car delivers high-speed performance with responsive controls. Featuring a sleek design and rechargeable battery, it's perfect for kids who love racing and outdoor excitement.",
      features: ["High-speed", "Responsive controls", "Rechargeable", "Sleek design"],
      category: "Toys and More"
    },
    { 
      name: "LEGO Classic Bricks Set", 
      price: 399,
      brand: "LEGO", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNp1UENNrze5hLxbE15OBwhkwq511O2QR0AA&s",
      description: "The LEGO Classic Bricks Set inspires creativity with colorful pieces for endless building possibilities. Ideal for children and adults, it helps develop motor skills, imagination, and problem-solving through playful construction.",
      features: ["Creative building", "Colorful pieces", "Motor skills", "Problem solving"],
      category: "Toys and More"
    },
    { 
      name: "Rubik's Cube 3x3", 
      price: 250,
      brand: "Funskool", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSnoemSOIW7b92stk0ipFFUfu8SR9bw3CpQ&s",
      description: "Funskool's Rubik's Cube 3x3 is a classic brain-teasing puzzle that sharpens memory and logic. Its smooth-turning design is perfect for beginners and speedcubers who love mental challenges and competition.",
      features: ["Brain teaser", "Memory sharping", "Logic building", "Smooth turning"],
      category: "Toys and More"
    },
    { 
      name: "Board Game Set", 
      price: 799,
      brand: "Funskool", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3E3&s",
      description: "Funskool Board Game Set includes multiple classic games for family entertainment. Perfect for game nights and developing strategic thinking.",
      features: ["Multiple games", "Family entertainment", "Strategic thinking", "Classic games"],
      category: "Toys and More"
    },
    { 
      name: "Artificial Intelligence Kit", 
      price: 2999,
      brand: "Avishkaar", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcV8L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3F3&s",
      description: "Avishkaar AI Kit introduces children to artificial intelligence and robotics through hands-on projects. Perfect for STEM learning and future tech skills.",
      features: ["AI learning", "Robotics", "STEM education", "Hands-on projects"],
      category: "Toys and More"
    },
    { 
      name: "Drone with Camera", 
      price: 4999,
      brand: "Syma", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcW9L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3G3&s",
      description: "Syma Drone with Camera offers aerial photography and stable flight controls. Perfect for beginners and aerial enthusiasts with HD camera.",
      features: ["HD camera", "Aerial photography", "Stable flight", "Beginner friendly"],
      category: "Toys and More"
    },
    { 
      name: "Science Experiment Kit", 
      price: 1499,
      brand: "Elenco", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcX0L7M6N5O4I3J2H1G0F9E8D7C6B5A4Z3Y3H3&s",
      description: "Elenco Science Experiment Kit includes multiple experiments for learning chemistry and physics. Perfect for young scientists and STEM education.",
      features: ["Multiple experiments", "STEM learning", "Chemistry", "Physics"],
      category: "Toys and More"
    },
    { 
      name: "Musical Keyboard", 
      price: 3999,
      brand: "Casio", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3I3&s",
      description: "Casio Musical Keyboard features multiple tones, rhythms, and learning functions. Perfect for beginners and music enthusiasts.",
      features: ["Multiple tones", "Rhythms", "Learning functions", "Beginner friendly"],
      category: "Toys and More"
    },
    { 
      name: "Cricket Set", 
      price: 1299,
      brand: "SG", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3J3&s",
      description: "SG Cricket Set includes bat, ball, and stumps for complete cricket experience. Perfect for young cricket enthusiasts and practice sessions.",
      features: ["Complete set", "Quality equipment", "Practice ready", "Cricket essentials"],
      category: "Toys and More"
    },
    { 
      name: "Art and Craft Kit", 
      price: 899,
      brand: "Faber-Castell", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3K3&s",
      description: "Faber-Castell Art and Craft Kit includes colors, brushes, and materials for creative expression. Perfect for young artists and creative development.",
      features: ["Complete materials", "Creative expression", "Quality supplies", "Artistic development"],
      category: "Toys and More"
    },
    { 
      name: "Puzzle Set", 
      price: 699,
      brand: "Frank", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3L3&s",
      description: "Frank Puzzle Set includes multiple puzzles with varying difficulty levels. Perfect for developing problem-solving skills and cognitive abilities.",
      features: ["Multiple puzzles", "Varying difficulty", "Problem solving", "Cognitive development"],
      category: "Toys and More"
    },
    { 
      name: "Educational Tablet", 
      price: 2499,
      brand: "Intellecta", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3M3&s",
      description: "Intellecta Educational Tablet offers interactive learning with multiple subjects and games. Perfect for early childhood education and digital learning.",
      features: ["Interactive learning", "Multiple subjects", "Educational games", "Digital learning"],
      category: "Toys and More"
    },
    { 
      name: "Building Blocks", 
      price: 999,
      brand: "Mega Bloks", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSnoemSOIW7b92stk0ipFFUfu8SR9bw3CpQ&s",
      description: "Mega Bloks Building Blocks are colorful and versatile, perfect for developing motor skills and creativity. Ideal for young builders and architects.",
      features: ["Colorful blocks", "Versatile usage", "Motor skills", "Creative building"],
      category: "Toys and More"
    },
    { 
      name: "Nerf Gun", 
      price: 1499,
      brand: "Hasbro", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU7K8L9M0N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3N3&s",
      description: "Hasbro Nerf Gun is a blaster toy, perfect for outdoor play and action-packed fun. Features soft foam darts and easy reloading.",
      features: ["Soft foam darts", "Easy reloading", "Outdoor play", "Action-packed"],
      category: "Toys and More"
    },
    { 
      name: "Barbie Doll", 
      price: 999,
      brand: "Mattel", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3O3&s",
      description: "Mattel Barbie Doll is a fashion doll, perfect for imaginative play and creative expression. Features stylish outfits and accessories.",
      features: ["Fashion doll", "Imaginative play", "Creative expression", "Stylish outfits"],
      category: "Toys and More"
    },
    { 
      name: "Hot Wheels Track", 
      price: 1299,
      brand: "Mattel", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3P3&s",
      description: "Mattel Hot Wheels Track is a racing track, perfect for high-speed action and stunts. Features loops, jumps, and crashes.",
      features: ["Racing track", "High-speed action", "Stunts", "Loops and jumps"],
      category: "Toys and More"
    },
    { 
      name: "Play-Doh Set", 
      price: 699,
      brand: "Hasbro", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcB4L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3Q3&s",
      description: "Hasbro Play-Doh Set is a modeling compound, perfect for creative expression and artistic development. Features multiple colors and tools.",
      features: ["Modeling compound", "Creative expression", "Artistic development", "Multiple colors"],
      category: "Toys and More"
    },
    { 
      name: "Fisher-Price Toy", 
      price: 999,
      brand: "Fisher-Price", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcC5L1M8N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3R3&s",
      description: "Fisher-Price Toy is a learning toy, perfect for early childhood education and cognitive development. Features interactive play and educational content.",
      features: ["Learning toy", "Early childhood education", "Cognitive development", "Interactive play"],
      category: "Toys and More"
    },
    { 
      name: "Lego Duplo Blocks", 
      price: 1299,
      brand: "LEGO", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA3L0M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3S3&s",
      description: "LEGO Duplo Blocks are large and colorful, perfect for developing motor skills and creativity. Ideal for young builders and architects.",
      features: ["Large blocks", "Colorful", "Motor skills", "Creative building"],
      category: "Toys and More"
    },
    { 
      name: "My Little Pony", 
      price: 999,
      brand: "Hasbro", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcY1L8M7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3T3&s",
      description: "Hasbro My Little Pony is a fashion doll, perfect for imaginative play and creative expression. Features stylish outfits and accessories.",
      features: ["Fashion doll", "Imaginative play", "Creative expression", "Stylish outfits"],
      category: "Toys and More"
    },
    { 
      name: "Thomas and Friends", 
      price: 1299,
      brand: "Mattel", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcZ2L9M0N7N6O5I4J3H2G1F0E9D8C7B6A5Z4Y3U3&s",
      description: "Mattel Thomas and Friends is a train set, perfect for imaginative play and creative expression. Features tracks, trains, and accessories.",
      features: ["Train set", "Imaginative play", "Creative expression", "Tracks and trains"],
      category: "Toys and More"
    }
  ],
  Travel: [
    {
      name: "Trolley Suitcase 68cm",
      price: 4999,
      brand: "American Tourister",
      img: travelImg("Trolley Suitcase"),
      description: "American Tourister hard-shell trolley suitcase with 360° spinner wheels, TSA-friendly lock, and spacious packing compartments — ideal for flights and long trips.",
      features: ["360° spinner wheels", "Hard shell", "Number lock", "68cm check-in size"],
      category: "Travel"
    },
    {
      name: "Trekking Backpack 45L",
      price: 2499,
      brand: "Wildcraft",
      img: travelImg("Trekking Backpack"),
      description: "Wildcraft 45L rucksack with padded straps, rain cover, and multiple compartments — built for treks, hikes, and backpacking trips.",
      features: ["45L capacity", "Rain cover included", "Padded back support", "Multiple compartments"],
      category: "Travel"
    },
    {
      name: "Memory Foam Neck Pillow",
      price: 599,
      brand: "TravelEase",
      img: travelImg("Neck Pillow"),
      description: "Ergonomic memory foam neck pillow with washable cover — comfortable support for flights, trains, and road trips.",
      features: ["Memory foam", "Washable cover", "Compact and light", "Ergonomic support"],
      category: "Travel"
    },
    {
      name: "Power Bank 20000mAh",
      price: 1799,
      brand: "Mi",
      img: travelImg("Power Bank"),
      description: "Mi 20000mAh power bank with fast charging and dual USB output — keeps phones and gadgets charged through long journeys.",
      features: ["20000mAh", "Fast charging", "Dual USB output", "Compact design"],
      category: "Travel"
    },
    {
      name: "Universal Travel Adapter",
      price: 899,
      brand: "Belkin",
      img: travelImg("Travel Adapter"),
      description: "All-in-one universal travel adapter that works in 150+ countries with dual USB ports — a must-have for international trips.",
      features: ["Works in 150+ countries", "Dual USB ports", "Compact", "Built-in fuse protection"],
      category: "Travel"
    },
    {
      name: "Camping Tent (2 Person)",
      price: 3999,
      brand: "Quechua",
      img: travelImg("Camping Tent"),
      description: "Quechua waterproof 2-person camping tent with quick setup — perfect for weekend getaways, treks, and outdoor camping trips.",
      features: ["Waterproof", "Quick setup", "Fits 2 people", "Lightweight and portable"],
      category: "Travel"
    },
    {
      name: "Sleeping Bag",
      price: 1899,
      brand: "Coleman",
      img: travelImg("Sleeping Bag"),
      description: "Coleman all-season sleeping bag with soft insulated lining — warm, comfortable rest on camping and trekking trips.",
      features: ["All-season insulation", "Soft lining", "Compression sack included", "Machine washable"],
      category: "Travel"
    },
    {
      name: "Thermosteel Flask 1L",
      price: 1099,
      brand: "Milton",
      img: travelImg("Thermosteel Flask"),
      description: "Milton Thermosteel Flask keeps drinks hot or cold for 24 hours — the perfect travel companion for road trips and treks.",
      features: ["24-hour insulation", "1L capacity", "Leak proof", "Stainless steel"],
      category: "Travel"
    },
    {
      name: "Travel First Aid Kit",
      price: 499,
      brand: "SafeTrip",
      img: travelImg("First Aid Kit"),
      description: "Compact travel first aid kit with bandages, antiseptic, and essentials — safety must-have for every trip and trek.",
      features: ["Compact pouch", "Complete essentials", "Lightweight", "Family safe"],
      category: "Travel"
    },
    {
      name: "Packing Cubes (Set of 6)",
      price: 999,
      brand: "TravelEase",
      img: travelImg("Packing Cubes"),
      description: "Set of 6 packing cubes to organize clothes and accessories inside your suitcase — pack smarter for every trip.",
      features: ["Set of 6 sizes", "Keeps luggage organized", "Durable mesh top", "Lightweight"],
      category: "Travel"
    },
    {
      name: "Binoculars 8x40",
      price: 6499,
      brand: "Nikon",
      img: travelImg("Binoculars"),
      description: "Nikon 8x40 binoculars with bright, sharp optics — great for wildlife safaris, sightseeing, and trekking viewpoints.",
      features: ["8x magnification", "Bright optics", "Rubber grip body", "Carry case included"],
      category: "Travel"
    },
    {
      name: "Duffel Bag 60L",
      price: 1499,
      brand: "Skybags",
      img: travelImg("Duffel Bag"),
      description: "Skybags 60L foldable duffel bag with wheels — flexible extra luggage for weekend trips and shopping hauls.",
      features: ["60L capacity", "Wheels and handle", "Foldable", "Water resistant"],
      category: "Travel"
    },
    {
      name: "Toiletry Organizer Kit",
      price: 699,
      brand: "TravelEase",
      img: travelImg("Toiletry Kit"),
      description: "Hanging toiletry organizer with waterproof lining and multiple pockets — keeps travel essentials tidy and accessible.",
      features: ["Hanging hook", "Waterproof lining", "Multiple pockets", "Compact fold"],
      category: "Travel"
    }
  ],
};

// Get all available categories
export const getCategories = () => {
  return Object.keys(dummyCategoryProducts);
};

// Get products by category
export const getProductsByCategory = (categoryName) => {
  return dummyCategoryProducts[categoryName] || [];
};

// Get all products across all categories
export const getAllProducts = () => {
  return Object.values(dummyCategoryProducts).flat();
};

// Get products within price range
export const getProductsWithinPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

// Get unique brands across all products
export const getAllBrands = () => {
  const allProducts = getAllProducts();
  return [...new Set(allProducts.map(product => product.brand))];
};
