type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
};

function getMetricToneClass(title: string): string {
  if (title.toLowerCase().includes("recovery")) {
    return "text-[#3F5A45]";
  }

  if (title.toLowerCase().includes("injury")) {
    return "text-[#5E4F42]";
  }

  return "text-stone-900";
}

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  const metricToneClass = getMetricToneClass(title);

  return (
    <article className="rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-8 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-stone-500">
        {title}
      </p>
      <p
        className={`mt-4 text-[2rem] font-semibold leading-none tracking-tight ${metricToneClass}`}
      >
        {value}
      </p>
      <p className="mt-3 text-sm text-stone-500">{subtitle}</p>
    </article>
  );
}
