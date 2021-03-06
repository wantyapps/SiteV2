import "./css/Navbar.css";
import { DarkLight } from "./DarkLight.js";

export function NavBar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-ul">{ props.children }</ul>
        </nav>
    );
}
  
export function NavBarItem(props) {
    return (
        <li className="navbar-item">
            <a href={ props.href } onClick={props.onClick} className="navbar-button">{ props.text }</a>
        </li>
    );
}

export function FullNavBar() {
    return (
        <NavBar>
            <NavBarItem href="/home" text="Home"/>
            <NavBarItem href="/about" text="About"/>
            <NavBarItem href="/links" text="Links"/>
            <NavBarItem href="/api/v1/doc" text="Developer"/>
            <DarkLight/>
        </NavBar>
    );
}