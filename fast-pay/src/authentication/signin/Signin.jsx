import SigninImg from '../../images/Group 72login-img.png'
import './signin.css'


const Signin = () => {
  return (
    <container__signin-container>
      <div className="top-bar">
        <h1>Fast Pay</h1>
      </div>

      
      <div className="form__container">
        <div className="form__content">
          <h2>Login to your account</h2>
        <form action="">
          <label htmlFor="Name">E-mail or Phone Number</label>
          <input type="email/phone number" name="e-mail" id="" placeholder='John Doe' />
          <label htmlFor="pword" >Password</label>
          <input type="password" placeholder='********'/>
          
          <button className='signin-btn'>Sign In</button>
          <button className='register-btn'>Don't have an account? Register</button>
          <button className='forgot-password-btn'>Forgot Password</button>
        </form>
        </div>
        
        <div className="signin__img">
          <img src={SigninImg} alt="" />
        </div>
    </div>
    
      

    </container__signin-container>
    
  )
}

export default Signin