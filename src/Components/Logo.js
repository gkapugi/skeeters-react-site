import React from "react";
import logo from "./Skeeters_Logo-transformed.png";

function Logo () {
    return (
        <div className="logo-wrapper">
            <img src={logo} alt="logo" className="logo"></img>
        </div>
    )
}

export default Logo;