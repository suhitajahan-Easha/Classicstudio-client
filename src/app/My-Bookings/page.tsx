
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Studio } from "@/lib/type";
import BookingCard from "./Bookingcard";


export default async function Bookings() {
   const jwtToken =await auth.api.getToken({
    headers:await headers(),
  })//jwt
  console.log(jwtToken?.token)
  const token=jwtToken?.token
     const session = await auth.api.getSession({
    headers:await headers()
  })
  const user = session?.user;
  
  const res = await fetch(`http://localhost:5000/booking/${user?.email}`, {
   headers:{
      authorization:` Bearer ${token}`,
    }
    
  });
  const studios: Studio[] = await res.json();
 

  

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

      {studios.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">
            You haven't booked any studios yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {studios.map((studio) => (
            <BookingCard key={studio._id} studio={studio} />
          ))}
        </div>
      )}
    </section>
  );
}