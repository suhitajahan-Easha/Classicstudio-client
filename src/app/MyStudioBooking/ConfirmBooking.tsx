"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type ConfirmBookingProps = {
  bookingId: string;
  hostEmail: string;
 
};

export default function ConfirmBooking({ bookingId, hostEmail }: ConfirmBookingProps) {
    const router = useRouter();
  const handleConfirm = async () => {
     const {data,error}=await authClient.token()
            const token =data?.token
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/confirm/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify({ hostEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to confirm booking.");
        return;
      }

      toast.success("Booking confirmed successfully!");
     router.refresh();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <button onClick={handleConfirm} className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
      Confirm
    </button>
  );
}