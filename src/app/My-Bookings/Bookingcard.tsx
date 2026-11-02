"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Booking } from "@/lib/type";
import { Deletebooking } from "./Deletebooking";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};
export default function BookingCard({ booking }: { booking: Booking }) {
  const router = useRouter();
  const handleCancelBooking = async (id: string) => {
    try {
      const { data } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${data?.token}`,
          },
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to cancel booking");
      }

      toast.success("Booking cancelled successfully");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Could not cancel booking");
    }
  };
  return (
    // <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
    //   {/* Studio information */}
    //   <div className="flex flex-col gap-2">
    //     <h3 className="font-semibold text-gray-900">
    //       {studio.title}
    //     </h3>

    //     <Image
    //       src={studio.imageUrl}
    //       alt={studio.title}
    //       width={110}
    //       height={75}
    //       className="h-[75px] w-[110px] rounded-lg object-cover"
    //     />

    //     <p className="text-sm text-gray-500">
    //       ${studio.hourlyRate} / hour
    //     </p>
    //   </div>

    //   {/* Action icons */}
    //   <div className="flex items-center gap-2">
    //     <Link
    //       href={`/studios/${studio._id}`}
    //       title="View studio"
    //       className="rounded-lg bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200"
    //     >
    //       <Eye size={18} />
    //     </Link>
    //       <Deletebooking studioId={studio._id}/>

    //   </div>
    // </div>
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-[#1a1a1a] dark:hover:shadow-black/30">
      {/* Studio information */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {booking.title}
        </h3>

        <Image
          src={booking.images?.[0] || "/placeholder.png"}
          alt={booking.title}
          width={110}
          height={75}
          className="h-18.75 w-27.5 rounded-lg object-cover"
        />

        <p className="text-sm text-gray-500 dark:text-neutral-400">
          ${booking.hourlyRate} / hour
        </p>
      </div>

      {/* Action icons */}
      <div className="flex items-center gap-2">
        <Link
          href={`/studios/${booking._id}`}
          title="View studio"
          className="rounded-lg bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200 dark:bg-[#222222] dark:text-neutral-300 dark:hover:bg-neutral-700"
        >
          <Eye size={18} />
        </Link>
        <span
          className={`rounded-full px-3 py-1 text-sm ${statusColors[booking.status]}`}
        >
          {booking.status}
        </span>
        {booking.status === "Pending" && (
          <Button
            onClick={() => handleCancelBooking(booking._id)}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Cancel Booking
          </Button>
        )}

        <Deletebooking studioId={booking._id} />
      </div>
    </div>
  );
}
