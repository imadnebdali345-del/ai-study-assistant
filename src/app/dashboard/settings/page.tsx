const settingsSections = [
  {
    title: "Account",
    description: "Manage your basic account information.",
    items: [
      {
        label: "Profile name",
        value: "Student",
      },
      {
        label: "Email",
        value: "student@example.com",
      },
    ],
  },
  {
    title: "Learning preferences",
    description: "Customize how StudyAI supports your learning.",
    items: [
      {
        label: "AI explanations",
        value: "Enabled",
      },
      {
        label: "Difficulty level",
        value: "Intermediate",
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-5xl p-5 sm:p-8">

        {/* Header */}
        <div>
          <p className="text-sm text-violet-400">
            SETTINGS
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Account settings
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Manage your account, learning preferences and privacy.
          </p>
        </div>

        {/* Settings sections */}
        <div className="mt-10 space-y-6">

          {settingsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
            >
              <h2 className="text-lg font-semibold">
                {section.title}
              </h2>

              <p className="mt-1 text-sm text-white/35">
                {section.description}
              </p>

              <div className="mt-6 divide-y divide-white/[0.06]">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-white/60">
                      {item.label}
                    </span>

                    <span className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-sm text-white/50">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Privacy */}
          <section className="rounded-2xl border border-violet-400/15 bg-violet-500/[0.04] p-6">

            <p className="text-sm font-medium text-violet-300">
              PRIVACY
            </p>

            <h2 className="mt-2 text-lg font-semibold">
              Your data matters.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
              StudyAI is designed to minimize unnecessary personal data
              and give users clear control over their learning information.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/55">
                <span className="text-emerald-400">✓</span>
                Data minimization
              </div>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <span className="text-emerald-400">✓</span>
                Transparent data usage
              </div>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <span className="text-emerald-400">✓</span>
                User-controlled settings
              </div>
            </div>

          </section>

          {/* Actions */}
          <section className="flex flex-col gap-3 rounded-2xl border border-red-400/10 bg-red-500/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-sm font-semibold">
                Account actions
              </h2>

              <p className="mt-1 text-xs text-white/30">
                Account management will be connected to authentication later.
              </p>
            </div>

            <button className="rounded-xl border border-red-400/20 px-4 py-2.5 text-sm text-red-300 transition hover:bg-red-400/10">
              Delete account
            </button>

          </section>

        </div>

      </div>
    </main>
  );
}