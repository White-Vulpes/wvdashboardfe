import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useCookies } from 'react-cookie';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';

export function SignUpView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleSignIn = useCallback(() => {
    setLoading(true);
    setError('');
    fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: (document.getElementsByName('name')[0] as HTMLInputElement).value,
        email: (document.getElementsByName('email')[0] as HTMLInputElement).value,
        password: (document.getElementsByName('password')[0] as HTMLInputElement).value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setLoading(false);
          setCookie('token', res.token);
          router.push('/');
        } else {
          setError('Already Registered');
          setLoading(false);
        }
      })
      .catch((e) => {
        setError('Error! Try Again Later');
        setLoading(false);
      });
  }, [router, setCookie]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        fullWidth
        name="name"
        label="Name"
        placeholder="Enter Your Name"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        name="email"
        label="Email address"
        placeholder="Email Address"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        placeholder="Password"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        name="password"
        label="Retype Password"
        placeholder="Enter Password Again"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
      <Box gap={0.5} display="flex" flexDirection="column" sx={{ mb: 2 }}>
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      </Box>
      <LoadingButton
        fullWidth
        loading={loading}
        size="large"
        type="submit"
        color={error !== '' ? 'error' : 'inherit'}
        variant="contained"
        onClick={handleSignIn}
      >
        Sign Up
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign Up</Typography>
        <Typography variant="body2" color="text.secondary">
          It only takes a minute to get started.
        </Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          OR
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </>
  );
}
