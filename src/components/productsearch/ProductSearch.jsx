import React, { useState } from 'react';
import products from '../../data/products';
import '../productsearch/ProductSearch.css'

const ProductSearch = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const brands = Object.keys(products);
  const categories = selectedBrand ? Object.keys(products[selectedBrand]) : [];
  const productList = selectedBrand && selectedCategory ? products[selectedBrand][selectedCategory] : [];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedCategory(''); // Reset category when brand changes
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1 className='title-productsearch'>Buscador Avanzado</h1>
      
      <select onChange={handleBrandChange} value={selectedBrand}>
        <option value="">Selecciona una marca</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>

      <select onChange={handleCategoryChange} value={selectedCategory} disabled={!selectedBrand}>
        <option value="">Selecciona una categoría</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <div className='resultado-productsearch'>
        <h3>Productos</h3>
            <ul>
                {productList.length > 0 ? (
                productList.map((product, index) => (
                    <li key={index}>{product}</li>
                ))
                ) : (
                <li>No hay productos disponibles.</li>
                )}
            </ul>
      </div>
    </div>
  );
};

export default ProductSearch;
