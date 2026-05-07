import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <h1 className="text-lg text-white font-semibold">FuelWise</h1>

      <ul className="flex items-center gap-6 text-sm text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}
