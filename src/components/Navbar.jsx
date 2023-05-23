import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    const handleScroll = () => {
        if (isOpen) {
            // Prevent scrolling when the menu is open
            window.scrollTo(0, 0);
        }
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const menuRef = useRef(null);

    // useEffect(() => {
    //     window.addEventListener("click", handleClickOutside);

    //     return () => {
    //         window.removeEventListener("click", handleClickOutside);
    //     };
    // }, [menuRef]);

    // const handleClickOutside = (event) => {
    //     if (menuRef.current && !menuRef.current.contains(event.target)) {
    //         // Click outside of the menu, close the menu
    //         setIsOpen(false);
    //     }
    // };
    return (
        <>
        <div className="flex items-center justify-between h-20 px-14 lg:px-40 bg-dark md:bg-light sticky top-0 z-30">
            <div>
                <h1 className="font-medium text-dark_gray ">WedMark</h1>
            </div>
            <div className={` md:hidden text-light ${isOpen ? "hidden" : "block"}`} onClick={toggleMenu}>
                <MenuIcon style={{ fontSize: "35px" }} />
            </div>
            <nav className="hidden md:block ">
                <ul className="flex flex-col font-medium text-dark_gray lg:gap-x-14 gap-x-4 md:flex-row">
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
                    {/* px-10 py-3 mt-8 text-base border-2 rounded-full shadow-md text-dark border-dark hover:text-light hover:bg-accent hover:border-none */}
                    <button className="px-5 py-2 font-medium transition duration-300 ease-in-out rounded-full shadow-md  lg:py-3 lg:px-10 bg-accent text-light hover:bg-light hover:text-dark hover:border-dark border-2">
                        Contact
                    </button>
                </Link>
            </div>

            {/* FOR MOBILE DEVICES */}
        </div>
            <nav
                // ref={menuRef}
                className={`absolute top-0 right-0 z-40 h-full text-white  w-72 md:hidden backdrop-blur-xl bg-dark/30 backdrop-brightness-110   ${
                    isOpen ? "animated-slide-in" : "animated-slide-out"
                }`}
            >
                <div className="absolute right-3 top-3 cursor-pointer " onClick={toggleMenu}>
                    <CloseIcon style={{ color: "black" }} />
                </div>
                {/* Navbar content */}
                <div className="md:hidden mt-14">
                    {/* Navbar links go here */}
                    <ul className="flex flex-col items-center gap-y-5 font-medium text-dark_gray lg:gap-x-14 gap-x-4 md:flex-row w-full">
                        <Link to={"/"}>
                            <li className="cursor-pointer hover:opacity-80 w-72 text-center border-b border-gray-200 pb-2">Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className="cursor-pointer hover:opacity-80 w-72 text-center border-b border-gray-200 pb-2">About</li>
                        </Link>
                        <Link to={"/services"}>
                            <li className="cursor-pointer hover:opacity-80 w-72 text-center border-b border-gray-200 pb-2">Services</li>
                        </Link>
                        <Link to={"/gallery"}>
                            <li className="cursor-pointer hover:opacity-80 w-72 text-center border-b border-gray-200 pb-2">Gallery</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
