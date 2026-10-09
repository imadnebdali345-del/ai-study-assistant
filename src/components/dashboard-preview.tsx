export default function DashboardPreview() {
  return (
    <section id="workspace" className="scroll-mt-24 px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Browser Window */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1016] shadow-2xl shadow-black/40">

          {/* Browser Header */}
          <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-4">
            
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>

            <div className="hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-8 py-1 text-xs text-white/30 sm:block">
              app.studyai.local
            </div>

            <div className="w-10" />
          </div>

          {/* Application */}
          <div className="grid min-h-[500px] md:grid-cols-[210px_1fr]">

            {/* Sidebar */}
            <aside className="hidden border-r border-white/[0.07] bg-[#0a0d12] p-4 md:block">

              <div className="mb-8 flex items-center gap-2 px-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                  ✦
                </div>

                <span className="text-sm font-semibold">
                  StudyAI
                </span>
              </div>

              <nav className="space-y-1 text-sm">

                <div className="rounded-lg bg-white/[0.07] px-3 py-2.5 text-white">
                  Overview
                </div>

                <div className="rounded-lg px-3 py-2.5 text-white/40">
                  My courses
                </div>

                <div className="rounded-lg px-3 py-2.5 text-white/40">
                  Quizzes
                </div>

                <div className="rounded-lg px-3 py-2.5 text-white/40">
                  Progress
                </div>

              </nav>

              {/* Weekly Goal */}
              <div className="mt-10 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">

                <p className="text-xs text-white/35">
                  Weekly goal
                </p>

                <p className="mt-1 text-lg font-semibold">
                  4h 20m
                </p>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-violet-400" />
                </div>

                <p className="mt-2 text-[11px] text-white/30">
                  72% completed
                </p>

              </div>

            </aside>

            {/* Dashboard Content */}
            <div className="p-5 sm:p-7">

              {/* Header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div>
                  <p className="text-xs text-white/35">
                    Student dashboard
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    Good morning, student.
                  </h2>
                </div>

                <div className="rounded-lg border border-violet-400/15 bg-violet-400/[0.06] px-3 py-2 text-xs text-violet-200">
                  AI study mode active
                </div>

              </div>

              {/* Statistics */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-xs text-white/35">
                    Study time
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    12.4h
                  </p>

                  <p className="mt-1 text-xs text-emerald-400">
                    +18% this week
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-xs text-white/35">
                    Quiz accuracy
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    87%
                  </p>

                  <p className="mt-1 text-xs text-violet-300">
                    Strong progress
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-xs text-white/35">
                    Active courses
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    6
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    2 active today
                  </p>
                </div>

              </div>

              {/* Main Cards */}
              <div className="mt-4 grid gap-4 lg:grid-cols-5">

                {/* Course */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 lg:col-span-3">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-white/35">
                        Current course
                      </p>

                      <h3 className="mt-1 font-medium">
                        JavaScript — Functions
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                      📚
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-6">

                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Course progress
                      </span>

                      <span className="text-white/70">
                        68%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-400" />
                    </div>

                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    <span className="rounded-md border border-white/[0.07] px-2.5 py-1 text-[11px] text-white/45">
                      Summary ready
                    </span>

                    <span className="rounded-md border border-white/[0.07] px-2.5 py-1 text-[11px] text-white/45">
                      12 flashcards
                    </span>

                    <span className="rounded-md border border-white/[0.07] px-2.5 py-1 text-[11px] text-white/45">
                      Quiz available
                    </span>

                  </div>

                </div>

                {/* AI Assistant */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 lg:col-span-2">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        AI Assistant
                      </p>

                      <p className="text-xs text-white/30">
                        Ready to help
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-black/20 p-3">

                    <p className="text-xs leading-5 text-white/45">
                      Ask a question about your course and get an
                      explanation adapted to your learning level.
                    </p>

                  </div>

                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.06] px-3 py-2.5">

                    <span className="flex-1 text-xs text-white/25">
                      Ask your question...
                    </span>

                    <span className="text-white/40">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}