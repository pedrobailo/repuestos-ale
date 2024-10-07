import React from 'react'
import Header from '../components/layouts/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layouts/footer/Footer';
import LoginForm from '../components/loginform/LoginForm';

const LoginPage = () => {
  return (
    <> 
    <Header />
    <Navbar />
    <LoginForm />
    <Footer />
    </>
  )
}

export default LoginPage;