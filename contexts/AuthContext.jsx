// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Define role-based permissions
const rolePermissions = {
  Admin: ['dashboard', 'sales', 'field', 'warehouse', 'manufacturing', 'qc', 'rd', 'finance', 'hr', 'admin', 'executive'],
  Executive: ['dashboard', 'sales', 'field', 'warehouse', 'manufacturing', 'qc', 'rd', 'finance', 'hr', 'executive'],
  SO: ['dashboard', 'sales'],
  MDO: ['dashboard', 'field'],
  RM: ['dashboard', 'sales', 'field'],
  ZM: ['dashboard', 'sales', 'field', 'executive'],
  GM: ['dashboard', 'sales', 'executive'],
  HR: ['dashboard', 'hr'],
  Finance: ['dashboard', 'finance'],
  Warehouse: ['dashboard', 'warehouse'],
  Manufacturing: ['dashboard', 'manufacturing'],
  QC: ['dashboard', 'qc'],
  "R&D": ['dashboard', 'rd'],
  Field: ['dashboard', 'field']
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (credentials) => {
    try {
      console.log('AuthContext: Login attempt with', credentials);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const userRole = credentials.role || 'Admin';
      const userData = {
        email: credentials.email,
        role: userRole,
        name: credentials.email.split('@')[0]
      };
      
      // Update state
      setIsAuthenticated(true);
      setUserRole(userRole);
      setUser(userData);
      setPermissions(rolePermissions[userRole] || []);
      
      // Store in localStorage
      localStorage.setItem('biofactor_user', JSON.stringify({
        ...userData,
        authenticated: true,
        permissions: rolePermissions[userRole] || []
      }));
      
      console.log('AuthContext: Login successful with permissions:', rolePermissions[userRole]);
      return true;
      
    } catch (error) {
      console.error('AuthContext: Login error', error);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    console.log('AuthContext: Logout');
    setIsAuthenticated(false);
    setUserRole('');
    setUser(null);
    setPermissions([]);
    localStorage.removeItem('biofactor_user');
  }, []);

  const hasPermission = useCallback((permission) => {
    // Admin has access to everything
    if (userRole === 'Admin') return true;
    
    // Check if user has the required permission
    return permissions.includes(permission);
  }, [userRole, permissions]);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('biofactor_user');
        
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.authenticated) {
            console.log('AuthContext: Found authenticated user', userData);
            setIsAuthenticated(true);
            setUserRole(userData.role);
            setUser({
              email: userData.email,
              role: userData.role,
              name: userData.name || userData.email.split('@')[0]
            });
            setPermissions(userData.permissions || rolePermissions[userData.role] || []);
          }
        }
      } catch (error) {
        console.error('AuthContext: Error checking auth', error);
        // Clear invalid storage
        localStorage.removeItem('biofactor_user');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const value = {
    isAuthenticated,
    userRole,
    user,
    permissions,
    login,
    logout,
    hasPermission,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};