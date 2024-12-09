import React, { useState, useEffect } from 'react';
import '../components/layouts/Estilos/Products2.css'; // Importa el CSS
import Sidebar from '../components/layouts/sidebar/Sidebar';
import Header from '../components/layouts/header/Header';
import Footer from '../components/layouts/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import productsData from '../data/products';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Products2 = ({ addToCart }) => { // Recibir addToCart como prop
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    subSubcategory: '',
  });

  // Filtrar productos según los filtros seleccionados
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
      <Navbar /> {/* No necesitas pasar cart aquí, ya que el carrito está en App.jsx */}
      <div className="container">
        <Sidebar onFilterChange={handleFilterChange} />
        <div className="product-list">
          <h2 className="product-title">Productos</h2>
          {filteredProducts.length > 0 ? (
            <div className="product-grid2">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="product-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image || 'ruta/a/imagen_por_defecto.jpg'}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body1">{`$${product.price}`}</Typography>
                    <div className="card-buttons">
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => addToCart(product)} // Usar addToCart desde las props
                      >
                        Agregar al carrito
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        onClick={() => console.log(`Ver detalles del producto: ${product.name}`)}
                      >
                        Ver producto
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="product-title">No se encontraron productos.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products2;
