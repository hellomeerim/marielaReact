import React from 'react';
import pic1 from "./img/Pic1.svg"

const MainPage = () => {
    return (
        <div className="first">
            <div className="pic1">
                <img src={pic1} alt="" />
                <div className="content-first">
                    <p>NEW</p>
                    <h2>Spring Cushion <br /> Collection 2019</h2>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;