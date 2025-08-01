export interface StravaUser {
  id: number;
  name: string;
  avatar: string;
}

export interface StravaAuthResponse {
  url: string;
}

export interface StravaCallbackResponse {
  message: string;
  user: StravaUser;
}

export interface StravaAuthState {
  isAuthenticated: boolean;
  user: StravaUser | null;
  accessToken?: string;
}

interface Territory {
  id: string;
  name: string;
  area?: number;
  status?: string;
}

interface Activity {
  id: string;
  name: string;
  distance?: number;
  type?: string;
  startDate?: string;
}

export interface SyncResponse {
  message: string;
  syncedData?: {
    territories?: number;
    activities?: number;
    newConquests?: number;
  };
  territories?: Territory[];
  activities?: Activity[];
}
