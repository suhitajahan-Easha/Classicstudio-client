
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#FAFAFA] px-4 py-12 dark:bg-[#111111]">
      <div className="w-full max-w-lg text-center">
        <p className="text-8xl font-bold tracking-tight text-red-600 dark:text-red-500 sm:text-9xl">
          404
        </p>

        <h1 className="mt-5 text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-500 dark:text-neutral-400">
          Sorry, the page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring creative spaces.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-red-600 text-white hover:bg-red-700">
            <Link href="/">
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-[#1a1a1a] dark:text-neutral-200 dark:hover:bg-neutral-800">
            <Link href="/studios">
              Explore Studios
              <ArrowLeft className="ml-2 size-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
