import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import './navbar.css'
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';
import {FaWindowClose} from "react-icons/fa";


const Navbar = () => { 

    const[isNavbarShows,setNavbar] =useState(false);

    return (
      <nav>
        <div className="container nav__container">
            <div>
                <Link to="/" className='logo'>
                  <h1>FastPay</h1>
                </Link>
            </div>
          <div>
              <ul className={`nav__links ${isNavbarShows ? 'show__nav' :'hide__nav'}`} >
                  {links.map(({ name, path }, index) => {
                      return (
                          
                          <li>
                              <NavLink to={path} >{name}</NavLink>
                              
                          </li>
                      )
                  })}
              </ul>
          </div>
          <div>
          <ul  className={`nav__btn ${ isNavbarShows ? 'show__nav' : 'hide__nav'}`}>
             <li> 
                <Link to='/SignIn'>
                  <button className='nav__btns-login'>Login</button>
                </Link>
              </li> 
              <li>
              <Link to='/SignUp'>
                <button className='nav__btns-createAccnt'>Create Free Account</button> 
              </Link>
              </li>
          </ul>
            
          </div>
          <button className="nav_toggle-btn" onClick={()=>setNavbar(!isNavbarShows)}>
          {isNavbarShows? <FaWindowClose /> : <GoThreeBars/>}
         </button>

        </div>
        
        
    </nav>
  )
}

export default Navbar