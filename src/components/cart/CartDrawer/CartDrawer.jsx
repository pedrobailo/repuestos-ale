import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartDrawer.css';

const CartDrawer = ({ cart = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={toggleDrawer}
        color="inherit"
        startIcon={<ShoppingCartIcon />}
        className="cart-button"
      >
        CARRITO
      </Button>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Box className="cart-drawer" role="presentation">
          <h1 className="cart-header">
            Carrito de Compras
          </h1>

          <List className="cart-list">
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <ListItem key={index} className="cart-item">
                  <ListItemText
                    primary={product.name}
                    secondary={`Precio: $${product.price}`}
                  />
                </ListItem>
              ))
            ) : (
              <h3 className="cart-empty">
                El carrito está vacío.
              </h3>
            )}
          </List>

          {cart.length > 0 && (
            <div className="cart-total-section">
              <Typography className="cart-total">
                Total: ${cart.reduce((acc, product) => acc + product.price, 0)}
              </Typography>
              <button className="checkout-button">
                Checkout
              </button>
            </div>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;

