export function HomePage() {
    return (
        <center>
            <h1>I build software.</h1>
            <h2>Software?</h2>
            <ul class="SoftwaresUL">
                <li><a href="https://github.com/wantyapps/SiteV2">This site!</a></li>
            </ul>
        </center>
    );
}

export function AboutPage() {
    return (
      <center>
          <h1>About</h1>
          <p>Hello! My name is Uri Arev (aka. Wantyapps), and I love building software.</p>
          <p>My mission is to create software that helps developers, and to</p>
          <p>just make people happy.</p>
          <h4>That's me!</h4>
      </center>
    );
}

export function LinksPage() {
    return (
        <center>
            <h1>Links</h1>
            <ul class="LinksUL">
                <li><a href="https://github.com/Official-Wantyapps/">The Official Wantyapps GitHub Organization</a></li>
                <li><a href="https://github.com/wantyapps/">My GitHub</a></li>
                <li><a href="https://gitlab.com/wantyapps/">My GitLab</a></li>
            </ul>
        </center>
    )
}

export function PageNotFound() {
    return (
        <center>
            <h1>Ouch... Page not found.</h1>
        </center>
    )
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