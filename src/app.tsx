import 'src/global.css';
import { Router } from 'src/routes/sections';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { ThemeProvider } from 'src/theme/theme-provider';
import { CookiesProvider } from 'react-cookie';
import { SnackbarProvider } from 'notistack';
import { useAuth } from './routes/hooks';
import ImageUploadItem from './sections/images/image-upload-item';

export default function App() {
  useScrollToTop();
  const [isAuthenticated, token] = useAuth();
  return (
    <CookiesProvider>
      <SnackbarProvider
        Components={{
          uploadItems: ImageUploadItem,
        }}
      >
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </SnackbarProvider>
    </CookiesProvider>
  );
}
