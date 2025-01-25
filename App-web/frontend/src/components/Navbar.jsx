import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/navbar.css';
import LogoIcon from '../assets/icons/italia-pros-logo.png';

const Navbar = () => {
    const location = useLocation();
    const isNotHomePage = location.pathname !== '/';

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

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {renderLogoButton()}
            </div>
        </nav>
    );
};

export default Navbar;
