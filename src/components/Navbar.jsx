import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-24 px-40">
            <div>
                <h1>WedMark</h1>
            </div>
            <nav>
                <ul className="flex gap-x-14">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Gallery</li>
                </ul>
            </nav>
            <div>
                <button className="px-10 py-3 transition duration-300 ease-in-out rounded-full shadow-md outline-none bg-secondary text-text_terinery hover:bg-primary hover:text-secondary hover:border-secondary hover:border-2">
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Navbar;
