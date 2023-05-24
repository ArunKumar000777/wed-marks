import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Home from "../pages/Home";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/services" element={<Services />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
