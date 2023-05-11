import React, { useRef } from 'react';
import '../assets/style/Contact.css'
import Button from '../components/Button'
import emailjs from '@emailjs/browser';
const Contact = () => {

    const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ws6ysqk', 'template_eidzbcn', formRef.current, 'yXHtkDqs2jmrD4p-H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      formRef.current.reset();
  };

  return (
   <>
<div className="contact">
<h1 className="head">Contact Us</h1>
    <form  ref={formRef} onSubmit={sendEmail}>
    <input type="text" name="name" id="" placeholder='Name' />
    <input type="email" name="email" id="" placeholder='Email'/>
    <input type="text" name="message_title" id="" placeholder='Title' />
    <textarea name="mesaj" id="" cols="30" rows="6" placeholder='Enter your message'></textarea>
    <Button  type='submit' valueOfButton='Send' nameOfClass='btn btn-primary'/>
    </form>
</div>

</>
  )
} 
  

export default Contact