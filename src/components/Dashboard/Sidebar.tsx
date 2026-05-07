export default function Sidebar() {
  // Navigation items for the sidebar
  //  Can replace these with actual links or icons as needed
  // changed to array of objects to allow for future expansion (e.g. icons, active state, etc.)
  const navItems = [
    { label: "Dashboard", isActive: true },
    { label: "Training Load", isActive: false },
    { label: "Recovery", isActive: false },
    { label: "Insights", isActive: false },
    { label: "History", isActive: false },
    { label: "Home", isActive: false },
  ];

  return (
    <aside className="min-h-screen w-64 border-r border-stone-300/60 bg-[#F4F1EA]">
      <div className="border-b border-stone-300/60 px-7 py-8">
        <h1 className="text-[1.02rem] font-semibold uppercase tracking-[0.14em] text-stone-800">
          FuelWise
        </h1>
      </div>

      <nav className="px-4 py-7" aria-label="Dashboard navigation">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className={[
                  "w-full rounded-xl border px-4 py-3.5 text-left text-[0.82rem] font-medium tracking-[0.03em]",
                  "transition-[background-color,color,border-color,transform] duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1EA]",
                  item.isActive
                    ? "border-stone-300/70 bg-[#E7E1D4] text-stone-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                    : "border-transparent text-stone-700 hover:border-stone-300/40 hover:bg-[#ECE7DC] hover:text-stone-800 hover:translate-x-[1px]",
                ].join(" ")}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
