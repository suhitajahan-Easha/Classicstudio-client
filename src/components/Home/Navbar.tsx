import Link from "next/link";
import {
  Aperture,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-600 text-white">
            <Aperture className="size-6" strokeWidth={2.2} />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-neutral-950">
              classic<span className="text-red-600">studio</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Spaces for creators
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 transition hover:text-red-600"
          >
            Home
          </Link>

          <Link
            href="/studios"
            className="text-sm font-medium text-neutral-600 transition hover:text-red-600"
          >
            Explore Studios
          </Link>

          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-neutral-600 transition hover:text-red-600"
          >
            How It Works
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium text-neutral-600 transition hover:text-red-600"
          >
            About Us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/SignIn"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
          >
            Login
          </Link>

          <Link
            href="/Signup"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            Register
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded-lg p-2 text-neutral-800 transition hover:bg-neutral-100 md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </nav>
    </header>
  );
}