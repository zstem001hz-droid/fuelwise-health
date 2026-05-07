import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AnalysisModal from "../components/Modal/AnalysisModal";

// Reusable component for section intros with consistent styling
//will use this for the section intros to keep design consistent and code dry
type SectionIntroProps = {
  eyebrow: string;
  heading: string;
  description: string;
};

// This type defines the structure of a feature card, which includes an id, title, and description. The id is a unique identifier for each feature card, while the title and description provide information about the specific feature being highlighted. This type can be used to create an array of feature cards that can be rendered dynamically on the home page, allowing for easy updates and maintenance of the content.
type FeatureCard = {
  id:string;
  title: string;
  content: string;
}

// This component takes in three props: eyebrow, heading, and description. The eyebrow is a small piece of text that appears above the main heading, often used to provide context or categorize the section. The heading is the main title of the section, and the description provides additional information about what the section is about. By using this component, we can ensure that all section intros have a consistent look and feel across the application.
// its purpose is to provide a consistent layout and styling for the introductory text of different sections on the home page, making it easier to maintain a cohesive design throughout the application.
function SectionIntro({ eyebrow, heading, description }: SectionIntroProps) {
  return(
    <header>
      <p >{eyebrow}</p>

      <h2 >{heading}</h2>

      <p>{description}</p>
    </header>
  )
}


      

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

        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Runner training outdoors"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cinematic overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black/45" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Train smarter.
              <br />
              Reduce injury risk.
            </h1>

            <p className="text-base text-gray-200 md:text-lg">
              Analyze your training load and recovery to get personalized
              insights and prevent injuries before they happen.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <button
                onClick={openModal}
                className="rounded-md bg-white px-6 py-3 font-medium text-black"
              >
                Get Analysis →
              </button>

              <button className="rounded-md border border-white px-6 py-3 text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


    {/* Dashboard Insights Section */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Performance Insights
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-900 lg:text-5xl">
                Understand your training patterns before fatigue becomes injury.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-700">
                FuelWise combines Strava activity syncing with workload and
                recovery analysis so endurance athletes can make clearer,
                data-informed training decisions.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-stone-700">
                <li>Track load progression week over week</li>
                <li>Catch recovery imbalance early</li>
                <li>Train with actionable risk signals</li>
              </ul>
            </header>

            <figure className="lg:col-span-7 rounded-2xl border border-stone-200/70 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
              <img
                src="/images/RealisticDataDashBoard.png"
                alt="FuelWise dashboard preview"
                className="h-full w-full rounded-xl object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

    {/* Feature Section */}
      <section>
        <div>
          <article>

          </article>
        </div>
      </section>

      {/* Render modal above all page layers when requested. */}
      {isModalOpen && <AnalysisModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
