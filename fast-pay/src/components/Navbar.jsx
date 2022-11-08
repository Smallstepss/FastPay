import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import './navbar.css'

const Navbar = () => {
  return (
      <nav>
        <div className="container nav__container">
            <div>
                <Link to="/" className='logo'>
                  <h1>FastPay</h1>
                </Link>
            </div>
          <div>
              <ul className='nav__links'>
                  {links.map(({ name, path }, index) => {
                      return (
                          <li>
                              <NavLink to={path}>{name}</NavLink>
                          </li>
                      )
                  })}
              </ul>
          </div>
          <div className="nav__btn">
              <button className='nav__btns-login'>Login</button>
              <button className='nav__btns-createAccnt'>Create Free Account</button>
              </div>
        </div>
    </nav>
  )
}

export default Navbar