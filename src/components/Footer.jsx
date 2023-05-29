import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import logo from "../assets/WedmarkLogo.png";
import { WhatsApp } from "@mui/icons-material";


const Footer = () => {
    const handleOnClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="bg-dark">
            <div className=" min-h-[312px]  px-20 pt-11 grid lg:grid-cols-5 md:grid-cols-3 md:gap-y-5 sm:grid-cols-2 text-darg_gray  text-center gap-y-8 pb-10">
                <div className="flex flex-col items-center gap-y-3">
                    <img src={logo} alt="logo" className="w-20 " />
                    <h5 className="mt-6 text-center text-secondary">Social Media</h5>
                    <div className="flex justify-center gap-x-3 lg:mt-20">
                        <a href="https://www.facebook.com/wedmarkweddingsandevents">
                            <FacebookIcon style={{ color: "#ffffffae" }} className="cursor-pointer" />
                        </a>
                        <a href="">
                            <InstagramIcon style={{ color: "#ffffffae" }} className="cursor-pointer" />
                        </a>
                        <a href="https://wa.me/+919747834369" target="_blank" rel="noreferrer">
                            <WhatsApp style={{ color: "#ffffffae" }}/>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-secondary">Venues</h3>
                    <h4 className="mt-4">lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-secondary">Suppliers</h3>
                    <h4 className="mt-4">Decorators</h4>
                    <h4>Venue Planner</h4>
                    <h4>Choreographers</h4>
                    <h4>Makeup Artists</h4>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-secondary">Quick Links</h3>
                    <h4 className="mt-4">About Us</h4>
                    <h4>Gallery</h4>
                    <h4>Contact Us</h4>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-medium text-secondary">Newsletter</h3>
                        <h4 className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                    </div>
                    <div className="mt-4 lg:self-end lg:mt-0">
                        <span className="mb-4 mr-3 font-semibold text-secondary">Top</span>
                        <ArrowUpwardIcon onClick={handleOnClick} style={{ cursor: "pointer",color:"#d19324" }} />
                    </div>
                </div>
            </div>
            <p className="flex justify-center pb-3 text-xs text-secondary">
                &copy; 2023 Wedmarks - Wedding Event Management. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
