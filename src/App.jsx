// import modules
import React, { useState } from "react";
// import modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./components/Footer";
import "./App.css";


// App function
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
            // passing the props or aruments into the Home component
            element={<Home filteredData={filteredData} advancedSearchCriteria={advancedSearchCriteria} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;