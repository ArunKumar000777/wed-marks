import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-24 px-40 bg-light">
            <div>
                <h1 className="font-medium text-dark">WedMark</h1>
            </div>
            <nav>
                <ul className="flex font-medium gap-x-14 text-dark">
                    <li className="cursor-pointer hover:opacity-80">Home</li>
                    <li className="cursor-pointer hover:opacity-80">About</li>
                    <li className="cursor-pointer hover:opacity-80">Services</li>
                    <li className="cursor-pointer hover:opacity-80">Gallery</li>
                </ul>
            </nav>
            <div>
                <button className="px-10 py-3 font-medium transition duration-300 ease-in-out rounded-full shadow-md outline-none bg-accent text-light hover:bg-light hover:text-dark hover:border-dark hover:border-2">
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Navbar;
