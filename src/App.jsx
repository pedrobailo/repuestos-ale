import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/layouts/header/header.jsx"
import Button from '@mui/material/Button';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/layouts/footer/Footer.jsx';
import ProductCard from './components/productcard/ProductCard.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';   
import Fiat from './pages/Fiat.jsx'; 
import Volkswagen from './pages/Volkswagen.jsx'; 
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className='h1-title'>
          Repuestos Ale
        </h1>
      </div>
      <Footer />
      </>

  );
};

export default App;
