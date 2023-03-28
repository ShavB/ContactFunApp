import ReactDOM from "react-dom/client";
import './App.css';
import Home from "./Components/Home/Home";

const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);