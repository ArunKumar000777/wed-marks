import React from "react";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import Organizers from "../components/Organizers";
import Scenery from "../components/Scenery";

const Home = () => {
    return (
        <div className=" bg-light">
            <Hero />
            <ProductCategories />
            <Scenery />
            <Organizers />
        </div>
    );
};

export default Home;
