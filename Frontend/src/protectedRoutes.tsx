import React from 'react';

interface ProtectedRouteInterface {
    children: React.ReactNode;
  }
  
  
export const ProtectedRoute = ({ children }: ProtectedRouteInterface) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      window.location.href = '/login';
      return null;
    }
    return <>{children}</>;
}
  