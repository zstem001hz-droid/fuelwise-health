import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
  id: string;
  title: string;
  content: string;
};

// This array contains the data for each feature card that will be displayed on the home page. Each object in the array adheres to the FeatureCard type, providing a unique id, a title that summarizes the feature, and a content description that elaborates on the benefits or functionality of the feature. This structured data can be easily mapped over to render individual feature cards in the UI, making it simple to add, remove, or modify features as needed without changing the underlying component logic.
const featureCards: FeatureCard[] = [
  {
    id: "training-load-analysis",
    title: "Training Load Analysis",
    content:
      "Monitor weekly workload trends and identify sudden spikes before fatigue builds.",
  },
  {
    id: "recovery-monitoring",
    title: "Recovery Monitoring",
    content:
      "Understand how recovery patterns impact training consistency and readiness.",
  },
  {
    id: "injury-risk-awareness",
    title: "Injury Risk Awareness",
    content:
      "Detect training imbalance early with smarter workload and recovery signals.",
  },
  {
    id: "strava-powered-insights",
    title: "Strava-Powered Insights",
    content:
      "Sync activity data seamlessly to generate personalized performance analytics.",
  },
];

// This component takes in three props: eyebrow, heading, and description. The eyebrow is a small piece of text that appears above the main heading, often used to provide context or categorize the section. The heading is the main title of the section, and the description provides additional information about what the section is about. By using this component, we can ensure that all section intros have a consistent look and feel across the application.
// its purpose is to provide a consistent layout and styling for the introductory text of different sections on the home page, making it easier to maintain a cohesive design throughout the application.
function SectionIntro({ eyebrow, heading, description }: SectionIntroProps) {
  return (
    <header className="text-center lg:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-900 lg:text-5xl">
        {heading}
      </h2>

      <p className="mt-5 text-base leading-relaxed text-stone-700">
        {description}
      </p>
    </header>
  );
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
            src="/images/newHero.webp"
            alt="Runner training outdoors"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cinematic overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black/45" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6">
          <div className="flex max-w-2xl flex-col items-center space-y-6 text-white md:items-start">
            <h1 className="text-center text-4xl font-semibold leading-tight md:text-left md:text-6xl">
              Train smarter.
              <br />
              Reduce injury risk.
            </h1>

            <p className="text-center text-base text-gray-200 md:text-left md:text-lg">
              Analyze your training load and recovery to get personalized
              insights and prevent injuries before they happen.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <button
                onClick={openModal}
                className="rounded-lg bg-[#BC6C25] px-6 py-3 font-medium text-stone-100 transition-all duration-300 hover:bg-[#A75F20] hover:-translate-y-px shadow-[0_10px_30px_-12px_rgba(188,108,37,0.45)]"
              >
                Get Analysis →
              </button>

              <button className="rounded-lg border border-white/50 bg-white/5 px-6 py-3 font-medium font-inherit text-stone-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Insights Section */}
      <section className="bg-[#F8F6F1] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow="Performance Insights"
                heading="Understand your training patterns before fatigue becomes injury."
                description="FuelWise combines Strava activity syncing with workload and recovery analysis so endurance athletes can make clearer, data-informed training decisions."
              />

              <ul className="mt-8 space-y-3 text-sm text-stone-700">
                <li>Track load progression week over week</li>
                <li>Catch recovery imbalance early</li>
                <li>Train with actionable risk signals</li>
              </ul>
            </div>

            <figure className="lg:col-span-7 rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-3 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]">
              <img
                src="/images/RealisticDataDashBoard.webp"
                alt="FuelWise dashboard preview"
                className="h-full w-full rounded-xl object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-[#FCFBF8] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col items-center text-center mb-4">
            <SectionIntro
              eyebrow="Performance Features"
              heading="Built to help runners train with more clarity."
              description="FuelWise combines workload tracking, recovery analysis, and activity insights into a calmer, more intelligent training experience for endurance athletes."
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {featureCards.map((feature) => (
              <article
                key={feature.id}
                className="rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-7 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]"
              >
                <h3 className="text-xl font-semibold text-stone-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {feature.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Intelligence Section */}
      <section className="bg-[#F8F6F1] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <figure className="lg:col-span-7 rounded-2xl border border-stone-200/70 bg-[#FCFBF8] p-3 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.12)]">
              <img
                src="/images/StretcedGoalsDataDashBoard.webp"
                alt="FuelWise recovery intelligence dashboard preview"
                className="h-full w-full rounded-xl object-cover"
              />
            </figure>

            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow="Recovery Intelligence"
                heading="Train with better awareness of fatigue and recovery."
                description="FuelWise helps runners recognize workload imbalance early through recovery analysis, nutrition guidance, and personalized training recommendations."
              />

              <ul className="mt-8 space-y-3 text-sm text-stone-700">
                <li>Monitor recovery trends alongside training load</li>
                <li>Receive personalized recovery recommendations</li>
                <li>Build more sustainable training habits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#0c1f12] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300/80">
            Train With More Awareness
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-100 lg:text-5xl">
            Performance begins with understanding your recovery.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-stone-200/85">
            FuelWise helps runners build smarter, more sustainable training
            habits through intelligent recovery, workload analysis, and
            personalized athlete insights.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg bg-[#BC6C25] px-6 py-3 font-medium text-stone-100 transition-all duration-300 hover:bg-[#A75F20] hover:-translate-y-px shadow-[0_10px_30px_-12px_rgba(188,108,37,0.45)]"
            >
              Start Your Analysis
            </button>

            <button
              type="button"
              className="rounded-lg border border-white/50 bg-white/5 px-6 py-3 font-medium font-inherit text-stone-100 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Explore the Dashboard
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Render modal above all page layers when requested. */}
      {isModalOpen && <AnalysisModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
