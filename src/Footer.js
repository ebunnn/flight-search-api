import React from "react";
import './css/Footer.css';


function Footer(props) {
    return(
        <div className="footer-content">
            <p>{props.footercontent}</p>
        </div>
    )
}

export default Footer;