import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/index/:indexId" component={Index} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
