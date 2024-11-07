import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SimpleLayout } from 'src/layouts/simple';

// ----------------------------------------------------------------------

export function Error() {
  return (
    <SimpleLayout content={{ compact: true }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Oops! Maintenance in Progress 🛠️
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Uh-oh! Our server&apos;s off getting a quick tune-up! 🛠️ Please check back later when
          it&apos;s back in action. Thanks for hanging in there!
        </Typography>

        <Box
          component="img"
          src="/assets/illustrations/maintenance.jpg"
          sx={{
            width: 400,
            height: 'auto',
            my: { xs: 5, sm: 5 },
          }}
        />

        <Button component={RouterLink} href="/" size="large" variant="contained" color="inherit">
          Go to home
        </Button>
      </Container>
    </SimpleLayout>
  );
}
