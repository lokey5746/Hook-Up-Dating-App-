import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chats">
            <h1>I am chat section</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* Tinder card section */
}
{
  /* Button card section */
}

{
  /* All chat section */
}
{
  /* Single chat section*/
}
