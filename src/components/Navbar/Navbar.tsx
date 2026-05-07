import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 900);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClassName = [
    "left-0 z-40 w-full border-b transition-all duration-300 ease-out",
    isScrolled
      ? "fixed top-0 translate-y-0 border-white/10 bg-[#111315]/85 backdrop-blur-md"
      : "absolute top-0 -translate-y-2 border-transparent bg-transparent text-white",
  ].join(" ");

  const innerClassName = [
    "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
    isScrolled ? "text-stone-100" : "text-white",
  ].join(" ");

  const brandClassName = [
    "text-lg font-semibold tracking-[0.02em] transition-colors duration-300 ease-out",
    isScrolled ? "text-stone-100" : "text-white",
  ].join(" ");

  const linkClassName = [
    "transition-colors duration-300 ease-out",
    isScrolled
      ? "text-stone-200 hover:text-white"
      : "text-white/90 hover:text-white",
  ].join(" ");

  return (
    <nav className={navClassName}>
      <div className={innerClassName}>
        <h1 className={brandClassName}>FuelWise</h1>

        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className={linkClassName} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={linkClassName} to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
