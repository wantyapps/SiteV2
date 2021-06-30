import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { HomePage } from "./components/Homepage.js";
import { AboutPage } from "./components/Aboutpage.js";
import { LinksPage } from "./components/Linkspage.js";
import { PageNotFound } from "./components/404.js";
import { Footer } from "./components/Footer.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/links" component={LinksPage}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
