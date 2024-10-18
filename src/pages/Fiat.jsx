import React from 'react';
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
            description=""
            categories={[
              { name: 'Distribución', link: '' },
              { name: 'Embrague', link: '' },
              { name: 'Turbo', link: '' },
              { name: 'Correa', link: '' },
              { name: 'Soportes', link: '/fiat/motor/soportes' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/iluminacion.png"
            nombre="Iluminación"
            description=""
            categories={[
              { name: 'Accesorios', link: '' },
              { name: 'Lámpara', link: '' },
              { name: 'Faros', link: '' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/encendido-y-electricidad.png"
            nombre="Encendido"
            description=""
            categories={[
              { name: 'Alternador', link: '' },
              { name: 'Arranque', link: '' },
              { name: 'Bobina de Encendido', link: '' },
              { name: 'Bujía', link: '' },
              { name: 'Fusibles', link: '' },
              { name: 'Baterías', link: '' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/suspension-y-freno.png"
            nombre="Suspensión"
            description=""
            categories={[
              { name: 'Suspension', link: '' },
              { name: 'Freno', link: '' },
            ]}
          /> 
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/filtros-y-aceites.png"
            nombre="Filtros y Aceites"
            description=""
            categories={[
              { name: 'Aceite', link: '' },
              { name: 'Filtro', link: '' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/inyeccion.png"
            nombre="Inyección"
            description=""
            categories={[
              { name: 'Inyectores', link: '' },
              { name: 'Sensor', link: '' },
              { name: 'Bomba de Inyeccion', link: '' },
              { name: 'Modulo', link: '' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/refrigeracion.png"
            nombre="Refrigeración"
            description=""
            categories={[
              { name: 'Electroventilador', link: '' },
              { name: 'Termostatos', link: '' },
              { name: 'Liquido Refrigerante', link: '' },
              { name: 'Compresor', link: '' },
            ]}
          />                                                       
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fiat;
