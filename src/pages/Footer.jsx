import React from "react";
import { Link } from "react-router-dom";
import {
  FiLock,
  FiTruck,
  FiThumbsUp,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import {
  BRAND,
  FOOTER_FEATURES,
  FOOTER_LINK_GROUPS,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "../config/constants";
import "./Footer.css";

const featureIcons = {
  lock: <FiLock aria-hidden="true" />,
  truck: <FiTruck aria-hidden="true" />,
  thumbsUp: <FiThumbsUp aria-hidden="true" />,
};

const socialIcons = {
  Facebook: <FaFacebookF aria-hidden="true" />,
  Twitter: <FaTwitter aria-hidden="true" />,
  Instagram: <FaInstagram aria-hidden="true" />,
  Pinterest: <FaPinterestP aria-hidden="true" />,
  YouTube: <FaYoutube aria-hidden="true" />,
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="top-icons">
        {FOOTER_FEATURES.map((feature) => (
          <div className="icon-item" key={feature.label}>
            {featureIcons[feature.icon]}
            <p>{feature.label}</p>
          </div>
        ))}
      </div>

      <div className="footer-links">
        {FOOTER_LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4>Contact Us</h4>
          <p>
            <FiPhone aria-hidden="true" />
            <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
          </p>
          <p>
            <FiMail aria-hidden="true" />
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </p>
          <p>
            <FiMapPin aria-hidden="true" />
            <a
              href={CONTACT_INFO.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT_INFO.location}
            </a>
          </p>
        </div>
      </div>

      <div className="social-icons">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            {socialIcons[social.name]}
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-logo">{BRAND.name}</span>
        <p>
          © {BRAND.name} {BRAND.copyrightYear} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
