// Central application configuration.
// Every reusable value (branding, navigation, categories, hero content,
// footer links, contact details) lives here so no page hardcodes its own copy.

export const BRAND = {
  name: "Smart E-Commerce",
  tagline: "Everything you need. Delivered smart.",
  copyrightYear: 2025,
};

// Single source of truth for categories — used by Header, Welcome and Layout.
export const CATEGORIES = [
  {
    name: "Mobiles",
    link: "/category/Mobiles",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsVyKiHRsRddFbMcW4Lr67odMgAqmppsWjw&s",
    description: "Latest smartphones and accessories.",
  },
  {
    name: "Electronics",
    link: "/category/Electronics",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J-assgDuuEwMWqxl_KH_ON3IkOyJJCYk6Q&s",
    description: "TVs, gadgets, and smart devices.",
  },
  {
    name: "Fashion",
    link: "/category/Fashion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72ntlVCSm3U5tYml-4a37E1KMqQa3BaupdQ&s",
    description: "Trending clothes and accessories.",
  },
  {
    name: "Home Appliances",
    link: "/category/Home%20Appliances",
    img: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg",
    description: "Appliances for every home need.",
  },
  {
    name: "Books",
    link: "/category/Books",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaJgwmIZea1z7dthmh0dbbUD7vzFYuiPjHA&s",
    description: "Books across all genres and interests.",
  },
  {
    name: "Beauty products",
    link: "/category/Beauty%20products",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH-Fbq-q1S4XJ-xYKEmCr_BPJKJSj0s-gFw&s",
    description: "Skincare, makeup, and wellness.",
  },
  {
    name: "Dry fruits",
    link: "/category/Dry%20fruits",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNA2LdUCP9dwGFKaca-DiB6jUr3rKD_NAesg&s",
    description: "Dry fruits, well and healthy.",
  },
  {
    name: "Home Furnitures",
    link: "/category/Home%20Furnitures",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqTqO7gxYZKAYygDCkt8xlHiHid83NHc7ZTvw2I_ELKO-6k4zS8caN4uW75yxRrifWSU&usqp=CAU",
    description: "Furnishings for every corner of your home.",
  },
  {
    name: "Kilos",
    link: "/category/Kilos",
    img: "https://media.istockphoto.com/id/1941874849/photo/groceries-and-goods-falling-in-a-shopping-cart.jpg?s=612x612&w=0&k=20&c=cuKsrx8lLOdg38bD8_3IzeIICaaKGcXHkYgFoM-LlkI=",
    description: "Bulk deals on quality products.",
  },
  {
    name: "Toys and More",
    link: "/category/Toys",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne3pUwgHf1sq9jWIFAZ9_f8eAmmzYLwmlbA&s",
    description: "Fun toys and gifts for kids.",
  },
];

// Rotating hero banner slides on the home page.
export const HERO_SLIDES = [
  {
    img: "https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg",
    alt: "Season sale on electronics",
  },
  {
    img: "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    alt: "New arrivals across all categories",
  },
  {
    img: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg",
    alt: "Footwear collection",
  },
  {
    img: "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_items_boosted&w=740",
    alt: "Black Friday super sale",
  },
  {
    img: "https://marketplace.canva.com/EAGYmbXgp2Q/1/0/1600w/canva-blue-and-white-modern-fashion-store-banner-E8NwvwOxigg.jpg",
    alt: "Modern fashion store deals",
  },
];

export const HERO_ROTATION_MS = 4000;

// Footer configuration.
export const FOOTER_FEATURES = [
  { label: "Secure Payments", icon: "lock" },
  { label: "Shipping in India", icon: "truck" },
  { label: "Great Value & Quality", icon: "thumbsUp" },
];

export const FOOTER_LINK_GROUPS = [
  {
    title: "Policies",
    links: [
      { label: "Cancellation & Refund", to: "/cancellationandrefund" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy", to: "/PrivacyPage" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Track Order", to: "/TrackOrder" },
      { label: "Order History", to: "/orderhistory" },
      { label: "Profile", to: "/profile" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About us", to: "/about" }],
  },
];

export const CONTACT_INFO = {
  phone: "8277487233",
  email: "Ecommrece@gmail.com",
  location: "JP Nagar, Bengaluru, Karnataka",
  locationUrl:
    "https://www.google.com/maps/search/?api=1&query=JP+Nagar+Bengaluru+Karnataka",
};

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "Pinterest", url: "https://www.pinterest.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
];
