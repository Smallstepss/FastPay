import React from 'react'
import { useState } from 'react';

const ContactForm = () => {

const [values,setValues]=useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    companyName:"",
    message:""
});

const[submitted,setSubmitted] =useState(false);
const[valid,setValid]=useState(false);

const handleSubmit=(event) =>{
event.preventDefault();
if(values.fullName && values.email && values.phoneNumber && values.companyName && values.message){
setValid(true);
}
    setSubmitted(true);
}

const handleFullNameChange =(event)=>{
    setValues({...values,fullName:(event.target.value)});
}
const handleEmailChange =(event)=>{
    setValues({...values,email:(event.target.value)});
}
const handlePhoneNumberChange =(event)=>{
    setValues({...values,phoneNumber:(event.target.value)});
}
const handleCompanyNameChange =(event)=>{
    setValues({...values,companyName:(event.target.value)});

  }
const handleMessageChange =(event)=>{
    setValues({...values,message:(event.target.value)});
}

{/*   ...   is spread operator. 
it helps in carrying all values from one array to another.*/}
  

return (
    <div>
       <div className='form-container'>
    <h1 className='contact-head'>Send us a message</h1>
    <form className='contact-form' onSubmit={handleSubmit}>  
         
   {submitted && valid?<div  class="success-message">Success! Thank you for registering</div>:null}
    
    <div className='form-div'>
<div className='form-group'>



    <label htmlFor='fullName' >Full Name   </label> 
    <input
    onChange={handleFullNameChange}
    id="full-name"
      className='form-field'
      type="text"
      name="fullName"
      value={values.fullName}
     
    />
    {submitted && !values.fullName ?   <span id="full-name-error">Please enter a full name</span> : null}
    </div>
    
   
    <div className='form-group'>

    
     <label htmlFor='email' >Email   </label> 
     <input
     onChange={handleEmailChange}
     id="email"
      className='form-field'
      type="text"
      name="email"  
      value={values.email}    
    />
   {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

       
    </div>
    </div>
    <div className='form-div'>
    <div className='form-group'>
    
    <label htmlFor='phonenumber' >Phone Number</label> 
     <input
     onChange={handlePhoneNumberChange}
     id="phone-num"
      className='form-field'
      type="number"
      name="phonenumber"  
      value={values.phoneNumber}    
    />
    {submitted && !values.phoneNumber ?<span id="phone-num-error">Please enter a phone number</span>: null}
    </div>
  
    <div className='form-group'>
     
    <label htmlFor='companyName' >Company Name</label> 
     <input
     onChange={handleCompanyNameChange}
     id="company-name"
      className='form-field'
      type="text"
      name="companyName"   
      value={values.companyName}   
    />
     {submitted && !values.companyName ?<span id="company-name-error">Please enter a company name</span>: null}
  
    </div>
    </div>    
    
    <div class="form-group">
   
    <label htmlFor='message' >Message</label> 
      <textarea 
      onChange={handleMessageChange} id="msg-box" className="form-field" name="message" rows="10" required></textarea>
       {submitted && !values.message ?<span id="message-error">Please enter a Message</span>: null}
    </div>
   
      <button 
      
      className='form-field' 
      type="submit"
      >
       Send
      </button>
    </form>

    </div>
    
    </div>
  )
}

export default ContactForm
