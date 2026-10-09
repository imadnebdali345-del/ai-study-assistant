import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome back
            </h1>

            <p className="mt-3 text-sm text-white/40">
              Sign in to continue learning with StudyAI.
            </p>
          </div>

          <SignIn
            routing="path"
            path="/login"
            signUpUrl="/signup"
            forceRedirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-white/[0.025] border border-white/[0.07] shadow-2xl",
                headerTitle: "text-white",
                headerSubtitle: "text-white/40",
                socialButtonsBlockButton:
                  "bg-white/[0.03] border-white/[0.08] text-white",
                formFieldLabel: "text-white/60",
                formFieldInput:
                  "bg-black/20 border-white/[0.08] text-white",
                formButtonPrimary:
                  "bg-white text-black hover:bg-white/90",
                footerActionText: "text-white/40",
                footerActionLink: "text-violet-400",
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}