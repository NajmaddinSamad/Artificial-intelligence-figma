import React from 'react'
import '../components/Contact.css'
import Button from '../components/Button'
const Contact = () => {
  return (
   <>
<div className="contact">
<h1 className="head">Contact Us</h1>
    <form action="#">
    <input type="text" name="" id="" placeholder='name' />
    <input type="text" name="" id="" placeholder='Surname' />
    <input type="email" name="" id="" placeholder='email'/>
    <textarea name="" id="" cols="30" rows="6" placeholder='Enter your message'></textarea>
    <Button valueOfButton='Send' nameOfClass='btn btn-primary'/>
    </form>
</div>

</>
  )
}

export default Contact