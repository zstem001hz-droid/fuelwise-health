import { useMemo } from "react";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import StatCard from "../components/Dashboard/StatCard";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../context/AuthContext";
import { useStrava } from "../hooks/useStrava";
import {
  calculateWeeklyLoad,
  generateFuelWiseResult,
} from "../utils/calculateLoad";

function DashboardPage() {
  const { athlete, logout, accessToken } = useAuth();
  const { activities, isLoading, error, reload } = useStrava(accessToken);

  const weeklySummaries = useMemo(
    () => calculateWeeklyLoad(activities),
    [activities],
  );

  const result = useMemo(
    () => generateFuelWiseResult(weeklySummaries),
    [weeklySummaries],
  );

  const recentActivities = useMemo(
    () =>
      [...activities]
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
        .slice(0, 6),
    [activities],
  );

  const latestWeek = weeklySummaries[weeklySummaries.length - 1];

  const stats = [
    {
      title: "Weekly Mileage",
      value: latestWeek ? `${latestWeek.totalMiles.toFixed(1)} mi` : "0.0 mi",
      subtitle: "Based on synced activity data",
    },
    {
      title: "Weekly Load",
      value: result ? result.weeklyLoad : "-",
      subtitle: "Computed from duration and pace",
    },
    {
      title: "Load Change",
      value: result ? `${result.loadChangePercent}%` : "-",
      subtitle: "Week-over-week trend",
    },
    {
      title: "Injury Risk",
      value: result?.risk ?? "Unknown",
      subtitle: "Current training stress signal",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1] px-6 py-8 lg:px-10">
      <header className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            Welcome, {athlete?.firstname ?? "Athlete"}.
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Data source: HEFIT API activity feed
          </p>
        </div>

        <button
          type="button"
          onClick={logout}
          className="rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
        >
          Disconnect
        </button>
      </header>

      {isLoading ? <Spinner label="Syncing activity data..." /> : null}
      {!isLoading && error ? <ErrorMessage message={error} onRetry={reload} /> : null}

      {!isLoading && !error ? (
        <>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
              />
            ))}
          </section>

          <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <article className="rounded-2xl border border-stone-200 bg-white p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-stone-900">Recommendations</h2>
              {result ? (
                <div className="mt-4 space-y-4 text-sm text-stone-700">
                  <div>
                    <p className="font-medium text-stone-900">Recommended Mileage</p>
                    <p className="mt-1">{result.recommendedMileage} miles next week</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Training Guidance</p>
                    <p className="mt-1">{result.trainingRecommendation}</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Nutrition Guidance</p>
                    <p className="mt-1">{result.nutritionGuidance}</p>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-stone-600">
                  Sync more activities to unlock weekly recommendations.
                </p>
              )}
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6 lg:col-span-3">
              <h2 className="text-lg font-semibold text-stone-900">Recent Activities</h2>
              <p className="mt-1 text-sm text-stone-600">
                Showing the latest synced records from HEFIT.
              </p>

              {recentActivities.length > 0 ? (
                <div className="mt-5 space-y-3">
                  {recentActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-sm text-stone-600">
                  No activity records available yet.
                </p>
              )}
            </article>
          </section>
        </>
      ) : null}
    </div>
  );
}

export default DashboardPage;
