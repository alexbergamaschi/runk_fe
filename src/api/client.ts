const BACKEND_SERVER =
  process.env.NEXT_PUBLIC_BACKEND_SERVER || "http://localhost:8090";

export class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = BACKEND_SERVER;
    console.log("🔧 ApiClient inizializzato:", {
      baseUrl: this.baseUrl,
      env: process.env.NEXT_PUBLIC_BACKEND_SERVER,
    });
  }

  async get<T>(endpoint: string, withCredentials = false): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    console.log(
      "📡 GET Request:",
      url,
      withCredentials ? "(with credentials)" : "(no credentials)"
    );

    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      mode: "cors",
    };

    // Solo includi credentials se necessario
    if (withCredentials) {
      options.credentials = "include";
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    withCredentials = true
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    console.log(
      "📡 POST Request:",
      url,
      withCredentials ? "(with credentials)" : "(no credentials)"
    );

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      mode: "cors",
      body: data ? JSON.stringify(data) : undefined,
    };

    // Solo includi credentials se necessario
    if (withCredentials) {
      options.credentials = "include";
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
