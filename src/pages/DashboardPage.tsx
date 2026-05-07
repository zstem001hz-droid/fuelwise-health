import Sidebar from "../components/Dashboard/Sidebar.tsx";
import StatCard from "../components/Dashboard/StatCard.tsx";
import { useAuth } from "../context/AuthContext";

/**
 * Dashboard layout shell for FuelWise.
 *
 * Data flow today:
 * - `getDashboardStats()` and `getActivityFeedItems()` return mock data.
 * - UI renders from those arrays via `.map()`.
 *
 * Data flow later:
 * - Keep UI structure the same.
 * - Replace the two helper functions with mapped Strava/API response data.
 */

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
  // Current placeholder stats for UI development.
  // Swap this with mapped backend/API stats once integration is ready.
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
  // Current placeholder feed rows for layout and spacing validation.
  // Swap this with mapped Strava activities once integration is ready.
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
  const { athlete } = useAuth();
  // Keep data preparation near the top so rendering remains simple.
  const statsData = getDashboardStats();
  const activityFeedItems = getActivityFeedItems();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto bg-[#F8F6F1] px-8 py-10 lg:px-10 lg:py-10">
        {/* Header section */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
            Welcome, {athlete?.firstname ?? "User"}! 👋
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            {/* hardcoded data for debugging, will replace*/}
            This week • May 1-7, 2026
          </p>
        </div>

        {/* Quick metrics row (responsive: 1 -> 2 -> 4 columns) */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
            />
          ))}
        </div>

        {/* Lower dashboard area (40/60 split on large screens) */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-5">
          {/* Left panel: reserved for future chart component */}
          <section className="lg:col-span-2 min-h-105 rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-6 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[1.02rem] font-semibold tracking-tight text-stone-900">
                Training Trends
              </h2>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-stone-500">
                Last 4 weeks
              </span>
            </div>

            <div className="flex min-h-75 items-center justify-center rounded-xl border border-stone-200/70 bg-stone-100/70">
              <p className="text-sm text-stone-500">Chart visualization area</p>
            </div>

            <p className="mt-5 text-xs text-stone-500">
              Weekly load and recovery trends will appear here.
            </p>
          </section>

          {/* Right panel: reserved for future Strava activity feed */}
          <section className="lg:col-span-3 min-h-105 rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-6 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[1.02rem] font-semibold tracking-tight text-stone-900">
                Recent Activities
              </h2>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-stone-500">
                Synced feed preview
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              {/* Each row will map to one activity record from the API later. */}
              {activityFeedItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-stone-200/70 bg-stone-50/85 px-4 py-3.5"
                >
                  <p className="text-sm font-medium text-stone-800">{item.name}</p>
                  <p className="mt-1 text-xs text-stone-500">{item.meta}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
