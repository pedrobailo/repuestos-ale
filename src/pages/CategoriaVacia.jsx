import React from 'react'
import { Link } from 'react-router-dom';

const CategoriaVacia = () => {
  return (
    <>
    <h2 className='h1-title'>Lo sentimos, esta seccion esta vacia </h2>
    <Link to="/home"><button className="add-to-cart-button">Volver al Inicio</button></Link> 
    </>
  )
}

export default CategoriaVacia;
