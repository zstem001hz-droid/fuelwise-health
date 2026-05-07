
/// A card component to display a statistic
type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
};

// The StatCard component takes in a title, value, and subtitle as props and renders a styled card with the statistic information. The title is displayed in smaller text at the top, the value is displayed prominently in larger text in the middle, and the subtitle is displayed in smaller text at the bottom.
//component is reusable and can be used to display various statistics throughout the dashboard, such as weekly training load, recovery score, or injury risk level.
export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-200/60 bg-white p-7 shadow-sm ">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="mt-3 text-4xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}