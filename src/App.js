import React from 'react';
import './App.css';
import Home from "./Home.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Welcome from "./components/Welcome";
import CheckRoutes from "./CheckRoutes.js";
import {Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/routes" component={CheckRoutes} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component ={Dashboard} />
        <Route exact path="/welcome" component ={Welcome} />
      </div>
    );
  }
}

export default App;