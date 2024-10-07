import React from 'react'
import Header from '../components/layouts/header/Header.jsx';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layouts/footer/Footer';
import ProductCardCategory from '../components/productcard/ProductCardCategory.jsx';

const Fiat = () => {
  return (
    <> 
    <Header />
    <Navbar />
    <h2 className='h1-title' style={{ display: 'flex', alignItems: 'center' }}>
    <img 
        src="/fiat.png" 
        alt="Logo Fiat" 
        style={{ width: '50px', height: '50px', marginRight: '8px' }} 
    />
    FIAT
</h2>

  <section className='SectionCategoriasProductos'>
    <div className="product-grid">
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/motor.png"
            nombre="Motor"
      
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/iluminacion.png"
            nombre="Iluminacion"
            
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/encendido-y-electricidad.png"
            nombre="Encendido"
            
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/suspension-y-freno.png"
            nombre="Suspension"
            
          /> 
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/filtros-y-aceites.png"
            nombre="Filtros y Aceites"
            
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/inyeccion.png"
            nombre="Inyeccion"
            
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/refrigeracion.png"
            nombre="Refrigeracion"
            
          />                                                       
        </div>
    </section>
    <Footer />
    </>
    
  )
}

export default Fiat;