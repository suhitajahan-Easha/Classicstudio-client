// import Image from "next/image";
// import Link from "next/link";
// import {
//   MapPin,
//   Star,
//   Users,
//   ShieldCheck,
//   Clock,
//   CheckCircle,
// } from "lucide-react";


// import { Studio } from "@/lib/type";
// import BookWorkspace from "@/components/Shared/BookWorkspace";

// export default async function StudioDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

  
  
//   const res = await fetch(`http://localhost:5000/studio/${id}`);
  
//   const studio:Studio= await res.json();

//   return (
//     <main className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-8">
//       <div className="mx-auto max-w-6xl">

//         {/* Title */}
//         <div className="mb-6">
//           <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
//             {studio.category}
//           </span>

//           <h1 className="mt-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
//             {studio.title}
//           </h1>

//           <p className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
//             <MapPin className="size-4 text-red-600" />
//             {studio.location}
//           </p>
//         </div>

//         {/* Gallery */}
//         <div className="overflow-hidden rounded-2xl">
//           <Image
//             src={studio.imageUrl}
//             alt={studio.title}
//             width={1200}
//             height={650}
//             className="h-[250px] w-full object-cover sm:h-[400px] lg:h-[480px]"
//           />
//         </div>

//         {/* Main Content */}
//         <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">

//           {/* Left Content */}
//           <div className="space-y-8 lg:col-span-2">

//             {/* Overview */}
//             <section>
//               <h2 className="text-xl font-bold text-neutral-900">
//                 About This Workspace
//               </h2>

//               <p className="mt-3 leading-7 text-neutral-600">
//                 {studio.overview}
//               </p>
//             </section>

//             {/* Specifications */}
//             <section>
//               <h2 className="text-xl font-bold text-neutral-900">
//                 Workspace Specifications
//               </h2>

//               <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
//                   <Clock className="size-5 text-red-600" />
//                   <div>
//                     <p className="text-sm text-neutral-500">Hourly Rate</p>
//                     <p className="font-semibold">${studio.hourlyRate}/hour</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
//                   <Users className="size-5 text-red-600" />
//                   <div>
//                     <p className="text-sm text-neutral-500">Maximum Capacity</p>
//                     <p className="font-semibold">{studio.maxCapacity} people</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
//                   <ShieldCheck className="size-5 text-red-600" />
//                   <div>
//                     <p className="text-sm text-neutral-500">Security Deposit</p>
//                     <p className="font-semibold">${studio.securityDeposit}</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Amenities */}
//             <section>
//               <h2 className="text-xl font-bold text-neutral-900">
//                 Available Amenities
//               </h2>

//               <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 {studio.amenities.map((amenity) => (
//                   <div key={amenity} className="flex items-center gap-2 text-neutral-600">
//                     <CheckCircle className="size-4 text-red-600" />
//                     {amenity}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Host Details */}
//             <section className="rounded-xl border bg-white p-5">
//               <h2 className="text-xl font-bold text-neutral-900">
//                 Hosted By
//               </h2>

//               <div className="mt-4 flex items-center gap-3">
//                 <div className="flex size-12 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
//                   H
//                 </div>

//                 <div>
//                   <p className="font-semibold">Studio Host:{studio?.username}</p>
//                   <p className="text-sm text-neutral-500">
//                     Workspace Owner Email:{studio?.email}
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Reviews */}
//             <section>
//               <h2 className="flex items-center gap-2 text-xl font-bold">
//                 <Star className="size-5 fill-amber-400 text-amber-400" />
//                 Guest Reviews
//               </h2>

//               <p className="mt-3 text-sm text-neutral-500">
//                 No reviews available yet. Be the first to share your experience!
//               </p>
//             </section>

//           </div>

//           {/* Booking Card */}
//           <div>
//             <div className="sticky top-24 rounded-xl border bg-white p-5 shadow-sm">
//               <p className="text-sm text-neutral-500">Starting from</p>

//               <p className="mt-1 text-3xl font-bold text-neutral-900">
//                 ${studio.hourlyRate}
//                 <span className="text-sm font-normal text-neutral-500">
//                   / hour
//                 </span>
//               </p>

//               <div className="my-5 border-t" />

//               <BookWorkspace studio={studio} />

