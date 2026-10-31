
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Mail, Lock,} from "lucide-react";
import { toast } from "react-toastify";

export default function LogInPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password");
        return;
      }

      if (data) {
        toast.success("Welcome back!");
        router.push("/");
        router.refresh();
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google login failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  return (

    <main className="min-h-screen w-full bg-white">
      <section className="flex min-h-screen w-full flex-col px-4 py-6 sm:px-8 sm:py-10 lg:justify-center lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-md">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-red-600 sm:mb-10"
          >
            <ArrowLeft className="size-4 shrink-0" />
            Back to home
          </Link>

          <div className="mb-8 text-center sm:mb-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Welcome back
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Sign in<span className="text-red-600">.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-500">
              Enter your details to access your ClassicStudio account.
            </p>
          </div>

          <button type="button" onClick={handleGoogleLogin} disabled={googleLoading}
            className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:border-red-300 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5"
          >
            <svg viewBox="0 0 48 48" className="size-5 shrink-0">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.72 7.18l7.62 5.91c4.45-4.11 7.14-10.16 7.14-17.56Z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.89l-7.62-5.91c-2.12 1.43-4.85 2.3-8.28 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48Z"
              />
            </svg>
            <span className="min-w-0">
              {googleLoading ? "Connecting..." : "Continue with Google"}
            </span>
          </button>

          <div className="my-7 flex items-center gap-3 sm:my-8 sm:gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-center text-[10px] font-medium uppercase tracking-wider text-neutral-400 sm:text-xs">
              Or sign in with email
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-neutral-800"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="shrink-0 text-xs font-semibold text-red-600 transition hover:text-red-700 hover:underline sm:text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-11 pr-12 text-sm outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-neutral-700"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login to your account"}
              {!loading && <ArrowRight className="size-4 shrink-0" />}
            </button>
          </form>

          <p className="mt-7 text-center text-sm leading-6 text-neutral-500 sm:mt-8">
            Don't have an account?{" "}
            <Link
              href="/Register"
              className="font-bold text-red-600 transition hover:text-red-700 hover:underline"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-8 pb-2 text-center text-xs leading-6 text-neutral-400 sm:mt-12">
            By continuing, you agree to ClassicStudio's Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
