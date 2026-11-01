"use client";

import { useState } from "react";
import { Studio } from "@/lib/type";
import { authClient } from "@/lib/auth-client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function BookWorkspace({ studio }: { studio: Studio }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const bookingDate = formData.get("bookingDate");

    if (!bookingDate) return;

    const data = {
      // Booking user's information
      bookedBy: user?.name,
      bookingEmail: user?.email,
      bookingImage: user?.image,

      // Studio information
      ...studio,
      // Host's information
      hostName: studio.username,
      hostEmail: studio.email,
      bookingDate,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Booking failed");
      }

      const result = await res.json();
      console.log(result);
      toast.success("booked");

      setOpen(false);
    } catch (error) {
      console.error("Booking error:", error);
    }
  };
  
  const handleOpenBooking = () => {
    if (!session?.user) {
      router.push("/LogIn");
      return;
    }

    setOpen(true);
  };

  return (
   
    <>
      <Button
        onClick={handleOpenBooking}
        className="w-full bg-red-600 text-white hover:bg-red-700"
      >
        Book Workspace Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100%-2rem)] rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#1a1a1a] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-neutral-900 dark:text-white">
              Book Workspace
            </DialogTitle>
            <DialogDescription className="text-neutral-500 dark:text-neutral-400">
              Review your workspace details and select your booking date.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">
                {studio.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {studio.location}
              </p>
            </div>

            <div className="flex justify-between border-t border-neutral-200 pt-3 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
              <span>Hourly Rate</span>
              <span className="font-semibold text-neutral-900 dark:text-white">
                ${studio.hourlyRate}/hour
              </span>
            </div>

            <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
              <span>Security Deposit</span>
              <span className="font-semibold text-neutral-900 dark:text-white">
                ${studio.securityDeposit}
              </span>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="bookingDate"
                className="text-sm font-medium text-neutral-800 dark:text-neutral-200"
              >
                Select Booking Date
              </label>
              <input
                id="bookingDate"
                name="bookingDate"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-red-500 dark:border-neutral-700 dark:bg-[#222222] dark:text-white dark:color-scheme-dark"
              />
            </div>

            <div className="flex flex-col gap-3 pt-3">
              <Button
                type="button"
                variant="outline"
                className="w-full border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-[#222222] dark:text-neutral-200 dark:hover:bg-neutral-700"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full bg-red-600 text-white hover:bg-red-700"
              >
                Book Now
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