//               <p className="mt-3 text-center text-xs text-neutral-400">
//                 Booking details will be confirmed before reservation.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Users, ShieldCheck, Clock, CheckCircle, ArrowLeft, UserRound } from "lucide-react";
import { Studio } from "@/lib/type";
import BookWorkspace from "@/components/Shared/BookWorkspace";

const StudioDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/studio/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="py-20 text-center text-xl font-semibold">Studio not found</div>;
  }

  const studio: Studio = await res.json();
  const amenities = Array.isArray(studio.amenities) ? studio.amenities : [];

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <Link href="/studios" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black">
          <ArrowLeft size={18} /> Back to studios
        </Link>

        {/* Studio heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">{studio.category}</span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{studio.title}</h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-500"><MapPin size={17} /> {studio.location}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500"><Star size={17} className="fill-yellow-400 text-yellow-400" /> Guest reviews</div>
        </div>

        {/* Studio image */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[400px] lg:h-[480px]">
          {studio.imageUrl ? <Image src={studio.imageUrl} alt={studio.title} fill priority className="object-cover" /> : <div className="flex h-full items-center justify-center text-gray-400">No image available</div>}
        </div>

        {/* Studio information */}
        <div className="mt-10">

          {/* Overview */}
          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900">About this studio</h2>
            <p className="mt-4 max-w-4xl leading-8 text-gray-600">{studio.overview}</p>
          </section>

          {/* Specifications */}
          <section className="border-b border-gray-200 py-8">
            <h2 className="text-xl font-bold text-gray-900">Workspace specifications</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl bg-white p-4"><Clock className="text-orange-500" size={22} /><div><p className="text-xs text-gray-500">Hourly rate</p><p className="font-semibold text-gray-900">৳{studio.hourlyRate} / hour</p></div></div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4"><Users className="text-orange-500" size={22} /><div><p className="text-xs text-gray-500">Maximum capacity</p><p className="font-semibold text-gray-900">{studio.maxCapacity} people</p></div></div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4"><ShieldCheck className="text-orange-500" size={22} /><div><p className="text-xs text-gray-500">Security deposit</p><p className="font-semibold text-gray-900">৳{studio.securityDeposit}</p></div></div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4"><MapPin className="text-orange-500" size={22} /><div><p className="text-xs text-gray-500">Location</p><p className="font-semibold text-gray-900">{studio.location}</p></div></div>
            </div>
          </section>

          {/* Amenities */}
          <section className="border-b border-gray-200 py-8">
            <h2 className="text-xl font-bold text-gray-900">Amenities & facilities</h2>
            {amenities.length > 0 ? <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{amenities.map((amenity, index) => <div key={index} className="flex items-center gap-3 text-gray-600"><CheckCircle size={18} className="shrink-0 text-green-600" /><span>{amenity}</span></div>)}</div> : <p className="mt-4 text-sm text-gray-500">No amenities listed for this studio.</p>}
          </section>

          {/* Host details */}
          <section className="border-b border-gray-200 py-8">
            <h2 className="text-xl font-bold text-gray-900">Meet your host</h2>
            <div className="mt-5 flex items-center gap-4 rounded-xl bg-white p-5 sm:max-w-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600"><UserRound size={27} /></div>
              <div><p className="font-semibold text-gray-900">{studio.username}</p><p className="mt-1 text-sm text-gray-500">{studio.email}</p></div>
            </div>
          </section>

          {/* Reviews */}
          <section className="py-8">
            <h2 className="text-xl font-bold text-gray-900">Guest reviews</h2>
            <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
              <Star size={28} className="mx-auto text-gray-300" />
              <p className="mt-3 font-medium text-gray-700">No reviews yet</p>
              <p className="mt-1 text-sm text-gray-500">Reviews will appear here after guests share their experience.</p>
            </div>
          </section>

        </div>

        {/* Booking card - BELOW all studio details */}
        <section className="mt-6 rounded-2xl bg-[#171717] p-6 text-white sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-orange-400">Ready to create something amazing?</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Book this workspace</h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">Reserve this studio for your next creative project and bring your ideas to life.</p>
            </div>
            <div className="flex flex-col gap-4 md:min-w-[260px]">
              <div className="border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400">Hourly rate</span>
                <p className="mt-1 text-2xl font-bold">৳{studio.hourlyRate}<span className="text-sm font-normal text-gray-400"> / hour</span></p>
              </div>
              <BookWorkspace studio={studio} />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default StudioDetailsPage;