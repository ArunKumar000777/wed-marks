import { motion } from "framer-motion";
import React from "react";

const Gallery = () => {
    return (
        <motion.div
            className="h-screen pt-20 bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Gallery
        </motion.div>
    );
};

export default Gallery;
