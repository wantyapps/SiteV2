import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import { HomePage, AboutPage, LinksPage, Navbar, NavbarItem } from "./Components"

function App() {
  return (
    <div>
      <Navbar>
        <NavbarItem href="/home" text="Home"/>
        <NavbarItem href="/about" text="About"/>
        <NavbarItem href="/links" text="Links"/>
      </Navbar>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/links" component={LinksPage}/>
        </Switch>
      </BrowserRouter>
      <section className="section-bottom">
        <a href="/home">hi</a>
      </section>
    </div>
  );
}

export default App;