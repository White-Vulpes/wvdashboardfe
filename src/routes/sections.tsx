import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { Fallback } from 'src/layouts/fallback';
import { useAuth, useRouter } from './hooks';

export const HomePage = lazy(() => import('src/pages/home'));
export const MessagePage = lazy(() => import('src/pages/message'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const SignUpPage = lazy(() => import('src/pages/sign-up'));
export const ImagesPage = lazy(() => import('src/pages/images'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const ErrorPage = lazy(() => import('src/pages/error'));

export function Router() {
  const [data, setData] = useState<any>(null);
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, token] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && routes.length === 0) {
      setLoading(true);
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
          if (result.status) {
            router.push('/maintenance');
          } else {
            setData(result);
            setRoutes(
              result.dashboards
                .map((i: { nav: any; nav_path: any }) => {
                  switch (i.nav_path) {
                    case 'home':
                      return { path: '/', element: <HomePage nav={i.nav} /> };
                    case 'message':
                      return { path: 'message', element: <MessagePage nav={i.nav} /> };
                    case 'images':
                      return { path: 'images', element: <ImagesPage nav={i.nav} /> };
                    default:
                      return null;
                  }
                })
                .filter(Boolean)
            );
          }
        })
        .catch(() => {
          router.push('/maintenance');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isAuthenticated, routes, router, token]);

  const authRoutes = [
    {
      path: '/',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: 'sign-up',
      element: (
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      ),
    },
    {
      path: 'maintenance',
      element: <ErrorPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ];
  const dashboardRoutes = [
    {
      element: (
        <Suspense fallback={<Fallback />}>
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
    {
      path: 'maintenance',
      element: <ErrorPage />,
    },
  ];
  const finalRoutes = isAuthenticated && routes.length > 0 ? dashboardRoutes : authRoutes;
  const elements = useRoutes(finalRoutes);

  return <>{loading ? <Fallback /> : elements}</>;
}
