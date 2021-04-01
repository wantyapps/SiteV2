function App() {
  return (
    <Navbar>
      <NavbarItem href="#" text="Home"/>
      <NavbarItem href="#" text="About"/>
      <NavbarItem href="#" text="Links"/>
    </Navbar>
  );
  
  return (
    <head>
      <link rel="stylesheet" href="app.css"/>
    </head>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">{ props.children }</ul>
    </nav>
  );
}

function NavbarItem(props) {
  return (
    <li className="navbar-item">
      <a href={ props.href } className="navbar-button">{ props.text }</a>
    </li>
  );
}
export default App;