import React from 'react';
import pic1 from "./img/pic2-1.svg"
import pic2 from "./img/pic2-2.svg"
import pic3 from "./img/pic2-3.svg"


const SecondPage = () => {
    return (
        <div>
            <div className="second">
                <div className="content-second">
                    <p className="uppercase p2">I'm a cushion designer</p>
                    <p className="p1">Based in San Francisco, California I design trendy and fashion Cushions, </p>
                    <p className="p1">since I have memory I always had a tendency to design and illustration. <br /><br /></p>
                    <button className="uppercase">Learn more</button>
                </div>
            <div className="pic2">
                <div className="pic2-1">
                    <div className="pic2-content">
                        <img src={pic1} alt="" />
                        <h2>About me</h2>
                        <p>Learn more</p>
                    </div>
                </div>
            <div className="pic2-2">
                <div className="pic2-content">
                    <img src={pic2} alt="" />
                    <h2>My products</h2>
                    <p>Learn more</p>
                </div>
            </div>
                <div className="pic2-3">
                    <div className="pic2-content">
                        <img src={pic3} alt="" />
                        <h2>Contact me</h2>
                        <p>Learn more</p>
                    </div>
               </div>
            </div>
          </div>
         </div>
    );
};

export default SecondPage;