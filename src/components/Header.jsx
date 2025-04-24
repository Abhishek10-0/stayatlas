import React, { useState } from 'react';
import logo from '../assets/stay.PNG';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from './loginForm';
import PropertyRequestForm from './listform';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); 

  
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleListingClick = () => {
    setIsFormOpen(!isFormOpen); 
  };

  
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseListingForm = () => {
    setShowListingForm(false);
  };


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null); 
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0e3226', boxShadow: 3, zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 } }}>
          <Box component="img" src={logo} alt="StayAtlas Logo" sx={{ height: 40 }} />
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton onClick={handleMenuClick} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button href="#" sx={navLinkStyle}>Home</Button>
          <Button href="../../Explore/Html/explore.html" sx={navLinkStyle}>Explore</Button>
          <Button href="../../EXCLUSIVE/Html/exclusive.html" sx={navLinkStyle}>Exclusive</Button>

          {/* Button for Property Listing Form */}
          <Button onClick={handleListingClick} sx={navLinkStyle}>
            List Your Property
          </Button>

          <Button onClick={handleLoginClick} variant="contained" sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
            Login
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Explore</MenuItem>
        <MenuItem onClick={handleMenuClose}>Exclusive</MenuItem>
        <MenuItem onClick={handleListingClick}>List Your Property</MenuItem>
        <MenuItem onClick={handleLoginClick}>Login</MenuItem>
      </Menu>
      <PropertyRequestForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
      
    </AppBar>
  );
};

const navLinkStyle = {
  color: 'white',
  fontSize: '0.875rem',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    color: '#90ee90',
  },
};

export default Header;
