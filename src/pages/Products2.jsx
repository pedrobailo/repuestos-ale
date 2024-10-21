// Products2.jsx
import React, { useState, useEffect } from 'react';
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
    // Aplica el filtrado en función de los filtros seleccionados
    const { category, subcategory, subSubcategory } = filters;
    const filtered = productsData.filter((product) => {
      // Verifica si el producto coincide con la categoría, subcategoría y sub-subcategoría seleccionadas
      const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
      const matchesSubcategory = !subcategory || product.subcategory.toLowerCase() === subcategory.toLowerCase();
      const matchesSubSubcategory = !subSubcategory || product.subSubcategory.toLowerCase() === subSubcategory.toLowerCase();

      return matchesCategory && matchesSubcategory && matchesSubSubcategory;
    });
    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    // Actualiza los filtros seleccionados
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar onFilterChange={handleFilterChange} />
        <div style={{ marginLeft: '20px', flexGrow: 1 }}>
          <h2>Productos</h2>
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
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
