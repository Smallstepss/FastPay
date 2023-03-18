import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsMessenger } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { TbBrandMeta } from 'react-icons/tb'


const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className="footer footer__info">
        <div className="footer footer__info-col">
          <h2>FastPay</h2>
          <p>Finance helps companies manage payments easily.</p>
          <div className="footer footer__icon">
            <ul className="footer__icon-link">
              <li ><a href="" ><FaLinkedinIn /></a></li>
              <li><a href="" ><BsMessenger /></a></li>
              <li><a href="" ><BsTwitter /></a></li>
              <li><a href="" ><TbBrandMeta/></a></li>
            </ul>
          </div>          
        </div>

        <div className="footer footer__info-col">
          <h2>Contact</h2>
            <ul className="footer__link">
              <li><a href="">Contact support</a></li>
              <li><a href="">Contact sales</a></li>
              <li><a href="">Contact corporate</a></li>
            </ul>         
        </div>

        <div className="footer footer__info-col">
          <h2>Company</h2>
           <ul className="footer__link">
              <li><a href="">About Us</a></li>
              <li><a href="">Our teams</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Career</a></li>
            </ul>          
        </div>

        <div className="footer footer__info-col">
          <h2>Legal</h2>
          <ul className="footer__link">
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Terms of use</a></li>
            <li><a href="">Cookie policy</a></li>
            <li><a href="">Cooking settings</a></li>
          </ul>          
        </div>

        <div className="footer footer__info-col">
          <h2>Product</h2>
           <ul className="footer__link">
              <li><a href="">Send money</a></li>
              <li><a href="">Receive money</a></li>
              <li><a href="">Exchange currencies</a></li>
              <li><a href="">Virtual Card</a></li>
            </ul>          
        </div>

        <div className="footer footer__info-col">
          <h2>Resources</h2>
           <ul className="footer__link">
              <li><a href="">Blog</a></li>
              <li><a href="">Get investment advice</a></li>
              <li><a href="">Guide</a></li>
              <li><a href="">Frequently asked questions</a></li>
              <li><a href="">Exchange rates</a></li>
              <li><a href="">Money news</a></li>
            </ul>          
        </div>
        
      </div>
      <div className='footer__line'></div>
      <p className="footer__last-para">© 2022 FastPay, a subsidiary of SE Technologies. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer