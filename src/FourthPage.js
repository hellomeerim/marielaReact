import React from 'react';
import pic4 from "./img/pic4.svg";
import border from "./img/border.svg"

const FourthPage = () => {
    return (
        <div>
             <div>
                 <div className="fourth">
                   <div>
                     <img src={pic4} alt="" />
                   </div>
                 <div className="fourth1">
                     <h2 className="third-width">carrer</h2>
                     <p className="third-width">Collaboratively administrate turnkey channels whereas virtual e-tailers.</p>
                     <p className="third-width">Objectively seize scalable metrics whereas proactive e-services seamlessly empower fully researched growth strategies.</p>
                     <p className="third-width">And interoperable internal or “organic” sources. <br /> <br /> </p>
                     <button className="uppercase">Learn more</button>
                 </div>
             </div>
           <img src={border} alt="" className="rectangle" />
          </div>
        </div>
    );
};

export default FourthPage;