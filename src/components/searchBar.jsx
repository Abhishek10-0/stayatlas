import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Popover,
  Typography,
  IconButton,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Form = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestAnchorEl, setGuestAnchorEl] = useState(null);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const handleGuestClick = (event) => {
    setGuestAnchorEl(event.currentTarget);
  };

  const handleGuestClose = () => {
    setGuestAnchorEl(null);
  };

  const updateGuestCount = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const open = Boolean(guestAnchorEl);
  const id = open ? 'guest-popover' : undefined;

  return (
    <Box
      sx={{
        p: 2,
        pt: 2, 
        border: 'none',
        borderRadius: 2,
        maxWidth:'auto',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
    >
      <TextField
        fullWidth
        label="Location/Villas/Landmark"
        placeholder="Where to?"
        variant="filled"
      />
      <TextField
        label="Check-in"
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        variant="filled"
      />
      <TextField
        label="Check-out"
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        variant="filled"
      />
      <TextField
        label="Guests"
        value={`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Room`}
        onClick={handleGuestClick}
        InputProps={{ readOnly: true }}
        fullWidth
        variant="filled"
      />
      <Popover
        id={id}
        open={open}
        anchorEl={guestAnchorEl}
        onClose={handleGuestClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2, minWidth: 250 }}>
          {['adults', 'children', 'rooms'].map((type) => (
            <Box key={type} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => updateGuestCount(type, -1)}><RemoveIcon /></IconButton>
                <Typography>{guests[type]}</Typography>
                <IconButton onClick={() => updateGuestCount(type, 1)}><AddIcon /></IconButton>
              </Box>
            </Box>
          ))}
          <Button variant="contained" fullWidth onClick={handleGuestClose}>Apply</Button>
        </Box>
      </Popover>
      <Button variant="contained" color="primary" fullWidth>SEARCH</Button>
    </Box>
  );
};

export default Form;
