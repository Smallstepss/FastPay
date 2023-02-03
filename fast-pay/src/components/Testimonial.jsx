import React from 'react';
import rectangle159 from "../images/Rectangle 159.png";
import testiSymbol from "../images/“.png";
const Testimonial = () => {
 return (
  <div className="testimonial_section"> 
    <div className="testimonial_container">
    <div className="testi_feature">
      <div className="testi_left">
        <img src={testiSymbol} alt="testimonial icon" />
        <h1>
          Fastest way to receive <br/>international payment
        </h1>
        <small>
          This has been the best thing for my finances this year. I buy and resell websites, and local limits hinder me from buying many websites with my bank card. The FastPay virtual card has helped me bypass that, and now I can put in enough capital for my business. 
          <br/>
          <br/>
          I also receive payment from my website sales on FastPay in Euros, Pounds, and Dollars.
          I can't ask for a better payment tool.
        </small>
        <p>
          Solape Faith
        </p>
      </div>
      <div className="testi_right">
      <div className="testi_image">
      <img src={rectangle159} alt="parents-spending-time-with-their-little-girl"/>
      </div>
        
      </div>
      </div>
    </div>      
  </div>
  );
};

export default Testimonial;
