import React from 'react';
import logo from "./img/Mariela_logo.svg"
import header from "./img/header.svg"

const Header = () => {
    return (
        <div className="main">
           <header>
               <img src={logo} alt="" />
               <nav className="header">
               <ul>
              <li>Home</li>
              <li>About me</li>
              <li>Products</li>
              <li>Contact me</li>
              <li><img src={header} alt="" /></li>
            </ul>
          </nav>
        </header>
      </div>
    );
};

export default Header;