import { motion } from "framer-motion";
import React from "react";

const Services = () => {
    return (
        <motion.div
            className="h-screen pt-20 bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Services
        </motion.div>
    );
};

export default Services;
