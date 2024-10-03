import React from 'react'
import Header from '../components/layouts/header/Header.jsx';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layouts/footer/Footer';
import ProductCard from '../components/productcard/ProductCard.jsx';

const Fiat = () => {
  return (
    <> 
    <Header />
    <Navbar />
    <h2 className='h1-title'>Fiat</h2>
    <section>
    <div className="product-grid">
          <ProductCard
            description="Distribucion"
      
          />
          <ProductCard
            description="Embrague"
            
          />
          <ProductCard
            description="Homocinetica"
            
          />
          <ProductCard
            description="Turbo"
            
          />
          <ProductCard
            description="Correa"
            
          />
          <ProductCard 
            description="Soportes"
            
          /> 
        </div>
    </section>
    <Footer />
    </>
    
  )
}

export default Fiat;