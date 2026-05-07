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
          <h1 className="text-3xl font-bold text-gray-900">Welcome, User!</h1>
          <p className="mt-1 text-sm text-gray-600">
            {/* hardcoded data for debugging, will replace*/}
            This week • May 1-7, 2026
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

         {/* Lower analytics/content area */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <section className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-[360px]">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-500">Charts and trends coming soon</p>
          </section>

          <section className="lg:col-span-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-[360px]">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Your Activities</h2>
            <p className="text-sm text-gray-500">Activity feed coming soon</p>
          </section>
        </div>
      </div>
    </div>
  );
}
