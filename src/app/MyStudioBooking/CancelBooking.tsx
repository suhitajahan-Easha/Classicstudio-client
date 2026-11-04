"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type CancelBookingProps = {
  bookingId: string;
  hostEmail: string;
  
};

export default function CancelBooking({ bookingId, hostEmail }: CancelBookingProps) {

    const router=useRouter()
  const handleCancel = async () => {
     const {data,error}=await authClient.token()
                const token =data?.token
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/cancel/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify({ hostEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to cancel booking.");
        return;
      }

      toast.success("Booking cancelled successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <button onClick={handleCancel} className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
      Cancel
    </button>
  );
}