import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Fiat from './pages/Fiat.jsx'; 
import Volkswagen from './pages/Volkswagen.jsx'; 
import Contact from './pages/Contact';
import Login from './pages/login.jsx';
import Products2 from './pages/Products2.jsx';
import CartDrawer from './components/cart/CartDrawer/CartDrawer.jsx'; // Asegúrate de tenerlo bien importado
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Drawer del carrito que está siempre visible */}
        <CartDrawer cart={cart} />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/fiat' element={<Fiat />} />
          <Route path='/volkswagen' element={<Volkswagen />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          
          {/* Pasar la función addToCart a Products2 */}
          <Route path='/sidebar' element={<Products2 addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

