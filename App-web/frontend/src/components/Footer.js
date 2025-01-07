import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/footer.css';
import TwitterIcon from '../assets//icons/twitter.png';
import DiscordIcon from '../assets//icons/discord.png';

const SOCIAL_LINKS = [
    {href: "https://x.com/ItaliaPros", label: "Twitter", icon: TwitterIcon},
    {href: "https://discord.gg/2gK6vxzbxB", label: "Discord", icon: DiscordIcon}
];

const MENU_LINKS = [
    {to: "/about", label: "Chi Siamo"}
];

const SocialLinks = () => (
    <div className="footer-social-links">
        {SOCIAL_LINKS.map(({href, label, icon}) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={icon} alt={label} className="social-icon"/>
            </a>
        ))}
    </div>
);

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

const Footer = () => {
    return (
        <footer className="footer">
            <SocialLinks />
            <FooterMenu />
        </footer>
    );
};

export default Footer;