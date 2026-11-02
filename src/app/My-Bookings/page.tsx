import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Home } from "lucide-react";

import BookingCard from "./Bookingcard";
import { Booking } from "@/lib/type";
import Link from "next/link";

export default async function Bookings() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  }); //jwt

  const token = jwtToken?.token;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.email}`,
    {
      headers: {
        authorization: ` Bearer ${token}`,
      },
    },
  );
  const booking = await res.json();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-red-500">
          My Bookings
        </h1>
        <p className="mt-2 text-gray-500">
          Manage the creative spaces you have booked.
        </p>
      </div>

      {booking.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">You haven't booked any studios yet.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            <Home className="mr-2 size-4" />
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {booking.map((booking: Booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </section>
  );
}
