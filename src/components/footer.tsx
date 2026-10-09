import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <Link
            href="/"
            className="text-sm font-semibold"
          >
            Study<span className="text-violet-400">AI</span>
          </Link>

          <p className="mt-1 text-xs text-white/30">
            AI-powered learning workspace.
          </p>
        </div>

        <div className="flex gap-5 text-xs text-white/30">
          <a
            href="#features"
            className="transition hover:text-white/70"
          >
            Features
          </a>

          <a
            href="#privacy"
            className="transition hover:text-white/70"
          >
            Privacy
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-white/70"
          >
            How it works
          </a>
        </div>

      </div>
    </footer>
  );
}