import React from 'react';
import { Link } from 'react-router-dom';
import lolLogo from '../assets/images/league-of-Legends-logo-text.png';
import '../styles/homepage.css';

// Array containing game information, including paths and logo assets.
const games = [
    { path: '/lol', src: lolLogo, alt: 'League of Legends' },
];

// Component that renders the homepage with game links and logos.
const HomePage = () => {
    // Log a message to the console to confirm rendering of the HomePage.
    console.log('Rendering HomePage Page');

    return (
        <div className="homepage-center-container">
            {/* Map through the games array to render clickable links with game logos */}
            {games.map(({ path, src, alt }) => (
                <Link key={path} to={path} className="homepage-logo-link">
                    <img src={src} alt={alt} className="homepage-logo" />
                </Link>
            ))}
        </div>
    );
};

// Exporting the HomePage component as the default export of this file.
export default HomePage;
