import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <div>
    <Link to='/SignIn'>
      <button className='nav__btns-login'>Login</button>
      </Link>
    </div>
  )
}

export default LoginBtn
