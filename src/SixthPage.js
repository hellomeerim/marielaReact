import React from 'react';
import six1 from "./img/six1-1.svg";
import six2 from "./img/six1-2.svg"
import six3 from "./img/six1-3.svg"
import six4 from "./img/six2-1.svg"
import six5 from "./img/six2-2.svg"
import six6 from "./img/six2-3.svg"

const SixthPage = () => {
    return (
        <div>
            <div className="sixth">
          <div className="pic6">
            <div className="pic6-1">
              <div className="pic6-content">
                <img src={six1} alt="" />
                <h2>Plated Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
            <div className="pic6-2">
              <div className="pic6-content">
                <img src={six2} alt="" />
                <h2>Silver Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
            <div className="pic6-3">
              <div className="pic6-content">
                <img src={six3} alt="" />
                <h2>Deep Blue Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sixth">
          <div className="pic6">
            <div className="pic6-1">
              <div className="pic6-content">
                <img src={six4} alt="" />
                <h2>Pink Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
            <div className="pic6-2">
              <div className="pic6-content">
                <img src={six5} alt="" />
                <h2>Black Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
            <div className="pic6-3">
              <div className="pic6-content">
                <img src={six6} alt="" />
                <h2>Green Cushion</h2>
                <p>$ 19.99 USD</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default SixthPage;