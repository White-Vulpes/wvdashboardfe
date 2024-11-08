import { useState, useCallback } from 'react';
import bcrypt from 'bcryptjs-react';
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

export function SignInView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleSignIn = useCallback(() => {
    setLoading(true);
    setError('');
    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: (document.getElementsByName('email')[0] as HTMLInputElement).value,
        password: (document.getElementsByName('password')[0] as HTMLInputElement).value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setCookie('token', res.token);
          setLoading(false);
          router.push('/');
        } else {
          setError('Wrong Password or Email');
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
        name="email"
        label="Email address"
        placeholder="hello@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <Link variant="body2" alignSelf="flex-end" color="inherit" sx={{ mb: 1.5 }}>
        Forgot password?
      </Link>

      <TextField
        fullWidth
        name="password"
        label="Password"
        placeholder="hello1234"
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
        Sign in
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign in</Typography>
        <Typography variant="body2" color="text.secondary">
          Don’t have an account?
          <Link href="/sign-up" variant="subtitle2" sx={{ ml: 0.5 }}>
            Get started
          </Link>
        </Typography>
      </Box>

      {renderForm}

      <Divider
        sx={{
          my: 3,
          '&::before, &::after': { borderTopStyle: 'dashed' },
        }}
      >
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
