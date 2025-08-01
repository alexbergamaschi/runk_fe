import { apiClient } from "./client";
import { SyncResponse } from "@/types/strava";

interface UserInfo {
  id: number;
  firstName?: string;
  name?: string;
  avatar?: string;
  totalTerritories?: number;
  totalConqueredArea?: number;
}

export const stravaApi = {
  // Endpoint per ottenere URL di autorizzazione (torna al fetch per UI migliore)
  getAuthUrl: async (): Promise<{ url: string }> => {
    return apiClient.get<{ url: string }>(`/auth/strava`, false); // NO credentials per questo endpoint
  },

  // Verifica stato autenticazione
  checkAuthStatus: async (): Promise<boolean> => {
    try {
      // Prima prova senza credentials per evitare CORS
      await apiClient.get<{ status: string }>(`/health`, false);
      return true;
    } catch {
      return false;
    }
  },

  // Sincronizzazione forzata dei territori (CON credentials - come da documentazione)
  syncTerritories: async (): Promise<SyncResponse> => {
    return apiClient.post<SyncResponse>(
      `/api/territories/sync/force`,
      undefined,
      true
    );
  },

  // Ottieni informazioni utente
  getUserInfo: async (): Promise<UserInfo> => {
    return apiClient.get<UserInfo>(`/user`, true);
  },
};
