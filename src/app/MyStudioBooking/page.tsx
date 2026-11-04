


import { CalendarDays, Clock, MapPin, User, Mail } from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Booking } from "@/lib/type";
import ConfirmBooking from "./ConfirmBooking";
import CancelBooking from "./CancelBooking";


export default async function MyStudioBooking() {
  const jwtToken =await auth.api.getToken({
      headers:await headers(),
    })//jwt
    console.log(jwtToken?.token)
    const token=jwtToken?.token
       const session = await auth.api.getSession({
      headers:await headers()
    })
  const user = session?.user;
  const hostEmail = user?.email ?? "";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mystudiobooking?email=${encodeURIComponent(user?.email ?? "")}`,{
        headers:{
                  authorization:`Bearer ${token}`,
                }
    }
    
  );
  const result = await res.json();

if (!res.ok) {
  throw new Error(result.message || "Failed to fetch bookings");
}

const bookings = Array.isArray(result) ? result : [];
console.log("Bookings response:", bookings);
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-[#111111]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Studio Bookings
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Manage booking requests for your listed studios.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center dark:border-gray-700 dark:bg-[#1b1b1b]">
            <CalendarDays className="mx-auto mb-3 text-gray-400" size={36} />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              No pending bookings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              New booking requests will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {bookings.map((booking:Booking) => (
              <div
                key={booking._id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-[#1b1b1b]"
              >
                <div className="border-b border-gray-100 p-5 dark:border-gray-700">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-red-500">
                        {booking.category}
                      </p>
                      <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                        {booking.title || "Studio"}
                      </h2>
                      <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={15} />
                        {booking.location || "Location unavailable"}
                      </p>
                    </div>

                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      {booking.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Customer information
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <User size={16} />
                      {booking.bookedBy || "Customer"}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Mail size={16} />
                      {booking.bookingEmail || "Email unavailable"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-[#252525]">
                      <p className="mb-1 text-xs text-gray-500">Booking date</p>
                      <p className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-white">
                        <CalendarDays size={15} />
                        {booking.bookingDate}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-[#252525]">
                      <p className="mb-1 text-xs text-gray-500">Time slot</p>
                      <p className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-white">
                        <Clock size={15} />
                        {booking?.timeSlot}
                      </p>
                    </div>
                  </div>
                 

                {booking.status === "Pending" && (
                  <div className="flex gap-3 pt-2">
                     <ConfirmBooking bookingId={booking._id} hostEmail={hostEmail} />
                    <CancelBooking bookingId={booking._id} hostEmail={hostEmail} />
                  </div>)} 
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}