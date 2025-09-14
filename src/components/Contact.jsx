import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();''
    
    emailjs
      .sendForm('gmail', 'template_mark_inclusive', form.current, {
        publicKey: 'CsIHMcRTo5loeJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);''
        },
      );
    e.target.reset();
  };
  
  return (
    <section>
      <Form ref={form} onSubmit={sendEmail} className="contact-form m-3">
        <h4 className="fw-bold text-center my-2">Contact </h4>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="from_name" placeholder="Enter your name"  required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="from_email" placeholder="Enter your e-mail" required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" required />
        </Form.Group>
                
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </section>
  );
};

export default Contact;