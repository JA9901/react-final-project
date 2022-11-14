import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<Search />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
