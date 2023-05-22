import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
