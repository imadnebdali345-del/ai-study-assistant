const privacyPoints = [
  "Clear data purposes",
  "Minimal personal information",
  "Privacy-focused architecture",
  "Transparent settings",
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-medium text-violet-400">
            PRIVACY BY DESIGN
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Your study data should stay under your control.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-white/45">
            StudyAI is designed with privacy in mind from the beginning.
            We aim to collect only the information needed to provide
            the learning experience.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">
          <div className="space-y-5">
            {privacyPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  ✓
                </div>

                <span className="text-sm text-white/65">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}