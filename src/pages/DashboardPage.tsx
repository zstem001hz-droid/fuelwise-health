import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            {/* hardcoded data for debugging, will replace*/}
            This week • May 1-7, 2026
          </p>
        </div>

        {/* Stats grid */}
        <div className="">
          {/* hardcoded data for debugging, will replace with dynamic data from backend later. */}
          <StatCard title="Weekly Mileage" value="28.4" subtitle="miles" />
          <StatCard title="Recovery Score" value="7.2" subtitle="out of 10" />
          <StatCard title="Training Load" value="42" subtitle="ACWR score" />
          <StatCard
            title="Injury Risk"
            value="Low"
            subtitle="based on 7-day load"
          />
        </div>
        {/* Analytics section */}
        <div>
          <h2>Recent Activity</h2>
          <div>
            <p>Charts and trends coming soon</p>
          </div>
        </div>
        {/* Activity section */}
        <div>
          <h2>
            Your Activities
          </h2>
          <div>
            <p>Activity feed coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
