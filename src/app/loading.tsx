
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FAFAFA] px-4 dark:bg-[#111111]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">
          <LoaderCircle className="size-7 animate-spin text-red-600 dark:text-red-400" />
        </div>

        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Loading ClassicStudio
        </h2>

        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Please wait while we prepare your experience...
        </p>
      </div>
    </main>
  );
}
