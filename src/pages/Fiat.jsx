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
              { name: 'Distribución', link: '/vacio' },
              { name: 'Embrague', link: '/vacio' },
              { name: 'Turbo', link: '/vacio' },
              { name: 'Correa', link: '/vacio' },
              { name: 'Soportes', link: '/vacio' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/iluminacion.png"
            nombre="Iluminación"
            description=""
            categories={[
              { name: 'Accesorios', link: '/vacio' },
              { name: 'Lámpara', link: '/vacio' },
              { name: 'Faros', link: '/vacio' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/encendido-y-electricidad.png"
            nombre="Encendido"
            description=""
            categories={[
              { name: 'Alternador', link: '/vacio' },
              { name: 'Arranque', link: '/vacio' },
              { name: 'Bobina de Encendido', link: '/vacio' },
              { name: 'Bujía', link: '/vacio' },
              { name: 'Fusibles', link: '/vacio' },
              { name: 'Baterías', link: '/vacio' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/suspension-y-freno.png"
            nombre="Suspensión"
            description=""
            categories={[
              { name: 'Suspension', link: '/vacio' },
              { name: 'Freno', link: '/vacio' },
            ]}
          /> 
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/filtros-y-aceites.png"
            nombre="Filtros y Aceites"
            description=""
            categories={[
              { name: 'Aceite', link: '/vacio' },
              { name: 'Filtro', link: '/vacio' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/inyeccion.png"
            nombre="Inyección"
            description=""
            categories={[
              { name: 'Inyectores', link: '/vacio' },
              { name: 'Sensor', link: '/vacio' },
              { name: 'Bomba de Inyeccion', link: '/vacio' },
              { name: 'Modulo', link: '/vacio' },
            ]}
          />
          <ProductCardCategory
            image="https://autodo.vtexassets.com/arquivos/refrigeracion.png"
            nombre="Refrigeración"
            description=""
            categories={[
              { name: 'Electroventilador', link: '/vacio' },
              { name: 'Termostatos', link: '/vacio' },
              { name: 'Liquido Refrigerante', link: '/vacio' },
              { name: 'Compresor', link: '/vacio' },
            ]}
          />                                                       
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fiat;
