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

  // Query per verificare lo stato di autenticazione e ottenere info utente
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => {
      try {
        return await stravaApi.getUserInfo();
      } catch (error: unknown) {
        // 401 significa semplicemente "non autenticato" - non è un errore da mostrare
        if ((error as Error)?.message?.includes("401")) {
          return null;
        }
        // Solo altri errori sono veri problemi
        throw error;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minuti
  });

  // Mutation per ottenere l'URL di autenticazione
  const stravaAuthMutation = useMutation({
    mutationFn: stravaApi.getAuthUrl,
    onSuccess: (data) => {
      console.log("✅ URL di autenticazione ottenuto:", data);

      if (data && data.url) {
        console.log("🔄 Apertura popup Strava:", data.url);

        // Apri Strava in un popup invece di redirect completo
        const popup = window.open(
          data.url,
          "strava-auth",
          "width=600,height=700,scrollbars=yes,resizable=yes,status=yes,location=yes,toolbar=no,menubar=no"
        );

        // Ascolta per il messaggio dal popup quando l'auth è completata
        const handleMessage = (event: MessageEvent) => {
          if (event.origin !== window.location.origin) return;

          if (event.data.type === "STRAVA_AUTH_SUCCESS") {
            console.log(
              "✅ Autenticazione Strava completata:",
              event.data.user
            );
            popup?.close();
            window.removeEventListener("message", handleMessage);

            // Aggiorna lo stato dell'utente
            setUser(event.data.user);
            setIsAuthenticated(true);

            // Ricarica i dati utente
            window.location.reload();
          } else if (event.data.type === "STRAVA_AUTH_ERROR") {
            console.error("❌ Errore autenticazione Strava:", event.data.error);
            popup?.close();
            window.removeEventListener("message", handleMessage);
            alert(`Errore durante l'autenticazione: ${event.data.error}`);
          }
        };

        window.addEventListener("message", handleMessage);

        // Auto-chiudi il popup dopo 2 minuti se non c'è risposta
        setTimeout(() => {
          if (popup && !popup.closed) {
            popup.close();
            window.removeEventListener("message", handleMessage);
            console.log("⏰ Popup chiuso per timeout");
          }
        }, 120000);
      } else {
        console.error("❌ URL mancante nella risposta:", data);
      }
    },
    onError: (error) => {
      console.error("❌ Errore nell'ottenere l'URL di autenticazione:", error);
      alert("Errore durante la connessione a Strava. Riprova più tardi.");
    },
  });

  useEffect(() => {
    setIsAuthenticated(!!userInfo);
    setUser(userInfo || null);
  }, [userInfo]);

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
