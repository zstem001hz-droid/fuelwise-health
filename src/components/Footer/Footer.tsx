export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111315]/85 backdrop-blur-md text-center text-sm text-stone-300 py-6 mt-12">
      &copy; {new Date().getFullYear()} FuelWise. All rights reserved.
    </footer>
  );
}

