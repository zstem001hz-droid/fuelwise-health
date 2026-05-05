import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return <div>Home Page</div>;
}

function DashboardPage() {
  return <div>Dashboard Page</div>;
}

export default function App() {
  return (
    <>
      <main>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}
