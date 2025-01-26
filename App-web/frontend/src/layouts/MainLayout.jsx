import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main layout component to structure the application with a consistent header, footer, and dynamic content.
const MainLayout = ({ children }) => {
    return (
        <div
            className="main-layout"
            style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} // Ensure the layout fills the entire viewport height.
        >
            {/* Navbar component renders the header of the layout */}
            <Navbar />

            {/* Dynamic content area that adjusts its size based on the remaining space */}
            <div className="content" style={{ flex: 1 }}>
                {children}
            </div>

            {/* Footer component renders the footer of the layout */}
            <Footer />
        </div>
    );
};

// Exporting the MainLayout component as the default export.
export default MainLayout;