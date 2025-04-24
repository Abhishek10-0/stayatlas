
import logo from '../assets/stay.PNG';
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginForm from './loginForm';

const header = () => {
  // Step 1: State for login form
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Step 2: Button click handlers
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0e3226', boxShadow: 3, zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>

        {/* Logo */}
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 } }}>
          <Box component="img" src={logo} alt="StayAtlas Logo" sx={{ height: 40 }} />
        </Box>

        {/* Navigation Buttons (Always visible) */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button href="#" sx={navLinkStyle}>
            Home
          </Button>
          <Button href="../../Explore/Html/explore.html" sx={navLinkStyle}>
            Explore
          </Button>
          <Button href="../../EXCLUSIVE/Html/exclusive.html" sx={navLinkStyle}>
            Exclusive
          </Button>
          <Button href="#" id="property-btn" sx={navLinkStyle}>
            List Your Property
          </Button>
          <Button onClick={handleLoginClick} variant="contained"className='bg-white'> 
            Login
          </Button>
          {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}

        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Reusable styles
const navLinkStyle = {
  color: 'white',
  fontSize: '0.875rem',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': { color: '#90ee90' },
};

const loginButtonStyle = {
  px: 2,
  py: 1,
  bgcolor: 'white',
  color: '#0e3226',
  fontSize: '0.875rem',
  fontWeight: 600,
  borderRadius: 1,
  textTransform: 'none',
  '&:hover': { bgcolor: '#f5f5f5' },
};

export default header;