import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Client/Login/Login';
import Home from './components/Client/Home/Home';
import Contact from './components/Client/Contact/Contact';
import About from './components/Client/About/About';
import PageNotFound from './components/Client/PageNotFound/PageNotFound';
import Tablets from './components/Client/Tablets/Tablets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tablets" element={<Tablets/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
