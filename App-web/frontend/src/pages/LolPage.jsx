import React, { useState } from 'react';
import DataTable from "../components/Table";
import '../styles/lolpage.css';
import playersData from '../assets/json/players.json';
import staffData from '../assets/json/staff.json';
import teamData from '../assets/json/team.json';

const LolPage = () => {
    const [currentData, setCurrentData] = useState(playersData);

    const handleLoadData = (type) => {
        switch (type) {
            case 'PLAYERS':
                setCurrentData(playersData);
                break;
            case 'STAFF':
                setCurrentData(staffData);
                break;
            case 'TEAM':
                setCurrentData(teamData);
                break;
            default:
                setCurrentData([]);
        }
    };

    return (
        <div className="lolpage-container">
            <div className="navbar-button-container">
                <a href="https://lol.fandom.com/wiki/League_of_Legends_Italian_Tournament" target="_blank"
                   rel="noopener noreferrer">
                    <button className="navbar-lol-button">LIT</button>
                </a>
                <a href="https://lol.fandom.com/wiki/Blooming_Talents_League" target="_blank" rel="noopener noreferrer">
                    <button className="navbar-lol-button">BTL</button>
                </a>
                <a href="https://lol.fandom.com/wiki/Circuito_Tormenta_Italy" target="_blank" rel="noopener noreferrer">
                    <button className="navbar-lol-button">TORMENTA</button>
                </a>
            </div>

            <DataTable data={currentData} onButtonClick={handleLoadData} />
        </div>
    );
};

export default LolPage;
