import React from 'react'
import { Link } from 'react-router-dom'

const CreateAcct = () => {
  return (
    <div>
    <Link to='/SignUp'>
      <button className='nav__btns-createAccnt-home'>Create Free Account</button> 
      </Link>
    </div>
  )
}

export default CreateAcct
