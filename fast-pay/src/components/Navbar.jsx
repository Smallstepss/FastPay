
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
                          
                          <li key={index}>
                              <NavLink to={path} >{name}</NavLink>
                              
                          </li>
                         
                      )
                  })}
                  <div className="nav__btn">
                  <li className="nav__login">
                  <Link to='/SignIn' className='nav__btns-login'>
                  Login
                  </Link>
                  
                  </li>
                  <li className="nav__signUp">
                  <Link to='/SignUp' className='nav__btns-createAccnt'>
                  Create Free Account
                  </Link>
                  
                  </li>                          
                        
                  </div>
                  

              </ul>
             
          </div>
         
          {/*
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
          */}
            
         
          <button className="nav_toggle-btn" onClick={()=>setNavbar(!isNavbarShows)}>
          {isNavbarShows? <FaWindowClose /> : <GoThreeBars/>}
         </button>

        </div>
        
        
    </nav>
  )
}

export default Navbar


/*claudius navbar**********************************************/

/*

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { MdOutlineClose } from 'react-icons/md'

import { GoThreeBars } from "react-icons/go";
import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
      <nav>
        <div className="container nav__container">
            <div>
                <Link to="/" className='logo'>

                  <h1>FastPay</h1>
                </Link>
            </div>
          <div>
              <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>
                  {links.map(({ name, path }, index) => {
                      return (
                          <li key={index}>
                              <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ' '} 
                             onClick={()=> setIsNavShowing (prev => !prev)} >{name}</NavLink>
                          </li>
                      )
                  })}
                     <div className="nav__btn">
                     

                         <button className='nav__btns-login'>Login</button>
                         <button className='nav__btns-createAccnt'>Create Free Account</button>

                    </div>  
              </ul>
          </div>
         
                  <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)} >{
                      isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }</button>
              
        </div>
    </nav>
  )
}

export default Navbar

*/