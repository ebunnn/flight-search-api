import React from 'react';
import './css/Header.css';

function Header(props) {
        return(
            <div className="header-content">
                <h1>{props.title}</h1>
            </div>
        )
}

export default Header;