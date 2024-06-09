import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import Testimonial from './Testimonials/Testimonial';

function About ()  {
  return (
    <>
     <Navbar/>
    <div className='page-content'>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
      <p>Our mission is to exceed customer expectations and deliver exceptional value.</p>
    </div>
     <Testimonial />
    </>
  );
}

export default About;
