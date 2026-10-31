
import ListingCard from "./ListingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Studio } from "@/lib/type";

export default async function MyListings() {
     const session = await auth.api.getSession({
    headers:await headers()
  })
  const user = session?.user;
  
  const res = await fetch(`http://localhost:5000/add-studio/${user?.email}`, {
    
  });
  const studios: Studio[] = await res.json();
  

  

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          My Listings
        </h1>
        <p className="mt-2 text-gray-500">
          Manage the creative spaces you have listed.
        </p>
      </div>

      {studios.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">
            You haven't added any studios yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {studios.map((studio) => (
            <ListingCard key={studio._id} studio={studio} />
          ))}
        </div>
      )}
    </section>
  );
}