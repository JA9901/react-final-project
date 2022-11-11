import React from "react";
import "./App.css";
import Home from './pages/Home';

function App() {
  return (
    //BEM
    <div className="App">
      <h1>Hey clever programmer fam, lets build the google clone</h1>
    
      {/*Home (the one with the search on) */}
      <Home />

      {/* SearchPage (the results page) */}
    </div>
  );
}

export default App;
