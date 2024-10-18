import React from 'react'
import Header from '../components/layouts/header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layouts/footer/Footer'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const CartPage = () => {
  return (
    <>
    <Header />
    <Navbar />
        <section className="cart-page">
            <h1 className='h1-title'>Mi Carrito</h1>
            <p className='h1-title'>El carrito está vacío</p>
            <h1 className='h1-title'>
                <SentimentVeryDissatisfiedIcon fontSize='large' sx={{ marginBottom: 1 }}/>
            </h1>


        </section>
    <Footer />
    </>
  )
}

export default CartPage