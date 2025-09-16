import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('gmail', 'template_mark_inclusive', form.current, {
        publicKey: 'CsIHMcRTo5loeJ-7V',
      })
      .then(
        () => {
          alert('E-MAIL SENT SUCCESSFULLY!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  
  return (
    <section className='container my-5 p-2 d-flex justify-content-center'>
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-12 col-lg-4">
          <Form ref={form} onSubmit={sendEmail} className="contact-form p-3 border border-2 border-success rounded">
                <h4 className="fw-bold text-center my-2">Contact</h4>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="from_name" placeholder="Enter your name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="from_email" placeholder="Enter your e-mail" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" required />
                </Form.Group>
                        
                <Button variant="primary" type="submit">
                  Send
                </Button>
          </Form>
        </div>
        <div className="col-12">

        </div>
          <iframe
            className="w-100 mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.718400338079!2d120.48013579138667!3d17.3791437361056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6ad0806328bb%3A0x5f3d3a1caf86a4bb!2sTinaan%2C%20Santa%20Maria%2C%20Ilocos%20Sur!5e0!3m2!1sen!2sph!4v1757832536384!5m2!1sen!2sph"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
      </div>
    </section>
  );
};

export default Contact;
