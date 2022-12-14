import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/search"}>
            <SearchPage />
          </Route>
          <Route path={"/"}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;