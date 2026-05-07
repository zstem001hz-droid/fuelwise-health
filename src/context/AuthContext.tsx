import { createContext, useContext, useEffect, useState } from "react";

// --- Types ---
interface Athlete {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
  city: string;
  state: string;
  country: string;
}

interface AuthState {
  accessToken: string | null;
  athlete: Athlete | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: () => void;
  logout: () => void;
}

// --- Context Creation ---
const AuthContext = createContext<AuthContextType | null>(null);

// --- Provider Component ---
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    athlete: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // --- Check for existing token on app load ---
  useEffect(() => {
    const token = localStorage.getItem("strava_access_token");
    const athlete = localStorage.getItem("strava_athlete");

    if (token && athlete) {
      setAuthState({
        accessToken: token,
        athlete: JSON.parse(athlete),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  // --- Handle Strava OAuth Callback ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      const exchangeToken = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/strava/callback?code=${code}`,
          );
          const data = await response.json();

          if (data.access_token) {
            localStorage.setItem("strava_access_token", data.access_token);
            localStorage.setItem(
              "strava_athlete",
              JSON.stringify(data.athlete),
            );

            setAuthState({
              accessToken: data.access_token,
              athlete: data.athlete,
              isAuthenticated: true,
              isLoading: false,
            });

            window.history.replaceState({}, "", "/dashboard");
          }
        } catch (error) {
          console.error("Token exchange failed:", error);
          setAuthState((prev) => ({ ...prev, isLoading: false }));
        }
      };

      exchangeToken();
    }
  }, []);

  // --- Login — redirect to Strava ---
  const login = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/strava/auth`,
      );
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Failed to get auth URL:", error);
    }
  };

  // ---Logout - Clear token ---
  const logout = () => {
    localStorage.removeItem("strava_access_token");
    localStorage.removeItem("strava_athlete");
    setAuthState({
      accessToken: null,
      athlete: null,
      isAuthenticated: false,
      isLoading: false,
    });
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// --- Custom Hook ---
// Use this in any component that needs auth state
// Example: const { isAuthenticated, athlete, login, logout } = useAuth()
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
