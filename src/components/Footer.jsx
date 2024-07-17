import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <footer>
            <div>
                <h1>Contact</h1>
                <p>Email: munasinghehiruka@gmail.com</p>
                <p>Phone: +94762193001</p>
            </div>  
            <div>
                <h1>Follow Us</h1>
                <p className="footerpara"><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
                <p className="footerpara"><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
                <p className="footerpara"><FontAwesomeIcon icon={faTwitter} />Twitter</p>
            </div>
            <div>
                <h1>Links</h1>
                <a className="footer-link" href="#home-section">Home</a><br></br>
                <a className="footer-link" href="#cards-section">Properties</a>
            </div>
        </footer>
    )
}

export default Footer