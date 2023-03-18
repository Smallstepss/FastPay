import './cta.css'
import IMG from '../../images/Rectangle 147beforeFooter-img.png'
import Applestore from '../../images/Frame 10AppleStore.png'
import Playstore from '../../images/Frame 11Google Store.png'

const Cta = () => {
  return (
      <div className="cta__container">
          <div className="cta__container-content">
              <div className="cta__container-content-col">
                  <div className="cta__container-content-col-text">
                      <h3>WHY CHOOSE US?</h3>
                  <h1>Make and receive payment swiftly in 15+ currencies</h1>
                  </div>
                  <div className='cta__store-icons'>
                      <a href=""><img src={Applestore} alt="" /></a>
                      <a href=""><img src={Applestore} alt="" /></a>
                  </div>
              </div>
              <div className="cta__container-content-col">
                  <img src={IMG} alt="cta-img" />
              </div>
          </div>
    </div>
  )
}

export default Cta