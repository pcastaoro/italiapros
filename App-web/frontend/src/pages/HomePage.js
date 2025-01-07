import React from 'react';
import { Link } from 'react-router-dom';
import lolLogo from '../assets/images/league-of-Legends-logo-text.png';
import valorantLogo from '../assets/images/valorant-logo-text.png';
import '../styles/homepage.css';

const games = [
    { path: '/lol', src: lolLogo, alt: 'League of Legends' },
    { path: '/valorant', src: valorantLogo, alt: 'Valorant' },
];

const HomePage = () => {
    console.log('Rendering HomePage Page'); // Aggiungi questo
    return (
        <div className="homepage-center-container">
            {games.map(({ path, src, alt }) => (
                <Link key={path} to={path} className="homepage-logo-link">
                    <img src={src} alt={alt} className="homepage-logo" />
                </Link>
            ))}
        </div>
    );
};

export default HomePage;
