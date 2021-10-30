/*Translation app API site: https://libretranslate.de/docs/ */
/*This page will be use for React router */
/*Home page, price page, page to use app */
/*This project will be using the Material UI 5 */
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

/*React component */
import Home from "./pages/Home";
import Api from "./pages/Api";
import Price from "./pages/Price";
import Translate from "./pages/Translate";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
