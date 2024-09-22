import React from 'react';
import Header from "./components/layouts/header/header.jsx"
import Button from '@mui/material/Button';
import Navbar from './components/navbar/navbar.jsx';

const App = () => {
  return (
    <><Header/>
    <Navbar/>
    <div>
      <h1 className='h1-title'>Repuestos Ale</h1>
    </div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Material-UI está funcionando!</h1>
      <Button variant="contained" color="primary">
        ¡Hola Mundo!
      </Button>
    </div>
    </>
  );
};

export default App;
