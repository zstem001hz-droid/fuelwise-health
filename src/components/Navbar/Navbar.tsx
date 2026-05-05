import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold">FuelWise</h1>

      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
