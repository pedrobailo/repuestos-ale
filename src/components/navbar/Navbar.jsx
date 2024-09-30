import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

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
            <MenuItem onClick={handleMenuClose}>Inicio</MenuItem>
            <MenuItem onClick={handleMenuClose}>Productos</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contacto</MenuItem>
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
            <Button color="inherit">Inicio</Button>
            <Button color="inherit" onClick={handleProductMenuOpen}>
              Productos
            </Button>
            <Button color="inherit">Contacto</Button>
          </Box>

          {/* Menú desplegable de "Productos" */}
          <Menu
            anchorEl={productMenuAnchorEl}
            open={productMenuOpen}
            onClose={handleProductMenuClose}
          >
            <MenuItem onClick={handleProductMenuClose}>Fiat</MenuItem>
            <MenuItem onClick={handleProductMenuClose}>Volkswagen</MenuItem>
            <MenuItem onClick={handleProductMenuClose}>Ver todos</MenuItem>
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
