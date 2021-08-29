import "./css/Dark_Light.css";
import { toggleTheme } from "./js/Dark_Light.js";

export function Dark_Light() {
    return (
        <button className="navbar-button" onClick={toggleTheme}>Toggle Theme</button>
    );
}