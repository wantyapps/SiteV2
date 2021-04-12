export function HomePage() {
    return (
        <center>
            <h1>I build software.</h1>
        </center>
    );
}

export function AboutPage() {
    return (
      <center>
          <h1>About</h1>
      </center>
    );
}

export function LinksPage() {
    return (
        <center>
            <h1>Links</h1>
        </center>
    )
}

export function PageNotFound() {
    return (
        <center>
            <h1>Ouch...</h1>
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