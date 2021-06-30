import { Navbar, NavbarItem } from "./Navbar.js";

export function AboutPage() {
    return (
        <div>
            <Navbar>
                <NavbarItem href="/home" text="Home"/>
                <NavbarItem href="/about" text="About"/>
                <NavbarItem href="/links" text="Links"/>
                <NavbarItem href="/api/v1/doc" text="Developer"/>
            </Navbar>
            <center>
                <h1>About Me</h1>
                <p>Hello! My name is Uri Arev (aka. Wantyapps), and I love building software.</p>
                <p>My mission is to create software that helps developers, and to</p>
                <p>just make people happy.</p>
                <h4>That's me!</h4>
            </center>
        </div>
    );
}