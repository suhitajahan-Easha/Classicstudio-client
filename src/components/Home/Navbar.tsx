"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Aperture,
  Clapperboard,
  Menu,
  X,
  ArrowUpRight,
  LayoutDashboard,
  Plus,
  Building2,
  CalendarDays,
  LogOut,
  ChevronRight,
  UserRound,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeToggle from "@/components/ThemeToggle";

// Inside your navbar JSX:

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Studios", href: "/studios" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "About Us", href: "/#about" },
  ];

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    setMobileMenuOpen(false);
    router.push("/LogIn");
    router.refresh();
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-xl dark:bg-[#111111]">
      <nav className="relative mx-auto flex h-19 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-4">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink items-center gap-2 sm:gap-3"
          onClick={closeMobileMenu}
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-600 sm:size-12">
            <Clapperboard size={26} strokeWidth={2} className=" text-white" />
          </div>

          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl">
            Classic<span className="text-red-500">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                isActive(link.href)
                  ? "bg-red-50 dark:text-red-50 text-red-600 dark:bg-red-600"
                  : "text-neutral-600  hover:bg-neutral-50 dark:hover: hover:text-red-600 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-red-400 "
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.75 w-5 -translate-x-1/2 rounded-full bg-red-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Authentication / Profile */}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {user ? (
            <Popover open={profileOpen} onOpenChange={setProfileOpen}>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    aria-label="Open profile menu"
                     className="flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white p-1 pr-1 transition hover:border-red-200 hover:bg-neutral-50
                      dark:border-black dark:bg-[#111111] dark:text-white sm:gap-2 sm:pr-3"
                  >
                    <Avatar className="size-9">
                      <AvatarImage
                        src={user.image || undefined}
                        alt={user.name || "User"}
                      />
                      <AvatarFallback className="bg-red-50 font-semibold text-red-600">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden max-w-28 truncate text-sm font-semibold text-neutral-700 dark:text-white lg:block">
                      {user?.name}
                    </span>
                    <ChevronRight className="hidden size-4 rotate-90 text-neutral-400 lg:block" />
                  </button>
                 
                }
              />

              <PopoverContent
                align="end"
                className="w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white p-0 text-neutral-900 shadow-xl dark:border-neutral-800 dark:bg-[#111111] dark:text-white"
              >
                {/* Profile Header */}
                <div className="border-b border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-[#1c1c1c]">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-14 border-2 border-white shadow-sm dark:border-neutral-700">
                      <AvatarImage
                        src={user.image || undefined}
                        alt={user.name || "User"}
                      />
                      <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                        <UserRound size={24} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-neutral-900 dark:text-white">
                        {user.name || "User"}
                      </p>
                      <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                        {user.email}
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold tracking-wider text-red-600 dark:bg-red-950 dark:text-red-400">
                        CLASSICSTUDIO MEMBER
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Navigation */}
                <div className="p-3">
                  <p className="px-3 pb-2 pt-1 text-[10px] font-bold tracking-[1.5px] text-neutral-400 dark:text-neutral-500">
                    WORKSPACE
                  </p>
                  <div className="space-y-1">
                    {[
                      {
                        name: "Booking(Host)",
                        href: "/MyStudioBooking",
                        icon: LayoutDashboard,
                      },
                      {
                        name: "Add New Studio",
                        href: "/add-studio",
                        icon: Plus,
                      },
                      {
                        name: "My Studio Listings",
                        href: "/my-listings",
                        icon: Building2,
                      },
                      {
                        name: "My Bookings",
                        href: "/My-Bookings",
                        icon: CalendarDays,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setProfileOpen(false)}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-neutral-50 dark:hover:bg-neutral-800"
                        >
                          <span className="flex size-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition group-hover:bg-red-50 group-hover:text-red-600 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-red-950 dark:group-hover:text-red-400">
                            <Icon size={18} />
                          </span>
                          <span className="flex-1 text-sm font-medium text-neutral-700 transition group-hover:text-red-600 dark:text-neutral-300 dark:group-hover:text-red-400">
                            {item.name}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-red-600 dark:text-neutral-600 dark:group-hover:text-red-400"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Logout */}
                <div className="border-t border-neutral-200 p-3 dark:border-neutral-800">
                  <Button
                    onClick={handleSignOut}
                    variant="destructive"
                    className="h-10 w-full justify-center gap-2 rounded-lg bg-red-600 font-semibold text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700"
                  >
                    <LogOut size={17} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/LogIn"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:text-white dark:hover:bg-red-600"
              >
                Login
              </Link>
              <Link
                href="/Register"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
              >
                Register
                <ArrowUpRight size={16} />
              </Link>
            </div>
          )}
          <ThemeToggle />
          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex size-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-800 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:text-white dark:hover:bg-red-600 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 pb-5 pt-3 shadow-lg transition-colors duration-300 dark:border-neutral-800 dark:bg-[#111111] md:hidden">
          <div className="mx-auto max-w-7xl space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-red-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-red-400"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="size-2 rounded-full bg-red-600" />
                )}
              </Link>
            ))}

            {!user && (
              <div className="grid grid-cols-2 gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                <Link
                  href="/LogIn"
                  onClick={closeMobileMenu}
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-center text-sm font-semibold text-neutral-700 transition hover:border-red-200 hover:text-red-600 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-red-800 dark:hover:text-red-400"
                >
                  Login
                </Link>
                <Link
                  href="/Register"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Register
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}

            {user && (
              <div className="border-t border-neutral-100 pt-3 dark:border-neutral-800">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Signed in as {user.name || "User"}
                </p>
                <button
                  onClick={handleSignOut}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
