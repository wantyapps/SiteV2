import { NavBar, NavBarItem } from "./Navbar.js";

export function PageNotFound() {
    return (
        <div>
            <NavBar>
                <NavBarItem href="/home" text="Home"/>
                <NavBarItem href="/about" text="About"/>
                <NavBarItem href="/links" text="Links"/>
                <NavBarItem href="/api/v1/doc" text="Developer"/>
            </NavBar>
            <center>
                <h1>Ouch... Page not found.</h1>
            </center>
        </div>
    );
}