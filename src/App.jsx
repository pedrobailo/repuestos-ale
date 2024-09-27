import React from 'react';
import Header from "./components/layouts/header/header.jsx"
import Button from '@mui/material/Button';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/layouts/footer/Footer.jsx';
const App = () => {
  return (
    <><Header/>
    <Navbar/>
    <div>
      <h1 className='h1-title'>Repuestos Ale</h1>
    </div>
    <Footer/>
    </>
  );
};

export default App;
