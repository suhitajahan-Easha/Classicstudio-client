import Link from "next/link";
import { Aperture, ArrowRight, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 lg:pt-20">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-red-600">
                <Aperture className="size-7 text-white" />
              </div>

              <span className="text-2xl font-extrabold tracking-tight">
                classic<span className="text-red-500">studio</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-400">
              A creative space for creative minds. Discover and book inspiring
              studios to bring your ideas, stories, and projects to life.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400">
              <MapPin className="size-4 text-red-500" />
              <span>Spaces for creators, everywhere.</span>
            </div>

            {/* Social Links */}
            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <FaInstagram className="size-5" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <FaFacebookF className="size-5" />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex size-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <FaXTwitter className="size-5" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <FaLinkedinIn className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Explore Studios
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
            </ul>
          </div>

          {/* Studio Categories */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Popular Categories
            </h3>

            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Photography Studios
                </Link>
              </li>

              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Film & Production Spaces
                </Link>
              </li>

              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Podcast Studios
                </Link>
              </li>

              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Music Studios
                </Link>
              </li>

              <li>
                <Link href="/studios" className="transition hover:text-red-500">
                  Creative Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Stay Inspired
            </h3>

            <p className="mb-5 text-sm leading-7 text-neutral-400">
              Get updates about new creative spaces, studio offers, and
              inspiration for your next project.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Subscribe
                <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-3 text-xs text-neutral-500">
              No spam. Just creative inspiration.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-neutral-800 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-neutral-500">
            © {new Date().getFullYear()} ClassicStudio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-500 sm:justify-end">
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
