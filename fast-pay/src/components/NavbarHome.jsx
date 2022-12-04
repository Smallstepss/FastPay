import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import './navbarhome.css'
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';
import {FaWindowClose} from "react-icons/fa";
import CreateAcct from './CreateAcct.jsx'
import LoginBtn from './LoginBtn.jsx'

const NavbarHome = () => { 

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
              <ul className={`nav__linksHome ${isNavbarShows ? 'show__nav' :'hide__nav'}`} >
                  {links.map(({ name, path }, index) => {
                      return (
                          <li>
                              <NavLink to={path} >{name}</NavLink>
                          </li>
                      )
                  })}
              </ul>
          </div>
          <div className="nav__btn">
              <LoginBtn />
              <CreateAcct />
          </div>
          <button className="nav_toggle-btn" onClick={()=>setNavbar(!isNavbarShows)}>
          {isNavbarShows? <FaWindowClose /> : <GoThreeBars/>}
        </button>

        </div>
    </nav>
  )
}

export default NavbarHome