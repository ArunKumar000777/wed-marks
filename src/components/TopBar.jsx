import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
    return (
        <div className="flex items-center justify-end h-10 px-40 bg-secondary gap-x-3">
            <span className="text-text_terinery">Folllow us on:</span>
            <FacebookIcon style={{ color: "white" }} className="cursor-pointer" />
            <InstagramIcon style={{ color: "white" }} className="cursor-pointer" />
        </div>
    );
};

export default TopBar;
