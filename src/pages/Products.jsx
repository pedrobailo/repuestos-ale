import React from 'react'
import Header from '../components/layouts/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layouts/footer/Footer';
import { Link } from 'react-router-dom';
import ProductBrand from '../components/productbrand/ProductBrand';


const Products = () => {
  return (
    <> 
    <Header />
    <Navbar />
    <h1 className='h1-title'>Todos los Productos</h1>
    <h3 className='h1-title'>Seleccione una marca</h3>
    <section className='SectionCategorias'>
      <Link to="/fiat">
        <ProductBrand 
          image="/fiat.png"
        />
      </Link>
      <Link to="/volkswagen">
        <ProductBrand 
          image="/volkswagen.png"
        />
      </Link>
    </section>   
    <Footer />
    </>
  )
}
export default Products;
