import React from "react";
import '../styles.css';

export default function Footer(){

    const currentyear = new Date().getFullYear();

    return(
        <footer className='footer'>
            <p className="footer-text">
            © {currentyear} Moviedux , All rights reserved.
            </p>
        </footer>
    )

}