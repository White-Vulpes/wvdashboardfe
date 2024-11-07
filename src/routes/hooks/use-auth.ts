import { useRef } from 'react';
import { useCookies } from 'react-cookie';
import { isExpired } from 'react-jwt';

export function useAuth() {
  const [cookies] = useCookies(['token']);
  const isAuthenticated = useRef(false);
  if (!cookies.token) isAuthenticated.current = false;
  else isAuthenticated.current = !isExpired(cookies.token);
  return [isAuthenticated.current, cookies.token];
}
