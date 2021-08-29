import "./css/DarkLight.css";
import { toggleTheme } from "./js/DarkLight.js";

export function DarkLight() {
    return (
        <button className="navbar-button" onClick={toggleTheme}>Toggle Theme</button>
    );
}