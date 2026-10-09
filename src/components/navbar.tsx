import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/[0.07] bg-[#07090d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
            <span className="text-lg font-bold">✦</span>
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Study<span className="text-violet-400">AI</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#privacy"
            className="transition hover:text-white"
          >
            Privacy
          </a>
        </nav>

        {/* Button */}
        <a
          href="#workspace"
          className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium transition hover:border-white/20 hover:bg-white/10"
        >
          Open workspace
        </a>

      </div>
    </header>
  );
}