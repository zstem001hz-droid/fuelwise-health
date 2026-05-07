import { Link } from "react-router-dom";

// Footer navigation links
const footerNav = [
  { label: "Features", to: "/#features" },
  { label: "Insights", to: "/#insights" },
  { label: "Recovery", to: "/#recovery" },
  { label: "Dashboard", to: "/dashboard" },
];

// Legal links
const legalNav = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111315]/85 backdrop-blur-md text-center text-sm text-stone-300 py-6 mt-12">
      &copy; {new Date().getFullYear()} FuelWise. All rights reserved.
    </footer>
  );
}

