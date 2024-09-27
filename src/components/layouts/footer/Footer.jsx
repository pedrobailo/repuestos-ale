// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, IconButton, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#039fe0', color: 'white', padding: '20px 0' }}>
      <Grid container spacing={3} sx={{ maxWidth: '100%', margin: '0 auto' }}>
        {/* Redes sociales */}
        <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Síguenos</Typography>
          <Box>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Datos de ecommerce */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Datos de la tienda</Typography>
          <Typography variant="body2">Nombre de la tienda</Typography>
          <Typography variant="body2">Teléfono: +123 456 789</Typography>
          <Typography variant="body2">Email: info@tienda.com</Typography>
        </Grid>

        {/* Ubicación */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Ubicación</Typography>
          <Typography variant="body2">Dirección de la tienda</Typography>
          <Typography variant="body2">Ciudad, País</Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2">© 2024 Nombre de la tienda. Todos los derechos reservados.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
