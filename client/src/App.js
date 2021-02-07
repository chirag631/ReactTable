import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import './MainStyle.css';
import Users from './components/pages/Users'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
function App(props) {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/:name" id=":_id"   component={Users} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
