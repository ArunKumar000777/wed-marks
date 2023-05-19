import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
    return (
        <div className="flex items-center justify-end h-10 px-40 bg-dark gap-x-3">
            <span className="text-light">Folllow us on :</span>
            <FacebookIcon style={{ color: "#d5cbb6" }} className="cursor-pointer" />
            <InstagramIcon style={{ color: "#d5cbb6" }} className="cursor-pointer" />
        </div>
    );
};

export default TopBar;
