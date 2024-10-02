import React from 'react'
import App from '../App'
import Header from '../components/layouts/header/header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layouts/footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className='h1-title'>
          Repuestos Ale
        </h1>
      </div>
      <Footer />
      </>
  )
}

export default Home