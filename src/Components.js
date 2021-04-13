export function HomePage() {
    return (
        <div>
            <Navbar>
                <NavbarItem href="/home" text="Home"/>
                <NavbarItem href="/about" text="About"/>
                <NavbarItem href="/links" text="Links"/>
                <NavbarItem href="/api/v1/doc" text="Developer"/>
            </Navbar>
            <center>
                <h1>I build software.</h1>
                <h2>Software?</h2>
                <ul className="SoftwaresUL">
                    <li><a href="https://github.com/wantyapps/SiteV2">This site!</a></li>
                </ul>
            </center>
        </div>
    );
}

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

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-ul">{ props.children }</ul>
        </nav>
    );
}
  
export function NavbarItem(props) {
    return (
        <li className="navbar-item">
            <a href={ props.href } className="navbar-button">{ props.text }</a>
        </li>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <p>Created by Uri Arev (2021). Copyright (©) Uri Arev 2021</p>
        </footer>
    );
}
