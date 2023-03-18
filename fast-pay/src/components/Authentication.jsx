import './authentication.css'
import React, { useState } from "react"
import { Link } from 'react-router-dom'


const SignIn = () => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const  handleSubmit=(e) =>{
    e.preventDefault();
    console.log("submit-login");
  }

  return (    
    <container__signin-container>
      <div className="top__nav">
      <Link to="/">
      <logo>FastPay</logo>
      </Link>       
        <Link to="/SignUp">
        <button className='top__nav-btn'>Create Free Account</button>
        </Link>
      </div>  
     
        <div className="form__content">
          <h2>Login to your account</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="Name">E-mail or Phone Number</label>
          <input aria-label='Phone number, username, or email' name="username" id="" placeholder='John Doe' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="pword" >Password</label>
          <input type="password" placeholder='********' value={pass} onChange={(e)=>setPass(e.target.value)}/>
          
          <button className='signin-btn' type="submit">Sign In</button>
          <Link to="/SignUp">
          <button className='register-btn'>Don't have an account? Register</button>
          </Link>
          
          <button className='forgot-password-btn'>Forgot Password</button>
        </form>
        </div>      

    </container__signin-container>

  )
}
const SignUp=() => {

const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');

const handleSubmit=(e) => {
  e.preventDefault();
  console.log("submit");

}
  return (
    <container__signup-container>
      <div className="top__nav">
      <Link to="/">
      <logo>FastPay</logo>
      </Link>  
        <Link to="/SignIn">
        <button className='top__nav-btn'>Login to Account</button>
        </Link>
        
      </div>  
     
        <div className="form__content-SignUp">
          <h2>Create a FastPay Account</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="fName" >First name</label>
          <input type="text" placeholder='John' id="fName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

          <label htmlFor="lName" >Last Name</label>
          <input type="text" placeholder='Doe' id="lName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

          <label htmlFor="Name">E-mail or Phone Number</label>
          <input aria-label='Phone number, username, or email' name="username" 
          id="Name" placeholder='Johndoe@gmail.com'  value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <label htmlFor="pword">Password</label>
          <input type="password" placeholder='********' id="pword" value={pass} onChange={(e)=>setPass(e.target.value)} />
          
          <button className='signup-btn' type="submit" >Get Started</button>
          <p>By clicking get started, I acknowledge that I have read and do hereby accept the terms and conditions in the FastPay’s Terms of Use, and Privacy Policy.</p>
         
        </form>
        </div>      

    </container__signup-container>

  )

}

export default SignIn;
export {SignUp};