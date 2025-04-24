import React, { useState } from 'react';
import logo from '../assets/stay.PNG';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginForm from './loginForm';
import PropertyRequestForm from './listform';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showListingForm, setShowListingForm] = useState(false);

  // Handlers to show forms
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleListingClick = () => {
    setShowListingForm((prevState) => !prevState); // Toggle the listing form
  };

  // Handlers to close forms
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseListingForm = () => {
    setShowListingForm(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0e3226', boxShadow: 3, zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 } }}>
          <Box component="img" src={logo} alt="StayAtlas Logo" sx={{ height: 40 }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button href="#" sx={navLinkStyle}>Home</Button>
          <Button href="../../Explore/Html/explore.html" sx={navLinkStyle}>Explore</Button>
          <Button href="../../EXCLUSIVE/Html/exclusive.html" sx={navLinkStyle}>Exclusive</Button>

          {/* Toggle property listing form with the same button text */}
          <Button
            onClick={handleListingClick}
            sx={navLinkStyle}
          >
            {showListingForm ? 'Property Listing Form' : 'List Your Property'}
          </Button>

          <Button
            onClick={handleLoginClick}
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>

      {/* Rendering the forms based on their respective state */}
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
      {showListingForm && <PropertyRequestForm onClose={handleCloseListingForm} />}
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
