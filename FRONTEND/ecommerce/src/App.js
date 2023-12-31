import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Category from './components/Category';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Product from './components/Product';

function App() {
  return (

    <Router>

      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    </Router>

  );
}

export default App;
