
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";


function DashboardPage() {
  return (
    <Sidebar />
  );
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
