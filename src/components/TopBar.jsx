import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

const TopBar = () => {
    return (
        <div className="items-center justify-end hidden h-10 px-40 lg:flex bg-dark gap-x-3">
            <span className="text-secondary">Folllow us on :</span>
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
    );
};

export default TopBar;
