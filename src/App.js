import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import { HomePage, AboutPage, LinksPage, PageNotFound, Footer } from "./Components.js"

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
