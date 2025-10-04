import {
  LoginData,
  RegisterData,
  AuthResponse,
  Experience,
  ApiResponse,
  AuthData,
  Question,
  UserProfile,
} from "../types";

// Configurazione base API
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000/api";

// Utility per gestire le richieste
const handleResponse = async <T>(response: Response): Promise<T> => {
  const body = await response.json();
  if (!response.ok) {
    const err = new Error(body?.error?.details || "a");
    (err as any).code = body?.error?.code || "HTTP_ERROR";
    throw err;
  }
  return body;
};

// Ottieni il token dal localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

// Headers comuni
const getHeaders = (includeAuth: boolean = false): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};

// API Auth
export const authApi = {
  login: async (data: LoginData): Promise<ApiResponse<AuthData>> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse<ApiResponse<AuthData>>(response);
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse<AuthResponse>(response);
  },

  logout: (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  wakeUp: async (): Promise<void> => {
    try {
      console.log("☕ Svegliando il backend...");
      await fetch(`${API_BASE_URL}/auth/wakeUp`, {
        method: "GET",
        headers: getHeaders(),
      });
      console.log("✅ Backend svegliato!");
    } catch (error) {
      console.warn("⚠️ WakeUp failed (non-blocking):", error);
    }
  },
};

// API Experiences
export const experiencesApi = {
  getAll: async (): Promise<ApiResponse<Experience[]>> => {
    const response = await fetch(`${API_BASE_URL}/article`, {
      method: "GET",
      headers: getHeaders(false), // Cambia a true se richiede autenticazione
    });
    return handleResponse<ApiResponse<Experience[]>>(response);
  },

  getById: async (id: string): Promise<Experience> => {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
      method: "GET",
      headers: getHeaders(true),
    });
    return handleResponse<Experience>(response);
  },

  create: async (data: Partial<Experience>): Promise<Experience> => {
    const response = await fetch(`${API_BASE_URL}/experiences`, {
      method: "POST",
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return handleResponse<Experience>(response);
  },

  update: async (
    id: string,
    data: Partial<Experience>
  ): Promise<Experience> => {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
      method: "PUT",
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return handleResponse<Experience>(response);
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
      method: "DELETE",
      headers: getHeaders(true),
    });
    return handleResponse<void>(response);
  },
};

// API Contact
export const contactApi = {
  send: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse<{ success: boolean; message: string }>(response);
  },
};

// API Questions
export const questionApi = {
  getAll: async (): Promise<ApiResponse<Question[]>> => {
    const response = await fetch(`${API_BASE_URL}/question`, {
      method: "GET",
      headers: getHeaders(false),
    });
    return handleResponse<ApiResponse<Question[]>>(response);
  },
};

// API User
export const userApi = {
  getUser: async (): Promise<ApiResponse<UserProfile>> => {
    // Recupera l'oggetto utente dal localStorage
    const userJson = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!userJson) throw new Error("Utente non loggato");

    const user = JSON.parse(userJson);
    const userId = user._id;

    if (!token || !userId) throw new Error("Utente non loggato");

    const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        ...getHeaders(false),
        Authorization: `Bearer ${token}`,
      },
    });

    return handleResponse<ApiResponse<UserProfile>>(response);
  },
};

export default {
  auth: authApi,
  experiences: experiencesApi,
  contact: contactApi,
  questions: questionApi,
  user: userApi,
};
