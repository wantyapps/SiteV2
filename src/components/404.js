import { Navbar, NavbarItem } from "./Navbar.js";

export function PageNotFound() {
    return (
        <div>
            <Navbar>
                <NavbarItem href="/home" text="Home"/>
                <NavbarItem href="/about" text="About"/>
                <NavbarItem href="/links" text="Links"/>
                <NavbarItem href="/api/v1/doc" text="Developer"/>
            </Navbar>
            <center>
                <h1>Ouch... Page not found.</h1>
            </center>
        </div>
    );
}