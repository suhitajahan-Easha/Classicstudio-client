"use client";

import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

type DeleteStudioProps = {
  studioId: string;
};

export function Deletebooking({ studioId }: DeleteStudioProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(`http://localhost:5000/booking/${studioId}`, { method: "DELETE" });

      if (!res.ok) throw new Error("Failed to delete booking");

      router.replace("/My-Bookings");
      router.refresh();
    } catch (error) {
      console.error("Delete studio error:", error);
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<button type="button" title="Delete studio" className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"><Trash2 size={18} /></button>} />
      <AlertDialogContent className="max-w-[400px] rounded-2xl border-0 bg-white p-6 shadow-2xl">
        <AlertDialogHeader className="items-center text-center">
          <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-rose-50"><Trash2 className="size-7 text-rose-600" strokeWidth={1.8} /></div>
          <AlertDialogTitle className="text-xl font-bold text-neutral-900">Delete this booking?</AlertDialogTitle>
          <AlertDialogDescription className="text-sm leading-6 text-neutral-500">Are you sure you want to delete this booking? This action cannot be undone, and all related studio information will be permanently removed.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-3">
          <p className="mb-1 text-xs font-bold tracking-wide text-rose-600">PLEASE NOTE</p>
          <p className="text-xs leading-5 text-neutral-600">You won't be able to recover this studio after deleting it.</p>
        </div>
        <AlertDialogFooter className="flex-row gap-3 sm:justify-center">
          <AlertDialogCancel disabled={isDeleting} className="mt-0 h-11 flex-1 rounded-lg border-neutral-300 bg-white text-sm font-semibold text-neutral-700 hover:bg-neutral-100">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="h-11 flex-1 rounded-lg bg-rose-600 text-sm font-semibold text-white hover:bg-rose-700">{isDeleting ? "Deleting..." : "Delete studio"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}