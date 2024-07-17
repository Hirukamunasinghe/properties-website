import React from "react";
// importing router from react-router-dom for navigations
import { useState } from "react";
// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ setFilteredData,setAdvancedSearchCriteria }) => {

  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // handle toggle function
  const handleToggle = () => {
    setIsActive(!isActive);
    setIsSearchActive(!isSearchActive);
    setIsDropdownActive(!isDropdownActive);
  };



  // handle search function
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredData(searchTerm); // Pass the search term to the parent component
  };

  // scroll to the card section - function
  const scrollToCardsSection = () => {
    const cardsSection = document.querySelector("#cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // advanced search features
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");

  // toggle handling function
  const handleToggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  const advhandleSearch = () => {
    // creating the search criteria dictionary
    const searchCriteria = {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
    };

    setAdvancedSearchCriteria(searchCriteria);
    setShowAdvancedSearch(false);
  };

  // handling type change function
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  // handling tprice change function
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // handling maximum price change function
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // handling minimum bedrooms change function
  const handleMinBedroomsChange = (e) => {
    setMinBedrooms(e.target.value);
  };

  // handling maximum bedrooms change function
  const handleMaxBedroomsChange = (e) => {
    setMaxBedrooms(e.target.value);
  };

  // clear function to clear all data
  const handleClear = () => {
    setType("Any");
    setMinPrice("");
    setMaxPrice("");
    setMinBedrooms("");
    setMaxBedrooms("");
    setAdvancedSearchCriteria(null);
    setShowAdvancedSearch(false);
  };


  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="textContent">
        {/* project title */}
        <h1 className="navbarTitle">Propz7</h1>
        {/* search bar div */}
        <div className={`searchDiv ${isSearchActive ? "active" : ""}`}>
          <input
            className="searchInput"
            placeholder="search by type -: house,apartment..."
            type="search"
            onChange={handleSearch}
          ></input>
          <FontAwesomeIcon  className="fas" icon={faSearch} onClick={scrollToCardsSection} />
          <button className="advsearchbtn" onClick={handleToggleAdvancedSearch} >Advanced Search
          </button>
          {/* advanced search dialog box */}
          {showAdvancedSearch && (
        <div className="advanced-search-dialog">
          <h2>Advanced Search</h2>
          <label>
            Type:
            <select value={type} onChange={handleTypeChange}>
              <option value="Any">Any</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
            </select>
          </label>
          <label>
            Min Price:
            <input type="text" value={minPrice} onChange={handleMinPriceChange} />
          </label>
          <label>
            Max Price:
            <input type="text" value={maxPrice} onChange={handleMaxPriceChange} />
          </label>
          <label>
            Min Bedrooms:
            <input type="text" value={minBedrooms} onChange={handleMinBedroomsChange} />
          </label>
          <label>
            Max Bedrooms:
            <input type="text" value={maxBedrooms} onChange={handleMaxBedroomsChange} />
          </label>
          <button onClick={advhandleSearch} className="adv-searchbtn">Search</button>
          <button onClick={handleClear} className="adv-searchbtn">Clear</button>
        </div>
      )}
        </div>
      </div>
      <div className={`listContent ${isActive ? "active" : ""}`}>
        <ul className={`uList ${isActive ? "active" : ""}`}>
          <div className={`dropdown ${isDropdownActive ? "active" : ""}`}>
            <a className={`dropbtn ${isDropdownActive ? "active" : ""}`}>
              Buy <FontAwesomeIcon className="car" icon={faCaretDown} />
            </a>
            <div className="dropdown-content">
              <a class="drop-content-link" href="#" onClick={scrollToCardsSection}>
                Property for Sale
              </a>
              <a class="drop-content-link" href="#" onClick={scrollToCardsSection}>
                Homes for Sale
              </a>
              <a class="drop-content-link" href="#">
                Property Valuation
              </a>
              <a class="drop-content-link" href="#">
                Where can I live
              </a>
            </div>
          </div>
          <div className={`dropdown ${isDropdownActive ? "active" : ""}`}>
            <a className={`dropbtn ${isDropdownActive ? "active" : ""}`}>
              Rent <FontAwesomeIcon className="car" icon={faCaretDown} />
            </a>
            <div class="dropdown-content">
              <a class="drop-content-link" href="#" onClick={scrollToCardsSection}>
                Property to Rent
              </a>
              <a class="drop-content-link" href="#" onClick={scrollToCardsSection}>
                Student Property to Rent
              </a>
              <a class="drop-content-link" href="#">
                Where can I live
              </a>
            </div>
          </div>
          <li className={`nav-li ${isActive ? "active" : ""}`}>
            <a href="#" onClick={scrollToCardsSection}>House Prices </a>
          </li>
          <li className={`nav-li ${isActive ? "active" : ""}`}>
            <a href="#/">Our Services</a>
          </li>
        </ul>
      </div>
      {/* toggle button */}
      <a href="#" className="toggle-button" onClick={handleToggle}>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </a>
    </nav>
    
  );
};

export default Navbar;