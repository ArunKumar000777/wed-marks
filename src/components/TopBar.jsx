import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
    return (
        <div className="items-center justify-end hidden h-10 px-40 lg:flex bg-dark gap-x-3">
            <span className="text-white">Folllow us on :</span>
            <FacebookIcon style={{ color: "white" }} className="cursor-pointer" />
            <InstagramIcon style={{ color: "white" }} className="cursor-pointer" />
        </div>
    );
};

export default TopBar;
