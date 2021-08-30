import "./css/DarkLight.css";
import { toggleTheme } from "./js/DarkLight.js";
import { NavBarItem } from "./Navbar.js";

export function DarkLight() {
    return (
        <NavBarItem text="Toggle Theme" onClick={toggleTheme}></NavBarItem>
    );
}