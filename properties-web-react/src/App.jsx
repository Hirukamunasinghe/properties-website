import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [filteredData, setFilteredData] = useState(null);
  const [advancedSearchCriteria, setAdvancedSearchCriteria] = useState(null);

  return (
    <Router>
      <div>
        <Navbar
          setFilteredData={setFilteredData}
          setAdvancedSearchCriteria={setAdvancedSearchCriteria}
        />
        <Routes>
          <Route
            path="/"
            element={<Home filteredData={filteredData} advancedSearchCriteria={advancedSearchCriteria} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;