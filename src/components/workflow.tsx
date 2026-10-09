const steps = [
  {
    number: "01",
    title: "Add your material",
    description:
      "Upload your course material and keep your learning content organized in one workspace.",
  },
  {
    number: "02",
    title: "Learn with AI",
    description:
      "Generate summaries, ask questions and create practice material from what you are studying.",
  },
  {
    number: "03",
    title: "Measure progress",
    description:
      "Complete quizzes, review weak areas and understand how your learning is progressing.",
  },
];

export default function Workflow() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-medium text-violet-400">
            SIMPLE WORKFLOW
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From course material to active learning.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/40">
            A simple workflow designed to help students understand,
            practice and improve.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-white/[0.07] bg-[#0a0d12] p-7"
            >
              <span className="text-sm font-medium text-violet-400">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}