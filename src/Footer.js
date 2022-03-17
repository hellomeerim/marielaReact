import React from 'react';
import footer1 from "./img/footer1.svg"
import footer2 from "./img/footer2.svg"
import footer3 from "./img/footer3.svg"
import logo from "./img/logo.svg"

const Footer = () => {
    return (
        <div>
            <div className="footer">
          <div className="footer1">
            <div className="footer1-1 one">
              <img src={footer1} alt="" />
              <p className="p3">Safe shopping</p>
              <p className="p4">Buy with confidence</p>
            </div>
            <div className="footer1-1 one">
              <img src={footer2} alt="" />
              <p className="p3">Fast shipping</p>
              <p className="p4">Get your product fast</p>
            </div>
            <div className="footer1-1">
              <img src={footer3} alt="" />
              <p className="p3">Satisfaction guarantee</p>
              <p className="p4">Or get your money back</p>
            </div>
          </div>
        </div>
        {/*footer2*/}
        <footer className="footer2">
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li>Home</li>
              <li>About me</li>
              <li>Products</li>
              <li>Contact me</li>
            </ul>
          </nav>
        </footer>
        </div>
    );
};

export default Footer;