import React from 'react';
import pic3 from  "./img/pic3.svg"
import border from "./img/border.svg"

const ThirdPage = () => {
    return (
        <div>
            <div className="third">
                <div className="third1">
                    <h2 className="third-width">beginnings</h2>
                    <p className="third-width">Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.</p>
                    <p className="third-width">Dramatically synthesize integrated schemas. with optimal networks.</p>
                </div>
                <div>
                   <img src={pic3} alt="" />
                </div>
             </div>
            <img src={border} alt="" className="rectangle" />
        </div>
    );
};

export default ThirdPage;