import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Lolpage from "../pages/LolPage";
import ValorantPage from "../pages/ValorantPage";

const AppRoutes = () => {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
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
                <Route
                    path="/valorant"
                    element={
                        <MainLayout>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                            >
                                <ValorantPage />
                            </motion.div>
                        </MainLayout>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
