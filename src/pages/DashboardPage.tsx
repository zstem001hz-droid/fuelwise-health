import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";

type DashboardStat = {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
};

type ActivityFeedItem = {
  id: string;
  name: string;
  meta: string;
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

function getActivityFeedItems(): ActivityFeedItem[] {
  // Replace this static array with mapped Strava/API response later.
  return [
    {
      id: "activity-1",
      name: "Morning Tempo Run",
      meta: "5.2 mi • May 7 • 7:42 /mi",
    },
    {
      id: "activity-2",
      name: "Recovery Jog",
      meta: "3.1 mi • May 6 • Easy effort",
    },
    {
      id: "activity-3",
      name: "Intervals Session",
      meta: "6 x 800m • May 5 • High intensity",
    },
    {
      id: "activity-4",
      name: "Long Run",
      meta: "10.4 mi • May 4 • Steady pace",
    },
  ];
}

export default function DashboardPage() {
  const statsData = getDashboardStats();
  const activityFeedItems = getActivityFeedItems();

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
          <section className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-105">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Training Trends
              </h2>
              <span className="text-xs font-medium text-gray-500">
                Last 4 weeks
              </span>
            </div>

            <div className="flex min-h-75 items-center justify-center rounded-xl bg-gray-100/80">
              <p className="text-sm text-gray-500">Chart visualization area</p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Weekly load and recovery trends will appear here.
            </p>
          </section>

          <section className="lg:col-span-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-105">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activities
              </h2>
              <span className="text-xs font-medium text-gray-500">
                Synced feed preview
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {activityFeedItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg border border-gray-100 bg-gray-50/70 px-4 py-3"
                >
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.meta}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
