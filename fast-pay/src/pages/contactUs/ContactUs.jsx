import './contactUs.css'
import Navbar from '../../components/Navbar.jsx'
import { contactCards } from "../../data.js";
import Card from "../../components/Card.jsx";


const ContactUs = () => {
  
  return (
    <div>
    <header>
    <Navbar />
    </header>
    <section className="c-section c-section1">
   <div className="c-hero c-hero--support">
    <div className='c-container'>
     <div className='c-hero__body'>
        <div className='c-hero__heading'>

          <h1 className="c-contact c-head"> Contact Us</h1>
          <p className="c-contact c-para">Reach out to us.<br/>We'd love to hear from you.</p>
        
        </div>
        <div className='c-grid'>
       { contactCards.map(({id,icon,data,info}) =>
         {
           return (
  
              <Card className="cards_contactCard" key={id}>
                <span>{icon}</span>
                <p>{data}</p>
                <p>{info}</p>
              </Card>
  
                  );              
        
        })
       }

        </div>      
      </div>

    </div> 
    </div>

    </section>

    
    <section className="c-section c-section2">

    </section>
    <section className="c-section c-section3">

    </section>
  



    </div>
  )
}

export default ContactUs