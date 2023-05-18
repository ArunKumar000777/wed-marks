import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Home />
        </>
    );
}

export default App;
