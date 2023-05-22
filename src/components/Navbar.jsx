import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);   

 
    return (
        <div className="flex items-center justify-between h-24 px-14 lg:px-40 bg-dark md:bg-light">
            <div>
                <h1 className="font-medium text-balck ">WedMark</h1>
            </div>
            <div className=" md:hidden text-light">
                <MenuIcon style={{fontSize:"35px"}}/>
            </div>
            <nav className="hidden md:block ">
                <ul className="flex flex-col font-medium text-black lg:gap-x-14 gap-x-4 md:flex-row">
                    <Link to={"/"}>
                        <li className="cursor-pointer hover:opacity-80">Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="cursor-pointer hover:opacity-80">About</li>
                    </Link>
                    <Link to={"/services"}>
                        <li className="cursor-pointer hover:opacity-80">Services</li>
                    </Link>
                    <Link to={"/gallery"}>
                        <li className="cursor-pointer hover:opacity-80">Gallery</li>
                    </Link>
                </ul>
            </nav>
            <div className="hidden md:block">
                <Link to={"/contact"}>
                    <button className="px-5 py-2 font-medium transition duration-300 ease-in-out rounded-full shadow-md outline-none lg:py-3 lg:px-10 bg-accent text-light hover:bg-light hover:text-dark hover:border-dark hover:border-2">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
