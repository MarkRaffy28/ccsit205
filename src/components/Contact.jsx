import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_6ea44uj', 'template_a495pfi', form.current, {
        publicKey: '2-w6Mpyr4uQ0KUrV-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  
  return (
    <section id='contact' className='block contact-block'>
        <div className='title-holder'> 
            <h2>Contact Us</h2>
            <div className='subtitle'>get connected with us</div>
        </div>
        <div className='StyledContactForm'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required/>
      <label>Email</label>
      <input type="email" name="from_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
    </form>
    </div>
    <br/>
    <div className='google-map'>
        <iframe
        title='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.969048760056!2d120.47568249999999!3d17.365222299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e14d3fc6c200b%3A0xe757c38b100f36a9!2sIlocos%20Sur%20Polytechnic%20State%20College%20-%20Sta.%20Maria%20Campus!5e0!3m2!1sen!2sph!4v1756913590370!5m2!1sen!2sph" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </section>
  );
};

export default Contact;