
import { AiFillMail } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'




export const links = [
  {
    id: 1,
    name: "ourSolution",
    path: "/"
  },
  { id: 2, name: "About us", path: "/AboutUs" },
  { id: 3, name: "Contact us", path: "/contactUs" },
  { id: 4, name: "Resources", path: "/resources" }
];

export const ValueCards = [
  {
    id: 1,
    title: "Responsiveness",
    info: ` We are always available to help you.
            With our 24/7 customer service, 
            we would respond to any concerns and issue promptly,
            to proffer usable solution`
  },
  {
    id: 2,
    title: "Transparency",
    info: ` We want the world to see us for who we are.
             Just a bunch of free people trying to give money the 
             freedom it needs. We let you know the state of your money 
             and transactions every step of the way`
  },
  {
    id: 3,
    title: "Unity",
    info: ` We believe in togetherness and the progress it breeds.
             We are a close knit team with similar goals and
             intrinsic values. `
  },
  {
    id: 4,
    title: "Freedom",
    info: `We want to be free, and we want you to be free.
            We are advocates of responsible freedom 
            and we are active in the movement against
            unnecessary restrictions`
  }
];

export const contactCards=[
  {
    id:1,
    icon:< FiPhoneCall style={{color:'white',width:'50px',height:'50px',fill:'white',marginBottom:'24px'}} />,
    data:`(208)565-0985`,
     info: `(905)565-0128`
  },
  {id:2,
    icon:< AiFillMail style={{color:'white',width:'50px',height:'50px',marginBottom:'24px'}}/>,
    data:`Info@fastpay.com`,
    
  },
  {id:3,
    icon:< HiLocationMarker style={{color:'white',width:'50px',height:'50px',marginBottom:'24px'}}/>,
    data:`Allen Avenue, Ikeja, Lagos`,
   
  }
]

export const complaintCards=[
  {id:1,
    head:"Complaints and Issue.",
    data:`Our 24/7 support team is ready to help`,
    link:`Contact support`
  

  },
  {id:2,
    head:"Partner with us",
    data:`Want to partner with FastPay?`,
    link:`Contact our team`
    

  },
  {id:3,
    head:"Media and PR",
    data:`Reach out to our media and marketing team.`,
    link:`Contact Media team`
  }
]


