import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-200">
            <span className="flex h-2 w-2 rounded-full bg-violet-400" />
            AI-powered study workspace
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Study smarter.
            <br />

            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              Understand faster.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Turn your course material into clear summaries, personalized
            quizzes and useful study insights with one intelligent workspace.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="#workspace"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
            >
              Start learning

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            <Link
              href="#features"
              className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.08] sm:w-auto"
            >
              Explore features
            </Link>

          </div>

          {/* Small trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/30">
            <span>AI-assisted learning</span>
            <span>•</span>
            <span>Progress tracking</span>
            <span>•</span>
            <span>Privacy-aware</span>
          </div>

        </div>
      </div>
    </section>
  );
}