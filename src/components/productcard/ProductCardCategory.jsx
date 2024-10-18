import './ProductCard.css';
import React, { useState } from 'react';
import { Modal, Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const ProductCardCategory = ({ image, nombre, description, categories }) => {
  const [open, setOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product" />
      <div className="product-info">
        <h3 className="product-name">{nombre}</h3>
        <p className="product-description">{description}</p>
      </div>
      <button onClick={handleOpen} className="add-to-cart-button">
        Ver categoría
      </button>

      {/* Modal con Material-UI */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h2>Categorías para {nombre}</h2>
          <List>
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={category.link}>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={handleClose} variant="outlined" fullWidth>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductCardCategory;
