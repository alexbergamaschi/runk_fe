import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { stravaApi } from "@/api/strava";

export interface UserInfo {
  id: number;
  firstName?: string;
  name?: string;
  avatar?: string;
  totalTerritories?: number;
  totalConqueredArea?: number;
}

export function useStravaAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);

  // Query per verificare lo stato di autenticazione
  const { data: authStatus, isLoading } = useQuery({
    queryKey: ["auth-status"],
    queryFn: stravaApi.checkAuthStatus,
    retry: false,
  });

  // Query per ottenere info utente (solo se autenticato)
  const { data: userInfo } = useQuery({
    queryKey: ["user-info"],
    queryFn: stravaApi.getUserInfo,
    enabled: authStatus === true,
    retry: false,
  });

  // Mutation per ottenere l'URL di autenticazione
  const stravaAuthMutation = useMutation({
    mutationFn: stravaApi.getAuthUrl,
    onSuccess: (data) => {
      // Redirect automatico dopo aver ottenuto l'URL
      window.location.href = data.url;
    },
    onError: (error) => {
      console.error("Errore nell'ottenere l'URL di autenticazione:", error);
    },
  });

  useEffect(() => {
    setIsAuthenticated(authStatus === true);
    setUser(userInfo || null);
  }, [authStatus, userInfo]);

  const login = () => {
    // Usa la mutation per ottenere l'URL e poi fare il redirect
    stravaAuthMutation.mutate();
  };

  return {
    isAuthenticated,
    user,
    loading: isLoading,
    connecting: stravaAuthMutation.isPending,
    login,
  };
}
