import "./App.css";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <AnimatedRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
