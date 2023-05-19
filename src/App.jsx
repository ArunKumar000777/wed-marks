import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Home />
            <Footer/>
        </>
    );
}

export default App;
