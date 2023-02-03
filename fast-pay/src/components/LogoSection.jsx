import React from 'react'
import logoAllAfrica from "../images/Yallafrica.png"
import logoThisDay from "../images/thisday.png"
import logoOracle from "../images/oracle.png"
import logoTheNation from "../images/thenation.png"
import logoKenya from "../images/hapakenya.png"
import logoSamsung from "../images/samsung.png"

const LogoSection = () => {
  return (
    <>
   <section className="section4 logo-section">
                    
                    <div className="container logo-container">                                                                
               
                       <div className="section4-header logo-header">
               
                               <div className="section4-header__body">
                                    <h2>Trusted By Over 100,000+ users and businesses</h2>                                 
                                               
                                </div>
                            </div>            
               
                                                                                       
               <div className="logo-row logo-row--has-grid">
                   <div className="logo-6">
                       <img className="logo1-allAfrica"  alt="AllAfrica" src={logoAllAfrica}/>
                   </div>
                   <div className="logo-6">
                       <img className="logo4-theNation"  alt="TheNation" src={logoTheNation}/>
                    </div>                   
                         <div className="logo-6">
                       <img className="logo3-oracle"  alt="Oracle" src={logoOracle}/>
                   </div>
                   <div className="logo-6">
                       <img className="logo2-thisDay"  alt="ThisDay" src={logoThisDay}/>
                    </div>                   
                          <div className="logo-6">
                       <img className="logo5-kenya"  alt="Kenya" src={logoKenya}/>
                   </div>
                    <div className="logo-6">
                       <img className="logo6-samsung"  alt="Samsung" src={logoSamsung}/>
                    </div>
               </div>

            </div>
        </section>
    </>
  )
}

export default LogoSection
