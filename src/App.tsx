
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";



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
