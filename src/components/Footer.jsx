import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
    return (
        <div className="bg-dark min-h-[352px] px-40 pt-11 grid lg:grid-cols-5 md:grid-cols-3 md:gap-y-5 sm:grid-cols-2 text-light">
            <div className="flex flex-col gap-y-3">
                <h3 className="text-xl font-medium">Logo</h3>
                <h5>Social Media</h5>
                <div className="flex">
                    <FacebookIcon className="cursor-pointer" />
                    <InstagramIcon className="cursor-pointer" />
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
            <div>
                <h3 className="text-xl font-medium">Newsletter</h3>
                <h4 className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
            </div>
        </div>
    );
};

export default Footer;
