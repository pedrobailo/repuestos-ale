// Products2.jsx
import React, { useState, useEffect } from 'react';
import './Products2.css'; // Importa el CSS
import Sidebar from '../components/layouts/sidebar/Sidebar';
import Header from '../components/layouts/header/Header';
import Footer from '../components/layouts/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import productsData from '../data/products';

const Products2 = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    subSubcategory: '',
  });

  useEffect(() => {
    const { category, subcategory, subSubcategory } = filters;
    const filtered = productsData.filter((product) => {
      const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
      const matchesSubcategory = !subcategory || product.subcategory.toLowerCase() === subcategory.toLowerCase();
      const matchesSubSubcategory = !subSubcategory || product.subSubcategory.toLowerCase() === subSubcategory.toLowerCase();

      return matchesCategory && matchesSubcategory && matchesSubSubcategory;
    });
    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Sidebar onFilterChange={handleFilterChange} />
        <div className="product-list">
          <h2>Productos</h2>
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} className="product-item">{product.name}</li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products2;
