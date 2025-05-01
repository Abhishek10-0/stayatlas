import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [captcha, setCaptcha] = useState('ABCD1234');

  const sendOTP = () => {
    if (phoneNumber.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }
    setOtpSent(true);
    alert('OTP Sent!');
  };

  const verifyOTP = () => {
    setOtpVerified(true);
  };

  const refreshCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 10).toUpperCase();
    setCaptcha(newCaptcha);
  };

  const signInWithGoogle = () => {
    alert('Google Sign-In triggered');
  };

  return (
    <Box
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <Paper elevation={3} className="relative p-6 w-[380px]">
        {/* Close Icon */}
        <IconButton
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" className="text-center mb-4">
          Login
        </Typography>

        <Box component="form" className="flex flex-col gap-4">
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            variant="filled"
            required
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); 
              if (value.length <= 10) {
                setPhoneNumber(value);
              }
            }}
            inputProps={{ maxLength: 10 }}
          />

          <Button variant="contained" onClick={sendOTP}>
            Send OTP
          </Button>

          {otpSent && (
            <>
              <TextField
                fullWidth
                type="text"
                label="Enter OTP"
                variant="filled"
                required
              />

              <Button variant="contained" color="success" onClick={verifyOTP}>
                Verify OTP
              </Button>
            </>
          )}

          <Box className="bg-gray-100 p-3 rounded">
            <Box className="flex items-center justify-between mb-2">
              <Typography variant="body1" fontFamily="monospace">{captcha}</Typography>
              <Button size="small" onClick={refreshCaptcha}>
                Refresh CAPTCHA
              </Button>
            </Box>
            <TextField
              fullWidth
              type="text"
              label="Enter CAPTCHA"
              variant="filled"
              required
            />
          </Box>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>

          {otpVerified && (
            <Typography className="text-green-600 text-center mt-2">
              ✅ OTP Verified!
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
