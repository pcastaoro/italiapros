import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Lolpage from "../pages/LolPage";

// Component that manages application routing and includes animations for page transitions.
const AppRoutes = () => {
    // Hook to get the current location for animating route transitions.
    const location = useLocation();

    // Variants for framer-motion animations during page transitions.
    const pageVariants = {
        initial: { opacity: 0 }, // Initial state: page is fully transparent.
        animate: { opacity: 1, transition: { duration: 0.3 } }, // Animate to fully visible with a transition.
        exit: { opacity: 0, transition: { duration: 0.3 } }, // Exit state: fade out.
    };

    return (
        <AnimatePresence mode="wait"> {/* Ensures only one route is displayed at a time with animations. */}
            <Routes location={location} key={location.key}>
                {/* Route for the home page */}
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                            >
                                <HomePage />
                            </motion.div>
                        </MainLayout>
                    }
                />

                {/* Route for the about page */}
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                            >
                                <AboutPage />
                            </motion.div>
                        </MainLayout>
                    }
                />

                {/* Route for the League of Legends page */}
                <Route
                    path="/lol"
                    element={
                        <MainLayout>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                            >
                                <Lolpage />
                            </motion.div>
                        </MainLayout>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

// Exporting the AppRoutes component as the default export of this file.
export default AppRoutes;
