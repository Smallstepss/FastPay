import "./aboutUs.css";
import Navbar from "../../components/Navbar.jsx";
import MainImg0 from "../../images/Rectangle 160.png";
import MainImg1 from "../../images/Rectangle 161.png";
import MainImg2 from "../../images/Rectangle 162.png";
import MainImg3 from "../../images/Rectangle 163.png";
import MainImg5 from "../../images/Rectangle 165.png";
import MainImg6 from "../../images/Rectangle 166.png";
import MainImg7 from "../../images/Rectangle 167.png";
import MainImg9 from "../../images/Rectangle 158.png";
import MainImg8 from "../../images/Rectangle 153.png";
import Footer from "../../components/Footer/Footer.jsx";
import LogoSection from "../../components/LogoSection.jsx";
import ValuesSection from "../../components/ValuesSection.jsx";
import Testimonial from "../../components/Testimonial.jsx";


const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="section1 story_section">
        <div className="container story_container">
       
          <div className="story_section_content story1">
         
          <h1>
              our story
            </h1>
            <p>
              There's a great deal of work being done to ensure freedom in the present world, but not enough is being done to ensure the freedom of money. 
            </p>
            <p>
              We aim to fill that void. We aim to create a world where payments are easy and limitless. We understand the restrictions set by conventional financial institutions, but we're looking beyond that. 
            </p>         
          </div>
           
           
  <div className="gallery-wrapper"> 
    <div className="gallery">
      
        <div className="gallery-item gallery-item--1">
            <img src={MainImg0}    alt="story gallery 0"  className="gallery-image"  />
      
        </div>       
  
     <div className="gallery-item gallery-item--2">
     < img src={MainImg1}    alt="story gallery 1"  className="gallery-image"  />
    </div>

    <div className="gallery-item gallery-item--3">
    < img src={MainImg2}    alt="story gallery 2"  className="gallery-image"  />
    </div>

    <div className="gallery-item gallery-item--4">
    < img src={MainImg3}    alt="story gallery 3"  className="gallery-image"  />
    </div>

  <div className="gallery-item gallery-item--5">
  < img src={MainImg5}    alt="story gallery 5"  className="gallery-image"  />

  </div>
 
    <div className="gallery-item gallery-item--6">
    < img src={MainImg6}    alt="story gallery 6"  className="gallery-image"  />
    </div>

  <div className="gallery-item gallery-item--7">
    < img src={MainImg7}    alt="story gallery 7"  className="gallery-image"  />
  </div>

</div>
          </div>
               
    
          </div>      
        </div>

      <div className="section2">
        <h1>We know that money is useless if it can't work for you when you need it</h1>
        <p>
          that's why we have provided a solution that makes your money work out limitless
          possibilities for you.
        </p>
      </div>
{/****section3********/}
{/*
<div className="section w_section">
  <div className="w_container">
    <div className="wrapper">
      <div className="box box1">
          <img className="RectImg153" src={MainImg8} alt="RectangleImage8" />
      </div>
      <div className="box box2">
          <img className="RectImg158" src={MainImg9} alt="RectangleImage9" />
      </div>
      <div className="box box3">
          <p>
              With FastPay, you can transact with 
              multiple currencies and convert 
              currencies without fraud scares, bank
              queues, and even having to touch
               money.
          </p>
      </div>
    </div>
  </div>
</div> 
*/}    

<div className="section wrapper_section">
<div className="wrapper_container">
<div className="s4_wrapper">
<div className="s4_left">
<img className="RectImg153" src={MainImg8} alt="RectangleImage8" />
</div>
<div className="s4_right">
<img className="RectImg158" src={MainImg9} alt="RectangleImage9" />
<p>
              With FastPay, you can transact with 
              multiple currencies and convert 
              currencies without fraud scares, bank
              queues, and even having to touch
               money.
</p>

</div>

</div>

</div>

</div>




      <LogoSection />

      <ValuesSection />

     <Testimonial />

      <Footer />
    </div>
  );
};

export default AboutUs;
