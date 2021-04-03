import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import MainHTML from "./MainHTML"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/about" component={AboutPage} />
      </BrowserRouter>
      <Navbar>
        <NavbarItem href="#" text="Home"/>
        <NavbarItem href="#" text="About"/>
        <NavbarItem href="#" text="Links"/>
      </Navbar>
      <MainHTML/>
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

function AboutPage() {
  return (
    <h1>yo</h1>
  );
}

export default App;