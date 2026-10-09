import Link from "next/link";

const courses = [
  {
    title: "JavaScript",
    description: "Learn JavaScript fundamentals and modern concepts.",
    progress: 68,
    lessons: 24,
  },
  {
    title: "HTML & CSS",
    description: "Build modern and responsive web interfaces.",
    progress: 85,
    lessons: 18,
  },
  {
    title: "Algorithms",
    description: "Practice algorithms, logic and problem solving.",
    progress: 54,
    lessons: 20,
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-7xl p-5 sm:p-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-violet-400">
              MY COURSES
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Your learning space
            </h1>

            <p className="mt-2 text-sm text-white/40">
              Manage your courses and continue learning.
            </p>
          </div>

          <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            + Add course
          </button>
        </div>

        {/* Courses */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-300">
                  📚
                </div>

                <span className="text-xs text-white/30">
                  {course.lessons} lessons
                </span>

              </div>

              <h2 className="mt-6 text-lg font-semibold">
                {course.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {course.description}
              </p>

              {/* Progress */}
              <div className="mt-6">

                <div className="flex justify-between text-xs">
                  <span className="text-white/35">
                    Progress
                  </span>

                  <span className="text-white/70">
                    {course.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

              </div>

              <Link
                href="/dashboard"
                className="mt-6 block rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-center text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
              >
                Continue learning
              </Link>

            </article>
          ))}

        </div>

      </div>
    </main>
  );
}