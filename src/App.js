import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>I am homepage</h1>
          </Route>
          <Route path="/chat">
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
