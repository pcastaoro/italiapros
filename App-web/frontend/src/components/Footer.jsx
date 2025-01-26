import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import TwitterIcon from '../assets/icons/twitter.png';
import DiscordIcon from '../assets/icons/discord.png';

// Array containing social media links and their respective icons
const SOCIAL_LINKS = [
    { href: "https://x.com/ItaliaPros", label: "Twitter", icon: TwitterIcon },
    { href: "https://discord.gg/2gK6vxzbxB", label: "Discord", icon: DiscordIcon }
];

// Array containing footer menu links
const MENU_LINKS = [
    { to: "/about", label: "About Us" }
];

// Component that renders social media links with icons
const SocialLinks = () => (
    <div className="footer-social-links">
        {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={icon} alt={label} className="social-icon" />
            </a>
        ))}
    </div>
);

// Component that renders the footer menu links
const FooterMenu = () => (
    <div className="footer-menu-links">
        {MENU_LINKS.map(({ to, label }) => (
            <Link
                key={label}
                to={to}
            >
                {label}
            </Link>
        ))}
    </div>
);

// Main footer component that includes social links and the menu
const Footer = () => {
    return (
        <footer className="footer">
            <SocialLinks />
            <FooterMenu />
        </footer>
    );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
