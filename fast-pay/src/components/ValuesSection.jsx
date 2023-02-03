import Card from "./Card.jsx";
import { ValueCards } from "../data.js";
import rectangle154 from "../images/Rectangle 154.png";

const ValuesSection = () => {


function cardsOfValues({id,title,info}) {
  
    return (
      <Card className="cards_valueCard" key={id} >
       <h4>{title}</h4>
       <small>{info}</small>
      </Card>
    );    
}

  return (
    <>
      <section className="section5 values_section">
      <div className="section5_head">
      <h1 >Our Values</h1>
      </div>
     

        <div className="container values_container">        
    
        <div className="values_left">
        <div className="values_img">
        <img src={rectangle154} alt="happy-young-business-colleagues-indoors"></img>

        </div>

        </div>
        <div className="values_right">

      
          <div className="values_wrapper">
         { ValueCards.map(cardsOfValues )}          
          
          </div>
        </div>

         
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
