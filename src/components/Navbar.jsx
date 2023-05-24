import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
const Nav = () => {
    let [open, setopen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollPosition = window.scrollY;

            // Check if the scroll position is greater than 10 (lg:top-10)
            setIsScrolled(scrollPosition > 10);
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const ref = useRef(null);

    const location = useLocation();

    useEffect(() => {
        // function to run on route change
        setopen(false);
    }, [location]);
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            setopen(false);
        }
    }
    const menus = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "SERVICES", path: "/services" },
        { name: "GALLERY", path: "gallery" },
        { name: "CONTACT", path: "contact" },
    ];
    return (
        <nav
            ref={ref}
            className={`fixed top-0 flex items-center justify-between w-full h-14 pt-5 lg:h-20 lg:${
                isScrolled ? "top-0" : "top-10"
            } bg-light  z-50`}
        >
            <div className="fixed z-20 cursor-pointer md:hidden right-5 top-6" onClick={() => setopen(!open)}>
                {open ? <CloseIcon /> : <MenuIcon style={{ fontSize: "30px" }} />}
            </div>
            <img src="./src/assets/logo.svg" alt="logo" className="w-10 ml-7" />
            <ul
                className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
                    !open ? "right-[-100%] " : "right-0"
                }`}
            >
                {menus.map((menu, index) => (
                    <li
                        key={index}
                        className="my-6 ml-5 duration-300 border-b-2 border-transparent md:inline-block md:ml-10 md:my-0 hover:border-dark"
                    >
                        <Link to={`${menu?.path}`}>
                            <a className="inline-block py-3 text-sm font-normal text-black cursor-pointer font-Barlow md:py-5">
                                {menu.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Nav;
