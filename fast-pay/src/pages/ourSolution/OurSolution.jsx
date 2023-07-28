
{/*import './ourSolution.css';
import HeroImage from "../../images/Group 196hero-bg.png";
import NavbarHome from '../../components/NavbarHome';

const OurSolution = () => {
  return (
       // Beginning of Hero section 
    <main className='ourSolution'>
    <header className='ourSolution__hero'>
        <div className="ourSolution__text">
           <NavbarHome />
          <h1>Send & Receive Money Globally.</h1>
          <h3>Make local and international payments, receive money swiftly, and manage multiple currencies on one account.</h3>
          <button className='header__btn'>Create Free Account</button>
        </div>
    </header>
       //End of Hero section 
      </main>
  );
};
export default OurSolution;
*/}

import './ourSolution.css'
// import HeroImage from "../../images/Group 196hero-bg.png"
import Navbar from "../../components/Navbar.jsx";
import Footer from '../../components/Footer/Footer'
import CTA from '../../components/cta/Cta.jsx'
import Applestore from '../../images/Frame 10AppleStoreFirst.png'
import Playstore from '../../images/Frame 11GoogleStoreFirst.png'
import Partners from '../../images/logopartners-logo.png'
import IMG from '../../images/Rectangle 147.png'
import { BsArrowRight } from 'react-icons/bs'
import Currency from '../../images/currencycurrencies.png'
import CreditCard from '../../images/credit card.png'
import Lock from '../../images/lock.png'
import duplicate from '../../images/duplicate.png'
import security from '../../images/securitysecurity.png'
import Testimonial from '../../images/Frame 4345testimonial.png'
import Quote from '../../images/quote.png'
import { FaStar } from 'react-icons/fa'
import arrowRight from '../../images/ARROWarrow right.png'
import arrowLeft from '../../images/ARROWarrow left.png'

