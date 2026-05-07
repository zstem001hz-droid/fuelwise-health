export default function Sidebar() {
    // Navigation items for the sidebar
    //  Can replace these with actual links or icons as needed
  const navItems = [
    "Dashboard",
    "Training Load",
    "Recovery",
    "Insights",
    "History",
    "Home"
  ];

  return (
    <aside className="min-h-screen w-64 border-r border-gray-200 bg-white shadow-sm">
      {/* Branding section */}
      <div className="border-b border-gray-200 px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900">
          FuelWise
        </h1>
      </div>

      {/* Navigation menu */}
      <nav className="px-3 py-6">
        <ul className="flex flex-col gap-1">
             {/* Map through the nav items and create a button for each one. In a real app, these would likely be links that navigate to different pages or sections of the dashboard. */}
          {navItems.map((item) => (
            <li key={item}>
              <button className="w-full rounded-md px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
