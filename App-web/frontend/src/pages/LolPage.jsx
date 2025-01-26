import React, { useState } from 'react';
import DataTable from "../components/Table";
import '../styles/lolpage.css';
import playersData from '../assets/json/players.json';
import staffData from '../assets/json/staff.json';
import teamData from '../assets/json/team.json';

// Component that renders the League of Legends page, including data tables and external links.
const LolPage = () => {
    // State to manage the currently displayed data in the DataTable.
    const [currentData, setCurrentData] = useState(playersData);

    // Function to handle loading different types of data (players, staff, team) into the DataTable.
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
            {/* Navbar with buttons linking to external League of Legends resources */}
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

            {/* DataTable component displays the selected data */}
            <DataTable data={currentData} onButtonClick={handleLoadData} />
        </div>
    );
};

// Exporting the LolPage component as the default export of this file.
export default LolPage;
