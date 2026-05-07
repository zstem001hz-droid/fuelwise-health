import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";

type DashboardStat = {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
};

function getDashboardStats(): DashboardStat[] {
  // Replace this static array with mapped Strava/API response later.
  return [
    {
      id: "weekly-mileage",
      title: "Weekly Mileage",
      value: "28.4",
      subtitle: "miles",
    },
    {
      id: "recovery-score",
      title: "Recovery Score",
      value: "7.2",
      subtitle: "out of 10",
    },
    {
      id: "training-load",
      title: "Training Load",
      value: "42",
      subtitle: "ACWR score",
    },
    {
      id: "injury-risk",
      title: "Injury Risk",
      value: "Low",
      subtitle: "based on 7-day load",
    },
  ];
}

export default function DashboardPage() {
  const statsData = getDashboardStats();

  return (
    <div className="flex min-h-screen">
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
        {/* Map through the statsData array and render a StatCard for each statistic. The grid layout will adjust based on screen size, showing 1 column on small screens, 2 columns on medium screens, and 4 columns on large screens. */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
            />
          ))}
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
