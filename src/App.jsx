import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';   
import Fiat from './pages/Fiat.jsx'; 
import Volkswagen from './pages/Volkswagen.jsx'; 
import Contact from './pages/Contact';
import Login from './pages/login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './pages/CartPage.jsx';





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/fiat' element={<Fiat />} />
          <Route path='/volkswagen' element={<Volkswagen />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carrito' element={<CartPage />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
};

export default App;
