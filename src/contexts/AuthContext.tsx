import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types';
import { apiService } from '../services/api';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        setState({
          user,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
        setState({
          user: null,
          isAuthenticated: false,
          loading: false,
        });
      }
    } else {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      // Pour la démo, simuler une connexion réussie
      const mockUser: User = {
        id: '1',
        email,
        name: 'Amadou Diallo',
        role: 'manager',
      };
      
      // En production, utiliser apiService.login(email, password)
      localStorage.setItem('access_token', 'mock_token_123');
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      
      setState({
        user: mockUser,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      // En production, utiliser l'API pour l'inscription
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: userData.role || 'client',
      };
      
      localStorage.setItem('access_token', 'mock_token_123');
      localStorage.setItem('user_data', JSON.stringify(newUser));
      
      setState({
        user: newUser,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
    setState({
      user: null,
      isAuthenticated: false,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout,
      register,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}