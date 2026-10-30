// "use client"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSeparator,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { authClient } from "@/lib/auth-client"
// import Link from "next/link"
// import { redirect } from "next/navigation"
// import React from "react"

// export default function SignInPage() {

//     const handleEmaillogin = async (e:React.SubmitEvent<HTMLElement>) => {

//         e.preventDefault()

//         const formData = new FormData(e.target)
//         const user = Object.fromEntries(formData.entries()) as { email:string, password:string}

  

//         const {data, error} = await authClient.signIn.email({
//             ...user,
//         })

//         if(data) {
//             redirect('/')
//         }

//         if(error) {
//             console.log(error)
//         }

//     }

//   return (
//     <div className="flex flex-col gap-6 max-w-6x mx-auto my-10" >
//       <Card>
//         <CardHeader className="text-center">
//           <CardTitle className="text-xl">Welcome back</CardTitle>
//           <CardDescription>
//             Login with your Apple or Google account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleEmaillogin}>
//             <FieldGroup>
//               <Field>
                
//                 <Button variant="outline" type="button">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path
//                       d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   Login with Google
//                 </Button>
//               </Field>
//               <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
//                 Or continue with
//               </FieldSeparator>
              
//               <Field>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   name="email"
//                   placeholder="m@example.com"
//                   required
//                 />
//               </Field>
//               <Field>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <a
//                     href="#"
//                     className="ml-auto text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//                 <Input id="password" name="password" type="password" required />
//               </Field>
//               <Field>
//                 <Button type="submit">login</Button>
//                 <FieldDescription className="text-center">
//                   Havent an account? <Link href="/signup">signup</Link>
//                 </FieldDescription>
//               </Field>
//             </FieldGroup>
//           </form>
//         </CardContent>
//       </Card>
//       <FieldDescription className="px-6 text-center">
//         By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
//         and <a href="#">Privacy Policy</a>.
//       </FieldDescription>
//     </div>
//   )
// }

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Aperture,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";
import { toast } from "react-toastify";

export default function LogInPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleEmailLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

  // const handleGoogleLogin = async () => {
  //   try {
  //     setGoogleLoading(true);

  //     await authClient.signIn.social({
  //       provider: "google",
  //       callbackURL: "/",
  //     });
  //   } catch {
  //     toast.error("Google login failed. Please try again.");
  //     setGoogleLoading(false);
  //   }
  // };

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2 ">

      {/* Left Side - Branding */}
      <section className="relative hidden min-h-screen overflow-hidden bg-neutral-950 p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16 ">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400"
            alt="Creative studio workspace"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-neutral-950/70 to-red-950/60" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-red-600">
              <Aperture className="size-7" />
            </div>

            <span className="text-2xl font-extrabold tracking-tight">
              classic<span className="text-red-500">studio</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            A space for every creative mind
          </p>

          <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
            Great ideas need
            <span className="block text-red-500">
              the right space.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-neutral-300">
            Discover inspiring studios, connect with creative spaces,
            and bring your next project to life with ClassicStudio.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-1 w-16 rounded-full bg-red-500" />
            <span className="text-sm tracking-wide text-neutral-300">
              Create. Collaborate. Inspire.
            </span>
          </div>
        </div>

        {/* <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400">
          <p>© 2026 ClassicStudio</p>
          <p>Spaces for creators</p>
        </div> */}
      </section>

      {/* Right Side - Login Form */}
      <section className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:justify-center lg:px-16 xl:px-24">

        {/* Mobile Logo */}
        <div className="mb-12 lg:hidden">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-600 text-white">
              <Aperture className="size-6" />
            </div>

            <span className="text-xl font-extrabold text-neutral-950">
              classic<span className="text-red-600">studio</span>
            </span>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-red-600"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mb-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Welcome back
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-neutral-950">
              Sign in<span className="text-red-600">.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Enter your details to access your ClassicStudio account.
            </p>
          </div>

          {/* Google Login */}
          <button
            type="button"
            // onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-red-300 hover:bg-red-50 disabled:opacity-60"
          >
            <svg viewBox="0 0 48 48" className="size-5">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.72 7.18l7.62 5.91c4.45-4.11 7.14-10.16 7.14-17.56Z"/>
              <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.89l-7.62-5.91c-2.12 1.43-4.85 2.3-8.28 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48Z"/>
            </svg>

            {googleLoading ? "Connecting..." : "Continue with Google"}
          </button>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Or sign in with email
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Email Login Form */}
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
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-neutral-800"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-red-600 transition hover:text-red-700 hover:underline"
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
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login to your account"}
              {!loading && <ArrowRight className="size-4" />}
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-8 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <Link
              href="/Register"
              className="font-bold text-red-600 transition hover:text-red-700 hover:underline"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-12 text-center text-xs leading-6 text-neutral-400">
            By continuing, you agree to ClassicStudio's Terms of Service
            and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}