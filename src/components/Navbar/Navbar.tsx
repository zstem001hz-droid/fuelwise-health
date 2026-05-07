import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    "text-[1.02rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ease-out",
    isScrolled ? "text-stone-100 hover:text-white" : "text-white hover:text-white/90",
  ].join(" ");

  const linkClassName = (isActive: boolean) =>
    [
      "relative inline-flex items-center py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:transition-transform after:duration-300 after:ease-out",
      isScrolled
        ? "after:bg-stone-100"
        : "after:bg-white",
      isActive
        ? isScrolled
          ? "text-white after:scale-x-100"
          : "text-white after:scale-x-100"
        : isScrolled
          ? "text-stone-300 hover:text-white after:scale-x-0 hover:after:scale-x-100"
          : "text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");

  return (
    <nav className={navClassName}>
      <div className={innerClassName}>
        <Link className={brandClassName} to="/">
          FuelWise
        </Link>

        <ul className="flex items-center gap-8 text-sm">
          <li>
            <NavLink className={({ isActive }) => linkClassName(isActive)} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => linkClassName(isActive)} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
