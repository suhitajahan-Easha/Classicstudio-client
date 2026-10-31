"use client";

import Link from "next/link";
import { Aperture, Menu, X, ArrowUpRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const handlesignout = () => {
    authClient.signOut();
    redirect("/LogIn");
  };
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
        {/* {user ? (
          <Popover>
            <PopoverTrigger
              nativeButton={false}
              render={
                <Avatar>
                  <AvatarImage
                    src={user?.image as string}
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                </Avatar>
              }
            />
            <PopoverContent align="start">
              <PopoverHeader>
                <PopoverTitle>{user?.name}</PopoverTitle>
                <PopoverDescription>
                  {user?.email}
                  <Button onClick={handlesignout} variant={"destructive"}>
                    Signout
                  </Button>
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/LogIn"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
            >
              Login
            </Link>

            <Link
              href="/Register"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Register
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )} */}
        {user ? (
          <Popover>
            <PopoverTrigger
            //   nativeButton={false}
              render={
                <button className="flex items-center gap-2 rounded-full border border-neutral-200 p-1 pr-3 transition hover:bg-neutral-50">
                  <Avatar className="size-9">
                    <AvatarImage src={user?.image as string} alt={user?.name} />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <span className="hidden text-sm font-medium text-neutral-700 sm:block">
                    {user?.name}
                  </span>
                </button>
              }
            />
            <PopoverContent align="end" className="w-64 p-2">
              <div className="border-b border-neutral-100 px-3 py-3">
                <p className="font-semibold text-neutral-900">{user?.name}</p>
                <p className="text-xs text-neutral-500">{user?.email}</p>
              </div>

              <div className="space-y-1 py-2">
                <Link
                  href="/dashboard"
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-red-50 hover:text-red-600"
                >
                  Dashboard
                </Link>

                <Link
                  href="/add-studio"
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-red-50 hover:text-red-600"
                >
                  Add New Studio
                </Link>

                <Link
                  href="/my-listings"
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-red-50 hover:text-red-600"
                >
                  My Studio Listings
                </Link>

                <Link
                  href="/MyBookings"
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-red-50 hover:text-red-600"
                >
                  My Bookings
                </Link>
              </div>

              <div className="border-t border-neutral-100 pt-2">
                <Button
                  onClick={handlesignout}
                  variant="destructive"
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/LogIn"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
            >
              Login
            </Link>

            <Link
              href="/Register"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Register
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}

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
