import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/background.css';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div className="content" style={{ flex: 1 }}>{children}</div> {/* Area dinamica */}
            <Footer />
        </div>
    );
};

export default MainLayout;
