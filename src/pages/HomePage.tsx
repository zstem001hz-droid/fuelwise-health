import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AnalysisModal from "../components/Modal/AnalysisModal";

export default function HomePage() {
  // State to control the visibility of the AnalysisModal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal when the "Get Analysis" button is clicked
  const openModal = () => {
    setIsModalOpen(true);
    console.log("Model Opened: debugging only");
  };

  return (
    <>
    

    <section className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* image going here */}
        <img
        src="/images/hero.jpg"
        alt="Runner training outdors"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10 pt-24 md:pt-32" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center min-h-screen px-6">
        <div className="max-w-2xl flex flex-col gap-6 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Train smarter.
            <br />
            Reduce injury risk.
          </h1>

          <p className="text-base md:text-lg text-gray-200">
            Analyze your training load and recovery to get personalized insights
            and prevent injuries before they happen.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={openModal}
              className="px-6 py-3 rounded-md bg-white text-black font-medium"
            >
              Get Analysis →
            </button>

            <button className="px-6 py-3 rounded-md border border-white text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

    {/* // Render the AnalysisModal component when isModalOpen is true, passing the onClose function as a prop to allow the modal to be closed when the user clicks the cancel button or submits the form. */}
      {isModalOpen && <AnalysisModal onClose={() => setIsModalOpen(false)} />}
    </section>
    </>
  );
}
