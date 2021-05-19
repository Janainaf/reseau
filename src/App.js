import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Home from "./components/User/Home";
import { PrivateRoute } from "./helpers/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/signup" />
          <PrivateRoute exact component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
