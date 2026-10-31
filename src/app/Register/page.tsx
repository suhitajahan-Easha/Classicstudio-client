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


// export default function RegisterPage() {

//     const handleEmailSignUp = async (e:React.SubmitEvent<HTMLElement>) => {

//         e.preventDefault()

        // const formData = new FormData(e.target)
        // const user = Object.fromEntries(formData.entries()) as {name:string, image: string, email:string, password:string}

  

//         const {data, error} = await authClient.signUp.email({
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
//           <form onSubmit={handleEmailSignUp}>
//             <FieldGroup>
//               <Field>
//                 <Button variant="outline" type="button">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path
//                       d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   Login with Apple
//                 </Button>
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
//                 <FieldLabel htmlFor="name">Name</FieldLabel>
//                 <Input
//                   id="name"
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   required
//                 />
//               </Field>

//                <Field>
//                 <FieldLabel htmlFor="name">ImageURL</FieldLabel>
//                 <Input
//                   id="image"
//                   type="url"
//                   name="image"
//                   placeholder="Image URL"
//                   required
//                 />
//               </Field>
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
//                 <Button type="submit">Register</Button>
//                 <FieldDescription className="text-center">
//                   Have an account? <Link href="/Login">Login</Link>
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

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {ArrowLeft,ArrowRight,User,Mail,Image as ImageIcon,Lock,Check,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  // Password validation
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  const isPasswordValid =
    hasUppercase && hasLowercase && hasMinLength;

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (!isPasswordValid) {
      toast.error("Please fulfill all password requirements.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries() ) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        ...user,
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
        return;
      }

      if (data) {
        toast.success("Registration successful!");
        router.push("/LogIn");
      }
    } catch (error) {
      console.error(error);
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
    <main className="w-ful mx-auto min-h-screen bg-white ">

      {/* LEFT BRANDING PANEL */}
      

      {/* RIGHT REGISTRATION FORM */}
      <section className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:justify-center lg:px-16 xl:px-20">        
        <div className="mx-auto w-full max-w-md">

          {/* Back Link */}
          <Link href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-red-600"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          {/* Heading */}
          <div className="mb-7 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Join ClassicStudio
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-neutral-950">
              Create account<span className="text-red-600">.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Create your account and discover spaces for your next
              creative project.
            </p>
          </div>

          {/* Google Placeholder */}
         <button
            type="button"
            onClick={handleGoogleLogin}
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

          {/* Separator */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Or register with email
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleEmailSignUp} className="space-y-4">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Full name
              </label>

              <div className="relative">
                <User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />

                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 pl-11 text-sm focus-visible:border-red-500 focus-visible:ring-red-500/10"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Photo URL
              </label>

              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />

                <Input
                  id="image"
                  type="url"
                  name="image"
                  placeholder="https://example.com/photo.jpg"
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 pl-11 text-sm focus-visible:border-red-500 focus-visible:ring-red-500/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />

                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 pl-11 text-sm focus-visible:border-red-500 focus-visible:ring-red-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />

                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-neutral-50 pl-11 text-sm focus-visible:border-red-500 focus-visible:ring-red-500/10"
                />
              </div>

              {/* Password Requirements */}
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <p className={`flex items-center gap-2 text-xs ${hasUppercase ? "text-green-600" : "text-neutral-400"}`}>
                  <Check className="size-3.5" />
                  Uppercase letter
                </p>

                <p className={`flex items-center gap-2 text-xs ${hasLowercase ? "text-green-600" : "text-neutral-400"}`}>
                  <Check className="size-3.5" />
                  Lowercase letter
                </p>

                <p className={`flex items-center gap-2 text-xs ${hasMinLength ? "text-green-600" : "text-neutral-400"}`}>
                  <Check className="size-3.5" />
                  At least 6 characters
                </p>
              </div>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              disabled={loading}
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
              {!loading && <ArrowRight className="size-4" />}
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link
              href="/Login"
              className="font-bold text-red-600 transition hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Terms */}
          <p className="mt-8 text-center text-xs leading-6 text-neutral-400">
            By creating an account, you agree to ClassicStudio's Terms
            of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}

