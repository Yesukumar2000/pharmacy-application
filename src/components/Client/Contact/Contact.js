import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='page-content'>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries, feedback, or support.</p>
      <p>You can contact us via email at <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">kumaryesu2000@gmail.com</a> or by phone at +123456789.</p>
    </div>
    </>
  );
}

export default Contact;
