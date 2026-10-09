const quizzes = [
  {
    title: "JavaScript — Functions",
    questions: 10,
    score: 87,
    date: "Today",
  },
  {
    title: "HTML & CSS — Basics",
    questions: 15,
    score: 92,
    date: "Yesterday",
  },
  {
    title: "Algorithms — Loops",
    questions: 12,
    score: 75,
    date: "3 days ago",
  },
];

export default function QuizzesPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-7xl p-5 sm:p-8">

        {/* Header */}
        <div>
          <p className="text-sm text-violet-400">
            QUIZZES
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Test your knowledge
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Practice what you have learned and track your results.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Quizzes completed
            </p>

            <p className="mt-2 text-2xl font-semibold">
              24
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Average score
            </p>

            <p className="mt-2 text-2xl font-semibold">
              87%
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-white/35">
              Questions answered
            </p>

            <p className="mt-2 text-2xl font-semibold">
              248
            </p>
          </div>

        </div>

        {/* Quiz history */}
        <div className="mt-10">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Recent quizzes
            </h2>

            <span className="text-xs text-white/30">
              Quiz history
            </span>
          </div>

          <div className="mt-4 space-y-3">

            {quizzes.map((quiz) => (
              <article
                key={quiz.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-violet-400/20 sm:flex-row sm:items-center sm:justify-between"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">
                      {quiz.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/30">
                      {quiz.questions} questions · {quiz.date}
                    </p>
                  </div>

                </div>

                <div className="flex items-center justify-between gap-5 sm:justify-end">

                  <div>
                    <p className="text-xs text-white/30">
                      Score
                    </p>

                    <p className="mt-1 text-lg font-semibold text-emerald-400">
                      {quiz.score}%
                    </p>
                  </div>

                  <button className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs text-white/60 transition hover:bg-white/[0.07] hover:text-white">
                    Review
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* Start quiz */}
        <div className="mt-8 rounded-2xl border border-violet-400/15 bg-violet-500/[0.05] p-6">

          <h2 className="text-lg font-semibold">
            Ready for another challenge?
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
            Choose a course and generate a quiz based on what you are currently studying.
          </p>

          <button className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            Start a quiz
          </button>

        </div>

      </div>
    </main>
  );
}