import React from "react";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Organizers from "../components/Organizers";
import Scenery from "../components/Scenery";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div className=" bg-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <ProductCategories />
            <Scenery />
            <Organizers />
        </motion.div>
    );
};

export default Home;
