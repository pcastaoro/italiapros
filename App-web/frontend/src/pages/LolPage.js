import React from 'react';
import '../styles/lolpage.css';

const LolPage = () => {
    return (
        <div className="button-container">
            <a href="https://lol.fandom.com/wiki/League_of_Legends_Italian_Tournament" target="_blank"
               rel="noopener noreferrer">
                <button className="lol-button">LIT</button>
            </a>
            <a href="https://lol.fandom.com/wiki/Blooming_Talents_League" target="_blank" rel="noopener noreferrer">
                <button className="lol-button">BTL</button>
            </a>
            <a href="https://lol.fandom.com/wiki/Circuito_Tormenta_Italy" target="_blank" rel="noopener noreferrer">
                <button className="lol-button">TORMENTA</button>
            </a>
        </div>
    );
};

export default LolPage;
