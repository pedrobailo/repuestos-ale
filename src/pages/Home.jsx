import React from 'react'
import Header from '../components/layouts/header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layouts/footer/Footer'
import CarouselHome from '../components/layouts/Bootstrap/CarouselHome'
import CartDrawer from '../components/cart/CartDrawer/CartDrawer'



const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <section>
          <CarouselHome />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;