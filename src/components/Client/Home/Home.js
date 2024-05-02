import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

function Home() {
  let firstName = localStorage.getItem('firstName'); 
  return (
    <>
      <Navbar />
      <div className='page-content'>
        <h1>Hi <span style={{color:'#1cd61c'}}>{firstName}</span></h1>
        <h1>Welcome to Our Website!</h1>
        <p>This is the home page of our website. We offer a wide range of products/services to meet your needs.</p>
        <p>Explore our website to learn more about what we offer.</p>
      </div>
    </>
  );
}

export default Home;
