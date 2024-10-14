import React from 'react'
import Header from '../components/layouts/header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layouts/footer/Footer'
import CarouselHome from '../components/layouts/Bootstrap/CarouselHome'
import SearchBar from '../components/searchbar/SearchBar'
import MyNavbar from '../components/mynavbar/mynavbar'
import ProductSearch from '../components/productsearch/ProductSearch'


const Home = () => {
  const handleSearch = (query) => {
    // Aquí puedes manejar la búsqueda, como filtrar productos o redirigir a otra página
    console.log('Buscar:', query);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div>
        <section>
          <CarouselHome />
        </section> 
      </div>
      <section className='SectionSearchBar'>
      <SearchBar onSearch={handleSearch} /> {/* Buscador integrado */}
      <ProductSearch />
      </section>
      <Footer />
    </>
  );
}

export default Home;