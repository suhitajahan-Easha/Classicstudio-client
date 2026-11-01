"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

type DeleteStudioProps = {
  studioId: string;
};

export function DeletestudiolistDialog({ studioId }: DeleteStudioProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(`http://localhost:5000/studio/${studioId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete studio");

      router.replace("/studios");
      router.refresh();
    } catch (error) {
      console.error("Delete studio error:", error);
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button
            type="button"
            title="Delete studio"
            className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/70"
          >
            <Trash2 size={18} />
          </button>
        }
      />

      <AlertDialogContent className="max-w-[400px] rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-[#1a1a1a]">
        <AlertDialogHeader className="items-center text-center">
          <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-950/40">
            <Trash2
              className="size-7 text-rose-600 dark:text-rose-400"
              strokeWidth={1.8}
            />
          </div>

          <AlertDialogTitle className="text-xl font-bold text-neutral-900 dark:text-white">
            Delete this studio?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            Are you sure you want to delete this studio? This action cannot be
            undone, and all related studio information will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-3 dark:border-rose-900/50 dark:bg-rose-950/20">
          <p className="mb-1 text-xs font-bold tracking-wide text-rose-600 dark:text-rose-400">
            PLEASE NOTE
          </p>
          <p className="text-xs leading-5 text-neutral-600 dark:text-neutral-300">
            You won't be able to recover this studio after deleting it.
          </p>
        </div>

        <AlertDialogFooter className="flex-row gap-3 sm:justify-center">
          <AlertDialogCancel
            disabled={isDeleting}
            className="mt-0 h-11 flex-1 rounded-lg border-neutral-300 bg-white text-sm font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-[#222222] dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="h-11 flex-1 rounded-lg bg-rose-600 text-sm font-semibold text-white hover:bg-rose-700"
          >
            {isDeleting ? "Deleting..." : "Delete studio"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
