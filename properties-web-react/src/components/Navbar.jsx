import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Navbar =() => {
    const [title, setTitle] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
        setIsSearchActive(!isSearchActive);
        setIsDropdownActive(!isDropdownActive);
    };

    return(
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="textContent">
                <h1 className="navbarTitle">Propz7</h1>
                <div className={`searchDiv ${isSearchActive ? 'active' : ''}`}>
                <input className="searchInput" placeholder="search" type="search" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <FontAwesomeIcon className="fas" icon={faSearch} />
                </div>
            </div>
            <div className={`listContent ${isActive ? 'active' : ''}`}>
                <ul className={`uList ${isActive ? 'active' : ''}`}>
                    <div className={`dropdown ${isDropdownActive ? 'active' : ''}`}>
                        <a  className={`dropbtn ${isDropdownActive ? 'active' : ''}`}>Buy <FontAwesomeIcon className="car" icon={faCaretDown} /></a>
                        <div className="dropdown-content">
                        <a class="drop-content-link" href="#">Property for Sale</a>
                        <a class="drop-content-link" href="#">Homes for Sale</a>
                        <a class="drop-content-link" href="#">Property Valuation</a>
                        <a class="drop-content-link" href="#">Where can I live</a>
                        </div>
                        </div>
                        <div className={`dropdown ${isActive ? 'active' : ''}`}>
                        <a  className={`dropbtn ${isDropdownActive ? 'active' : ''}`}>Rent <FontAwesomeIcon className="car" icon={faCaretDown} /></a>
                        
                        <div class="dropdown-content">
                        <a class="drop-content-link" href="#">Property to Rent</a>
                        <a class="drop-content-link" href="#">Student Property to Rent</a>
                        <a class="drop-content-link" href="#">Where can I live</a>
                        </div>
                        </div>
                    <li className={`nav-li ${isActive ? 'active' : ''}`}><a href="">House Prices</a></li>
                    <li className={`nav-li ${isActive ? 'active' : ''}`}><a href="">Our Services</a></li>
                </ul>
            </div>
             <a href="#" className="toggle-button" onClick={handleToggle}>
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
              </a>
        </nav>
    )
}


export default Navbar