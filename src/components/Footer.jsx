import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
    const handleOnClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="bg-dark">
            <div className=" min-h-[312px]  px-20 pt-11 grid lg:grid-cols-5 md:grid-cols-3 md:gap-y-5 sm:grid-cols-2 text-darg_gray  text-center gap-y-8 pb-10">
                <div className="flex flex-col gap-y-3">
                    <h3 className="text-xl font-medium">Logo</h3>
                    <h5 className="mt-6 text-dark_gray">Social Media</h5>
                    <div className="flex justify-center lg:mt-20">
                        <FacebookIcon className="text-white cursor-pointer" />
                        <InstagramIcon className="text-white cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium">Venues</h3>
                    <h4 className="mt-4">lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                </div>
                <div>
                    <h3 className="text-xl font-medium">Suppliers</h3>
                    <h4 className="mt-4">Decorators</h4>
                    <h4>Venue Planner</h4>
                    <h4>Choreographers</h4>
                    <h4>Makeup Artists</h4>
                </div>
                <div>
                    <h3 className="text-xl font-medium">Quick Links</h3>
                    <h4 className="mt-4">About Us</h4>
                    <h4>Gallery</h4>
                    <h4>Contact Us</h4>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-medium">Newsletter</h3>
                        <h4 className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                    </div>
                    <div className="mt-4 lg:self-end lg:mt-0">
                        <span className="mb-4 mr-3">Top</span>
                        <ArrowUpwardIcon onClick={handleOnClick} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
            <p className="flex justify-center pb-3">&copy; 2023 Wedmarks - Wedding Event Management. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
