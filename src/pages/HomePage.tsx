import { useState } from "react";
import AnalysisModal from "../components/Modal/AnalysisModal";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };


  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        {/* image going here */}
        <img
        //   src="/hero-image.jpg"
        //   alt="Runner training outdoors"
        //   className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-64px)] px-6">

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

            <button className="px-6 py-3 rounded-md bg-white text-black font-medium">
              Get Analysis →
            </button>

            <button className="px-6 py-3 rounded-md border border-white text-white">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}