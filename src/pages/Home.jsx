import React from 'react'
import Header from '../components/layouts/header/header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layouts/footer/Footer'
import CarouselHome from '../components/layouts/Bootstrap/CarouselHome'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className='h1-title'>
          Repuestos Ale
        </h1>
        <section>
          <CarouselHome />
        </section>
      </div>
      <Footer />
      </>
  )
}

export default Home