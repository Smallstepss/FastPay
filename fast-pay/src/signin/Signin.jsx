import SigninImg from '../../images/Group 72login-img.png'
import './signin.css'


const Signin = () => {
  return (
    <container__signin-container>
      <div className="top__nav">
        <logo>FastPay</logo>
        <button class='top__nav-btn'>Create Free Account</button>
      </div>

      
     
        <div className="form__content">
          <h2>Login to your account</h2>
        <form action="">
          <label htmlFor="Name">E-mail or Phone Number</label>
          <input aria-label='Phone number, username, or email' name="username" id="" placeholder='John Doe' />
          <label htmlFor="pword" >Password</label>
          <input type="password" placeholder='********'/>
          
          <button className='signin-btn'>Sign In</button>
          <button className='register-btn'>Don't have an account? Register</button>
          <button className='forgot-password-btn'>Forgot Password</button>
        </form>
        </div>
   
    
      

    </container__signin-container>
    
  )
}

export default Signin