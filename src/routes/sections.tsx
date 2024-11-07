import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { DashboardLayout } from 'src/layouts/dashboard';
import { useAuth, useRouter } from './hooks';

export const HomePage = lazy(() => import('src/pages/home'));
export const MessagePage = lazy(() => import('src/pages/message'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const SignUpPage = lazy(() => import('src/pages/sign-up'));
export const ImagesPage = lazy(() => import('src/pages/images'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const ErrorPage = lazy(() => import('src/pages/error'));

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [routes, setRoutes] = useState<any[]>([]);
  const [isAuthenticated, token] = useAuth();
  const router = useRouter();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getDashboard`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        website_id: `${import.meta.env.VITE_WEBSITE_ID}`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message) {
          router.push('sign-in');
        } else {
          setData(result);
          setRoutes(
            result.dashboards.map((i: { nav: any; nav_path: any }) => {
              switch (i.nav_path) {
                case 'home':
                  return { element: <HomePage nav={i.nav} />, index: true };
                case 'message':
                  return { path: 'message', element: <MessagePage nav={i.nav} /> };
                case 'images':
                  return { path: 'images', element: <ImagesPage nav={i.nav} /> };
                default:
                  setError(true);
                  return null;
              }
            })
          );
        }
      })
      .catch((e) => {
        setError(true);
      });
  }, [token, router]);
  return useRoutes(
    !error && data && routes.length > 0
      ? [
          {
            element: (
              <Suspense fallback={renderFallback}>
                <DashboardLayout data={data}>
                  <Outlet />
                </DashboardLayout>
              </Suspense>
            ),
            children: routes,
          },
          {
            path: '404',
            element: <Page404 />,
          },
          {
            path: '*',
            element: <Navigate to="/404" replace />,
          },
        ]
      : [
          {
            element: <ErrorPage />,
            index: true,
          },
        ]
  );
}
