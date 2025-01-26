import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import LogoIcon from '../assets/icons/italia-pros-logo.png';

// Main component that renders the navigation bar.
const Navbar = () => {
    // Hook to get the current route location.
    const location = useLocation();

    // Boolean to check if the current page is not the home page.
    const isNotHomePage = location.pathname !== '/';

    // Function to render the logo button. If the user is on a non-home page,
    // the button acts as a link to the home page. Otherwise, the button is disabled.
    const renderLogoButton = () => (
        isNotHomePage ? (
            <Link to="/">
                <button className="logo-button">
                    <img src={LogoIcon} alt="Logo" className="logo-icon" />
                </button>
            </Link>
        ) : (
            <button className="logo-button" disabled>
                <img src={LogoIcon} alt="Logo" className="logo-icon" />
            </button>
        )
    );

    // Main JSX structure of the Navbar component.
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {renderLogoButton()}
            </div>
        </nav>
    );
};

// Exporting the Navbar component as the default export of this file.
export default Navbar;
