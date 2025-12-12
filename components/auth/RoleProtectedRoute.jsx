// src/components/auth/RoleProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const RoleProtectedRoute = ({ children, requiredPermission }) => {
  const { isAuthenticated, hasPermission, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login but save the location they were trying to access
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Check if user has the required permission
  if (requiredPermission && !hasPermission(requiredPermission)) {
    // If no permission, redirect to dashboard with a message
    console.log(`User ${user?.email} with role ${user?.role} tried to access ${location.pathname} but has no permission`);
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
};

export default RoleProtectedRoute;