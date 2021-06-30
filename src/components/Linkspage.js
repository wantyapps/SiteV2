import { Navbar, NavbarItem } from "./Navbar.js";

export function LinksPage() {
    return (
        <div>
            <Navbar>
                <NavbarItem href="/home" text="Home"/>
                <NavbarItem href="/about" text="About"/>
                <NavbarItem href="/links" text="Links"/>
                <NavbarItem href="/api/v1/doc" text="Developer"/>
            </Navbar>
            <center>
                <h1>Web Links</h1>
                <ul className="LinksUL">
                    <li><a href="https://github.com/Official-Wantyapps/">The Official Wantyapps GitHub Organization</a></li>
                    <li><a href="https://github.com/wantyapps/">My GitHub</a></li>
                    <li><a href="https://gitlab.com/wantyapps/">My GitLab</a></li>
                </ul>
            </center>
        </div>
    );
}