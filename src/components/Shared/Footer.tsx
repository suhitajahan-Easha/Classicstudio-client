// import Link from "next/link";
// import { Clapperboard, ArrowRight, Mail } from "lucide-react";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// const categories = [
//   "Film-Stage",
//   "Podcast-Lounge",
//   "Music-Suite",
//   "Workshop",
//   "Event-Space",
//   "photo-Studio",
// ];
// export default function Footer() {
//   return (
//     <footer className="bg-white text-[#171717] dark:bg-[#111111] dark:text-white">
//       <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-4">
//         {/* Brand Introduction */}
//         <div className="flex flex-col gap-8 border-b border-neutral-200 py-14 md:flex-row md:items-center md:justify-between md:py-16 dark:border-white/10">
//           <div>
            
//             <Link
//               href="/"
//               className="inline-flex min-w-0 shrink items-center gap-2 sm:gap-3"
//             >
//               {/* <div className="flex size-12 items-center justify-center rounded-xl bg-red-600"> */}
//               <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-600 sm:size-12">
//                 <Clapperboard
//                   size={26}
//                   strokeWidth={2}
//                   className=" text-white"
//                 />
//               </div>

//               {/* <span className="text-2xl font-extrabold tracking-tight">
//                         Classic<span className="text-red-500">Studio</span>
//                       </span> */}
//               <span className="whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl">
//                 Classic<span className="text-red-500">Studio</span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500 dark:text-neutral-400">
//               A creative space for creative minds. Discover inspiring studios
//               and bring your creative vision to life.
//             </p>
//           </div>

//           <div className="max-w-xl md:text-right">
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
//               Creative Spaces. Endless Possibilities.
//             </p>

//             <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//               Your next great idea deserves a{" "}
//               <span className="text-red-500">great space.</span>
//             </h2>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="border-b border-neutral-200 py-12 dark:border-white/10">
//           <div className="flex flex-col gap-7 rounded-2xl bg-[#F5F5F5] p-6 sm:p-8 md:flex-row md:items-center md:justify-between dark:bg-[#1d1d1d]">
//             <div className="max-w-md">
//               <h3 className="text-xl font-bold sm:text-2xl">
//                 Stay in the creative loop.
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
//                 Get studio updates, discover fresh spaces, and find inspiration
//                 for your next project.
//               </p>
//             </div>

//             <form className="flex w-full flex-col gap-3 sm:flex-row md:max-w-md">
//               <div className="relative flex-1">
//                 <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email address"
//                   required
//                   className="h-12 w-full rounded-lg border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-500 dark:border-white/10 dark:bg-[#111111] dark:text-white dark:placeholder:text-neutral-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="flex h-12 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700"
//               >
//                 Subscribe
//                 <ArrowRight className="size-4" />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="grid grid-cols-2 gap-10 border-b border-neutral-200 py-12 sm:grid-cols-3 dark:border-white/10">
//           {/* Explore */}
//           <div>
//             <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
//               Explore
//             </h3>

//             <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
//               <li>
//                 <Link href="/" className="transition hover:text-red-500">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/studios" className="transition hover:text-red-500">
//                   All Studios
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#how-it-works"
//                   className="transition hover:text-red-500"
//                 >
//                   How It Works
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
//               Explore Categories
//             </h3>
//             <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
//               {categories.map((item) => (
//                 <li key={item}>
//                   <Link
//                     href={`/studios/category/${item.toLowerCase()}`}
//                     className="transition hover:text-red-500"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
//               Company
//             </h3>

//             <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
//               <li>
//                 <Link href="/#about" className="transition hover:text-red-500">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/LogIn" className="transition hover:text-red-500">
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="transition hover:text-red-500">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="transition hover:text-red-500">
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs text-neutral-500">
//             © {new Date().getFullYear()} ClassicStudio. All rights reserved.
//           </p>

//           <div className="flex items-center gap-3">
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
//             >
//               <FaInstagram className="size-4" />
//             </a>

//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
//             >
//               <FaFacebookF className="size-4" />
//             </a>

//             <a
//               href="https://x.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="X"
//               className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
//             >
//               <FaXTwitter className="size-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
//             >
//               <FaLinkedinIn className="size-4" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import { Clapperboard, ArrowRight, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const categories = [
  "Film-Stage",
  "Podcast-Lounge",
  "Music-Suite",
  "Workshop",
  "Event-Space",
  "photo-Studio",
];

export default function Footer() {
  return (
    <footer className="bg-white text-[#171717] dark:bg-[#111111] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-4">
        {/* Brand Introduction */}
        <div className="flex flex-col gap-7 border-b border-neutral-200 py-12 md:flex-row md:items-center md:justify-between md:py-14 dark:border-white/10">
          <div>
            <Link
              href="/"
              className="inline-flex min-w-0 shrink items-center gap-2 sm:gap-3"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-600 sm:size-12">
                <Clapperboard size={24} strokeWidth={2} className="text-white sm:size-[26px]" />
              </div>

              <span className="whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl">
                Classic<span className="text-red-500">Studio</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500 dark:text-neutral-400">
              A creative space for creative minds. Discover inspiring studios
              and bring your creative vision to life.
            </p>
          </div>

          <div className="max-w-lg md:text-right">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-red-500">
              Creative Spaces. Endless Possibilities.
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Your next great idea deserves a{" "}
              <span className="text-red-500">great space.</span>
            </h2>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-b border-neutral-200 py-10 sm:py-12 dark:border-white/10">
          <div className="flex flex-col gap-7 rounded-2xl bg-[#F5F5F5] p-5 sm:p-8 md:flex-row md:items-center md:justify-between dark:bg-[#1d1d1d]">
            <div className="max-w-md">
              <h3 className="text-xl font-bold sm:text-2xl">
                Stay in the creative loop.
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Get studio updates, discover fresh spaces, and find inspiration
                for your next project.
              </p>
            </div>

            <form className="flex w-full flex-col gap-3 sm:flex-row md:max-w-md">
              <div className="relative min-w-0 flex-1">
                <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="h-12 w-full rounded-lg border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-500 dark:border-white/10 dark:bg-[#111111] dark:text-white dark:placeholder:text-neutral-500"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Subscribe
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 gap-9 border-b border-neutral-200 py-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:py-12 dark:border-white/10">
          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  All Studios
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="transition hover:text-red-500"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Explore Categories
            </h3>

            <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    href={`/studios/category/${item.toLowerCase()}`}
                    className="transition hover:text-red-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <Link href="/#about" className="transition hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/LogIn" className="transition hover:text-red-500">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} ClassicStudio. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
            >
              <FaInstagram className="size-4" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
            >
              <FaFacebookF className="size-4" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
            >
              <FaXTwitter className="size-4" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/10 dark:text-neutral-400"
            >
              <FaLinkedinIn className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

