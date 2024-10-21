import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ShoppingCart } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  // Estado para manejar el menú del botón hamburguesa
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Estado para manejar el menú desplegable de "Productos"
  const [productMenuAnchorEl, setProductMenuAnchorEl] = useState(null);
  const productMenuOpen = Boolean(productMenuAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProductMenuOpen = (event) => {
    setProductMenuAnchorEl(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setProductMenuAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#039fe0' }}>
        <Toolbar>
          {/* Botón hamburguesa - solo en resoluciones menores a 600px */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }} // Mostrar solo en pantallas XS
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Menú desplegable del botón hamburguesa */}
          <Menu
  anchorEl={anchorEl}
  open={open}
  onClose={handleMenuClose}
  sx={{ display: { xs: 'block', sm: 'none' } }}
>
            <MenuItem component={Link} to="/home" onClick={handleMenuClose}>
              <HomeIcon sx={{ marginRight: 1 }} />
              Inicio
            </MenuItem>
            <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
              <InventoryIcon sx={{ marginRight: 1 }} />
              Productos
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
              <ContactMailIcon sx={{ marginRight: 1 }} />
              Contacto
            </MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
              <LoginIcon sx={{ marginRight: 1 }} />
              Iniciar Sesión
            </MenuItem>
            <MenuItem component={Link} to="/carrito" onClick={handleMenuClose}>
              <ShoppingCart sx={{ marginRight: 1 }} />
              Carrito
            </MenuItem>
          </Menu>


          {/* Título o logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>

          {/* Secciones (Links) - solo en resoluciones mayores a 600px */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button component={Link} to="/home" color="inherit" startIcon={<HomeIcon />}>
              Inicio
            </Button>
            <Button color="inherit" onClick={handleProductMenuOpen} startIcon={<InventoryIcon />}>
              Productos
            </Button>
            <Button component={Link} to="/contact" color="inherit" startIcon={<ContactMailIcon />}>
              Contacto
            </Button>
            <Button component={Link} to="/login" color="inherit" startIcon={<LoginIcon />}>
              Iniciar Sesión
            </Button>
            <Button component={Link} to="/carrito" color="inherit" startIcon={<ShoppingCart />}>
              Carrito
            </Button>
            <Button component={Link} to="/sidebar" color="inherit" >
              Sidebar
            </Button>
          </Box>

          {/* Menú desplegable de "Productos" */}
          <Menu
            anchorEl={productMenuAnchorEl}
            open={productMenuOpen}
            onClose={handleProductMenuClose}
          >
            <MenuItem component={Link} to="/fiat" onClick={handleProductMenuClose}>
              <img src="/fiat.png" alt="Fiat Logo" style={{ width: '20px', marginRight: '8px' }} />
              Fiat
            </MenuItem>

            <MenuItem component={Link} to="/volkswagen" onClick={handleProductMenuClose}>
            <img src="/volkswagen.png" alt="volkswagen Logo" style={{ width: '20px', marginRight: '8px' }} />
              Volkswagen
            </MenuItem>
            <MenuItem component={Link} to="/products" onClick={handleProductMenuClose}>
              Ver todos
            </MenuItem>
          </Menu>

          {/* Buscador */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
