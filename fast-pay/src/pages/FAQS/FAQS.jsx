import React from 'react'
import Navbar from '../../components/Navbar.jsx';
import './FAQS.css';
import Cta from "../../components/cta/Cta.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import menuIcon from "../../images/menu-down.svg";
import Select from 'react-select';

const FAQS = () => {
    const options1 = [
        { value: 'option1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor \n incididunt ut labore et dolore magna aliqua.' },
        // Add more options for the first dropdown here...
      ];

      const options2 = [
        { value: 'option2', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. ' },
        // Add more options for the first dropdown here...
      ];

      const options3 = [
        { value: 'option3', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor \n incididunt ut labore et dolore magna aliqua.' },
        // Add more options for the first dropdown here...
      ];
    
  return (
    <div>
    <header>
    <Navbar />
    </header>
<section className="FAQ-section">
 <div className="FAQ-container">

 <div className="FAQ-header">
 <h1>Frequently Asked Questions</h1>

 <p>Can’t find your answers here?
We’re happy to <br/> talk with you.
<b>Contact Us</b></p>

</div>
<div className='FAQ-body'>

<div className="dropdown-container FAQbox-1">
    <label for="dropdown-toggle-1" className="question">What Fastpay does?</label>
    <Select options={options1}  className="css-b62m3t-container"/>

   {/* <select className="dropdown" id="dropdown-toggle-1">
        <option selected disabled hidden></option>
        <option value="option1" className="dropdown-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  <br /> sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </option>
    </select> */}
</div>

<div className="dropdown-container FAQbox-2">
    <label for="dropdown-toggle-2" className="question">Is FastPay a cryptocurrency platform?</label>
    <Select options={options2} />
   {/* <select className="dropdown" id="dropdown-toggle-2" >
        <option selected disabled hidden></option>
        <option value="option1" className="dropdown-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </option>
    </select> */}
</div>

<div className="dropdown-container FAQbox-3">
    <label for="dropdown-toggle-3" className="question">How can I receive money to my FastPay account?</label>
    <Select options={options3} />
    {/*<select className="dropdown" id="dropdown-toggle-3">
        <option selected disabled hidden></option>
        <option value="option1" className="dropdown-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </option>
    </select> */}
</div>

</div>
     
 </div>
</section>
    <Cta />
    <Footer />
</div>

  )
}

export default FAQS
