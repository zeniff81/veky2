import React from "react";
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}