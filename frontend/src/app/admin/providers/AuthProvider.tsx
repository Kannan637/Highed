'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types/user';
import { getStoredToken, getStoredUser, setSession, clearSession } from '../lib/auth/session';
import { apiLogin, apiLogout } from '../lib/api/auth';
import { LoginCredentials } from '../types/auth';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Rehydrate session
    const storedToken = getStoredToken();
    const storedUser = getStoredUser();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    } else {
      setToken(null);
      setUser(null);
    }
    setIsLoading(false);
  }, []);


  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const res = await apiLogin(credentials);
      if (res.success && res.data) {
        setToken(res.data.token);
        setUser(res.data.user);
        setSession(res.data.token, res.data.user);
        setIsLoading(false);
        return { success: true };
      }
      setIsLoading(false);
      return { success: false, error: res.error || 'Invalid credentials' };
    } catch (err: any) {
      setIsLoading(false);
      return { success: false, error: err.message || 'Login failed' };
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
    } catch {
      // ignore
    } finally {
      clearSession();
      setUser(null);
      setToken(null);
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
