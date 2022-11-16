import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search"
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage hideButtons />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
