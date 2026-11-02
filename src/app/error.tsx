
"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#FAFAFA] px-4 py-12 dark:bg-[#111111]">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">
          <AlertCircle className="size-8 text-red-600 dark:text-red-400" />
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
          Something Went Wrong!
        </h1>

        <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
          We couldn't load this page right now. Something unexpected happened.
          Please try again.
        </p>

        <Button onClick={() => window.location.reload()} className="mt-8 bg-red-600 text-white hover:bg-red-700">
          <RefreshCw className="mr-2 size-4" />
          Try Again
        </Button>
      </div>
    </main>
  );
}
