import { NavBar, NavBarItem } from "./Navbar.js";

export function AboutPage() {
    return (
        <div>
            <NavBar>
                <NavBarItem href="/home" text="Home"/>
                <NavBarItem href="/about" text="About"/>
                <NavBarItem href="/links" text="Links"/>
                <NavBarItem href="/api/v1/doc" text="Developer"/>
            </NavBar>
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