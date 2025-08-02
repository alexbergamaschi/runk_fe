"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { stravaApi } from "@/api/strava";

export interface UserInfo {
  id: number;
  firstName?: string;
  name?: string;
  avatar?: string;
  totalTerritories?: number;
  totalConqueredArea?: number;
  conquests?: number;
  defenses?: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserInfo | null;
  loading: boolean;
  connecting: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);

  // Funzione per verificare i cookie di autenticazione
  const checkCookies = () => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
    
    console.log("🍪 AuthProvider - Cookies letti:", cookies);
    return cookies.authenticated === 'true' && cookies.userId;
  };

  // Query per verificare lo stato di autenticazione
  const { data: authStatus, isLoading, refetch: refetchAuth } = useQuery({
    queryKey: ["auth-status"],
    queryFn: stravaApi.checkAuthStatus,
    retry: false,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  // Query per ottenere info utente (solo se autenticato)
  const { data: userInfo } = useQuery({
    queryKey: ["user-info"],
    queryFn: stravaApi.getUserInfo,
    enabled: authStatus === true,
    retry: false,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  // Mutation per ottenere l'URL di autenticazione
  const stravaAuthMutation = useMutation({
    mutationFn: stravaApi.getAuthUrl,
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      console.error("Errore nell'ottenere l'URL di autenticazione:", error);
    },
  });

  // Effetto per gestire l'autenticazione
  useEffect(() => {
    const hasCookies = checkCookies();
    console.log("🔍 AuthProvider - Verifica autenticazione:", { 
      hasCookies, 
      authStatus, 
      userInfo,
      currentAuth: isAuthenticated 
    });
    
    if (hasCookies && authStatus === true) {
      console.log("✅ AuthProvider - Imposto autenticato");
      setIsAuthenticated(true);
      setUser(userInfo || null);
    } else if (hasCookies && authStatus === undefined && !isAuthenticated) {
      // Se abbiamo i cookie ma non abbiamo ancora verificato l'auth, prova a refetch
      console.log("🔄 AuthProvider - Refetch auth status...");
      refetchAuth();
    } else if (!hasCookies) {
      console.log("❌ AuthProvider - Nessun cookie, non autenticato");
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [authStatus, userInfo, refetchAuth, isAuthenticated]);

  const login = () => {
    console.log("🚀 AuthProvider - Avvio login");
    stravaAuthMutation.mutate();
  };

  const logout = () => {
    console.log("🚪 AuthProvider - Logout");
    // Rimuovi i cookie di autenticazione
    document.cookie = "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Reset dello stato locale
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading: isLoading,
    connecting: stravaAuthMutation.isPending,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve essere usato all'interno di AuthProvider");
  }
  return context;
} 