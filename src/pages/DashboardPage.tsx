// Page created for AuthContext Testing and Verification
import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { athlete, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {athlete?.firstname}! 👋</h1>
      <p>You are connected to Strava</p>
      <button onClick={logout}>Disconnect Strava</button>
    </div>
  );
}

export default DashboardPage;
