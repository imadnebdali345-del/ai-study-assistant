import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DashboardPreview from "@/components/dashboard-preview";
import FeatureCard from "@/components/feature-card";
import Workflow from "@/components/workflow";
import PrivacySection from "@/components/privacy";
import Footer from "@/components/footer";

const features = [
  {
    title: "AI explanations",
    description:
      "Ask questions and receive explanations based on the learning material you are studying.",
    icon: "✦",
  },
  {
    title: "Course summaries",
    description:
      "Turn long course material into structured notes that are easier to review.",
    icon: "📚",
  },
  {
    title: "Smart quizzes",
    description:
      "Practice with questions generated around the concepts you are learning.",
    icon: "🧠",
  },
  {
    title: "Progress insights",
    description:
      "Track your study activity and identify topics that need more practice.",
    icon: "↗",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white selection:bg-violet-500/30">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Product Preview */}
      <DashboardPreview />

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-20 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-violet-400">
              ONE WORKSPACE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to study with more clarity.
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              StudyAI brings your course material, AI assistance,
              practice and progress into one focused workspace.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>

        </div>
      </section>

      {/* How it works */}
      <Workflow />

      {/* Privacy */}
      <PrivacySection />

      {/* Footer */}
      <Footer />

    </main>
  );
}