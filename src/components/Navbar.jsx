import React from "react";
// importing router from react-router-dom for navigations
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ setFilteredData,setAdvancedSearchCriteria }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [isActive, setIsActive] = useState(false);
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);



  const handleToggle = () => {
    setIsActive(!isActive);
    setIsSearchActive(!isSearchActive);
    setIsDropdownActive(!isDropdownActive);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredData(searchTerm); // Pass the search term to the parent component
  };



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

  const handleToggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  const advhandleSearch = () => {
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

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleMinBedroomsChange = (e) => {
    setMinBedrooms(e.target.value);
  };

  const handleMaxBedroomsChange = (e) => {
    setMaxBedrooms(e.target.value);
  };

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
        <h1 className="navbarTitle">Propz7</h1>
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
              <a class="drop-content-link" href="#cards-section">
                Property for Sale
              </a>
              <a class="drop-content-link" href="#">
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
              <a class="drop-content-link" href="#cards-section">
                Property to Rent
              </a>
              <a class="drop-content-link" href="#">
                Student Property to Rent
              </a>
              <a class="drop-content-link" href="#">
                Where can I live
              </a>
            </div>
          </div>
          <li className={`nav-li ${isActive ? "active" : ""}`}>
            <a href="#cards-section">House Prices </a>
          </li>
          <li className={`nav-li ${isActive ? "active" : ""}`}>
            <a href="">Our Services</a>
          </li>
        </ul>
      </div>
      <a href="#" className="toggle-button" onClick={handleToggle}>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </a>
    </nav>
    
  );
};

export default Navbar;