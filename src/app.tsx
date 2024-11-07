import 'src/global.css';
import { Router, SignUpPage } from 'src/routes/sections';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { ThemeProvider } from 'src/theme/theme-provider';
import { CookiesProvider } from 'react-cookie';
import { SnackbarProvider } from 'notistack';
import { Navigate, useRoutes } from 'react-router-dom';
import SignInPage from 'src/pages/sign-in';
import { AuthLayout } from './layouts/auth';
import { useAuth } from './routes/hooks';
import ImageUploadItem from './sections/images/image-upload-item';

function AuthRoute() {
  return useRoutes([
    {
      path: '*',
      element: <Navigate to="/sign-in" replace />,
    },
    {
      path: '/sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: '/sign-up',
      element: (
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      ),
    },
  ]);
}

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
        <ThemeProvider>{isAuthenticated ? <Router /> : <AuthRoute />}</ThemeProvider>
      </SnackbarProvider>
    </CookiesProvider>
  );
}
