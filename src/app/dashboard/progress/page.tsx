const courses = [
  {
    name: "JavaScript",
    progress: 68,
  },
  {
    name: "HTML & CSS",
    progress: 85,
  },
  {
    name: "Algorithms",
    progress: 54,
  },
  {
    name: "Database",
    progress: 42,
  },
];

const weeklyActivity = [
  { day: "Mon", hours: 2.4 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.1 },
  { day: "Thu", hours: 2.2 },
  { day: "Fri", hours: 3.6 },
  { day: "Sat", hours: 1.4 },
  { day: "Sun", hours: 2.1 },
];

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-7xl p-5 sm:p-8">

        {/* Header */}
        <div>
          <p className="text-sm text-violet-400">
            PROGRESS
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Track your learning
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Understand your study activity and keep improving.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
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

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Average quiz score
            </p>

            <p className="mt-2 text-2xl font-semibold">
              87%
            </p>

            <p className="mt-1 text-xs text-violet-300">
              Good consistency
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Courses completed
            </p>

            <p className="mt-2 text-2xl font-semibold">
              2
            </p>

            <p className="mt-1 text-xs text-white/30">
              Out of 6 courses
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Learning streak
            </p>

            <p className="mt-2 text-2xl font-semibold">
              7 days
            </p>

            <p className="mt-1 text-xs text-emerald-400">
              Keep going
            </p>
          </div>

        </div>

        {/* Weekly activity */}
        <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Weekly activity
              </h2>

              <p className="mt-1 text-xs text-white/30">
                Study hours during the last 7 days
              </p>
            </div>

            <span className="text-sm text-violet-300">
              16.6h
            </span>
          </div>

          <div className="mt-8 flex h-52 items-end justify-between gap-3">

            {weeklyActivity.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-3"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-violet-600 to-violet-400"
                    style={{
                      height: `${(item.hours / 4) * 100}%`,
                    }}
                  />
                </div>

                <span className="text-[11px] text-white/30">
                  {item.day}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Course progress */}
        <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">

          <div>
            <h2 className="text-lg font-semibold">
              Course progress
            </h2>

            <p className="mt-1 text-xs text-white/30">
              Your progress across active courses
            </p>
          </div>

          <div className="mt-6 space-y-6">

            {courses.map((course) => (
              <div key={course.name}>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">
                    {course.name}
                  </span>

                  <span className="text-xs text-white/40">
                    {course.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Learning insight */}
        <div className="mt-8 rounded-2xl border border-violet-400/15 bg-violet-500/[0.05] p-6">

          <p className="text-sm font-medium text-violet-300">
            AI LEARNING INSIGHT
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            Keep your study sessions consistent.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            Your activity shows regular study sessions throughout the
            week. Continue reviewing JavaScript and Algorithms to
            strengthen your current progress.
          </p>

        </div>

      </div>
    </main>
  );
}