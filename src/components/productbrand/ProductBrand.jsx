import React from 'react'
import './ProductBrand.css';

const ProductBrand = ({ image, nombre, description }) => {
    return (
      <div className="product-card">
        <img className="product-image" src={image} alt="product" />
        <div className="product-info">
          <h3 className="product-name">{nombre}</h3>
          <p className="product-description">{description}</p>
        </div>
        <button className="add-to-cart-button">Ver Marca</button>
        
      </div>
    );
  };
  
  export default ProductBrand;
