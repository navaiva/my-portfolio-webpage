import './contactMe.css'
import ContactForm from './ContactForm'
import React from 'react'
 
const App = () => {
  return (
      <div className="contactMe" >
        <h1 className='contactTitle'>Contact Me</h1>
        <div className='contactForm'>
        <div className='contactForm2'>
        <ContactForm />
        </div>
        </div>
      </div>
  )
}
  
export default App;