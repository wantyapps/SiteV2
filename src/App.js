import React from "react";

function App() {
  return (
    <div>
      <Navbar>
        <NavbarItem href="#" text="Home"/>
        <NavbarItem href="#" text="About"/>
        <NavbarItem href="#" text="Links"/>
      </Navbar>
      <center>
        <h1>I build software.</h1>
      </center>
    </div>
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