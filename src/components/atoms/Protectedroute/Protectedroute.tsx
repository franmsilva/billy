import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';

import { useAuth } from '@src/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
