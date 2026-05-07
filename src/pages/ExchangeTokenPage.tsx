import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ExchangeTokenPage() {
  const { isAuthenticated, isLoading, completeLogin } = useAuth();
  const navigate = useNavigate();
  const hasExchangedRef = useRef(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    // TODO: Backend should enforce OAuth state validation for CSRF protection.
    if (!code) {
      navigate("/", { replace: true });
      return;
    }

    // Prevent duplicate exchange calls in StrictMode development re-renders.
    if (hasExchangedRef.current) {
      return;
    }
    hasExchangedRef.current = true;

    let isActive = true;

    const exchangeToken = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/strava/callback?code=${code}`,
        );

        const data = await response.json();

        if (!isActive) {
          return;
        }

        if (data.access_token && data.athlete) {
          completeLogin(data.access_token, data.athlete);
          navigate("/dashboard", { replace: true });
          return;
        }

        navigate("/", { replace: true });
      } catch (error) {
        console.error("Token exchange failed:", error);

        if (isActive) {
          navigate("/", { replace: true });
        }
      }
    };

    exchangeToken();

    return () => {
      isActive = false;
    };
  }, [completeLogin, isAuthenticated, isLoading, navigate]);

  return (
    <div>
      <p>Connecting to Strava...</p>
    </div>
  );
}

export default ExchangeTokenPage;