import React from "react";
import './ProductCard.css';

const ProductCard = ({ image, price, description }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product" />
      <div className="product-info">
        <h5 className="product-price">${price}</h5>
        <p className="product-description">{description}</p>
      </div>
      <button className="add-to-cart-button">Agregar al carrito</button>
      <button className="add-to-cart-button">Comprar</button>
    </div>
  );
};

export default ProductCard;