const OurSolution = () => {
  return (
    
       // Beginning of Hero section 
    <main className='ourSolution'>

      <header className='ourSolution__hero'>
        <Navbar />
        <div className="ourSolution__text">
          <h1>Send & Receive Money Globally.</h1>
          <h3>Make local and international payments, receive money swiftly, and manage multiple currencies on one account.</h3>
          <button className='header__btn'>Create Free Account</button>
        </div>
    </header>
      {/* //End of Hero section */}
      {/* =========section one=========== */}
      <div className="oursolution oursolution-section1">
        <h1>Access your money anywhere and anytime</h1>
        <h4>Download Fastpay on your Andriod or iOs device</h4>
        <div className="oursolution__store">
          <a href=""><img src={Applestore} alt="" /></a>
          <a href=""><img src={Playstore} alt="" /></a>
        </div>
      </div>
      {/* =========End of section one=========== */}

      {/* =========section two=========== */}
      <div className="oursolution oursolution-section2">
        <h3>Trusted by Over 100,000+ users and businesses</h3>
        <img src={Partners} alt="" />
      </div>
      {/* ========= End of section two=========== */}


    {/* =========section three=========== */}
      <div className="oursolution oursolution-section3">
        <h2>Your All-in-One payment tool</h2>
        <div className='oursolution-section3-content'>
          <div className="oursolution-section3-content-col"><img src={IMG} alt="" /></div>
          <div className="oursolution-section3-content-col">
            <div className="oursolution-section3-content-col-box">
              <h3>Send and receive money swiftly</h3>
              <p>Make and receive payment swiftly in local and international currencies</p>
              <div className="section3__action">
                  <a href=""><h4>Start making payments <span><BsArrowRight/></span></h4></a>
              </div>
            </div>
            <div className="oursolution-section3-content-col-box">
              <h3>Send and receive money swiftly</h3>
              <p>Make and receive payment swiftly in local and international currencies</p>
              <div className="section3__action">
                  <a href=""><h4>Start making payments <span><BsArrowRight/></span></h4></a>
              </div>
            </div>
            
          </div>
          <div className="oursolution-section3-content-col"><div className="oursolution-section3-content-col-box">
              <h3>Send and receive money swiftly</h3>
              <p>Make and receive payment swiftly in local and international currencies</p>
              <div className="section3__action">
                  <a href=""><h4>Start making payments <span><BsArrowRight/></span></h4></a>
              </div>
            </div>
            <div className="oursolution-section3-content-col-box">
              <h3>Send and receive money swiftly</h3>
              <p>Make and receive payment swiftly in local and international currencies</p>
              <div className="section3__action">
                  <a href=""><h4>Start making payments <span><BsArrowRight/></span></h4></a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/* ========= End of section three=========== */}

      {/* ============ Why choose FastPay section=========== */}
      <div className="oursolution__whyfastpay">
        <h1>Why choose FastPay</h1>
        <div className="oursolution_whyfastpay-content">
          <div className='oursolution_whyfastpay-content-item'>
            <img src={Currency} alt="currency" className='oursolution_whyfastpay-text-img'/>
            <h3 className='oursolution_whyfastpay-content-title'>Multiple currencies</h3>
            <p className='oursolution_whyfastpay-content-text'>We accept transactions in over 15 currencies</p>
          </div>
          <div className='oursolution_whyfastpay-content-item'>
            <img src={security} alt="currency" className='oursolution_whyfastpay-text-img'/>
            <h3 className='oursolution_whyfastpay-content-title'>Transaction security</h3>
            <p className='oursolution_whyfastpay-content-text'>We provide different options to ensure safety of transactions, includig 2FA</p>
          </div>
          <div className='oursolution_whyfastpay-content-item'>
            <img src={duplicate} alt="currency" className='oursolution_whyfastpay-text-img'/>
            <h3 className='oursolution_whyfastpay-content-title'>No duplicate transactions</h3>
            <p className='oursolution_whyfastpay-content-text'>We would help you prevent wrongful duplicate payments</p>
          </div>
        </div>


         <div className="oursolution_whyfastpay-content">
          <div className='oursolution_whyfastpay-content-item'>
            <img src={Lock} alt="currency" className='oursolution_whyfastpay-text-img'/>
            <h3 className='oursolution_whyfastpay-content-title'>Fraud protection</h3>
            <p className='oursolution_whyfastpay-content-text'>We have airtight security measures in place to secure all your funds</p>
          </div>
          <div className='oursolution_whyfastpay-content-item'>
            <img src={CreditCard} alt="currency" className='oursolution_whyfastpay-text-img'/>
            <h3 className='oursolution_whyfastpay-content-title'>Multiple payment options</h3>
            <p className='oursolution_whyfastpay-content-text'>We have a variety of payment options including USSD, Bank transfer, card payment, and internet banking.</p>
          </div>
        </div>
      </div>
      {/* ============ Why choose FastPay section=========== */}
      {/* ============TESTIMONIALS======================== */}
      <div className="testimonials">
        <div className='testimonial-col1'>
          <h3>TESTIMONIALS</h3>
          <h1>Check what our clients are saying</h1>
          <img src={Testimonial} alt="testimonial" />
          <div className='testimonial-arrow-large-screen'><img src={arrowLeft} alt="" /> <img src={arrowRight} alt="" /></div>
        </div>
        <div className='testimonial-col2'>
          <img src={Quote} alt="quote" />
          <h3>Fastest way to receive international payment</h3>
          <p className='testimonials-para'>As a freelancer, it's always a struggle to get the right payment platform to receive payments and make payments for professional development.
            Before FastPay, I used two different apps to make and receive payments, and they even had issues.
          </p>
          <p className='testimonials-para'>Now, I can manage all my gig payments and buy courses to advance myself using the same app, thanks to FastPay. I will always recommend it.</p>
        <div className='testimonials-rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
          <p className='testimonials-para'>Solape Faith</p>
          <div className='testimonial-arrow-small-screen'><img src={arrowLeft} alt="" /> <img src={arrowRight} alt="" /></div>
        </div>
        
      </div>
    {/* ===============END OF TESTIMONIALS================== */}
      <CTA/>
      <Footer/>
      
    </main>
    
  )
}

export default OurSolution