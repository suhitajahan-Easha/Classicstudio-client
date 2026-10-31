
// import StudioCard from "@/components/Shared/Studiocard";
// import { Studio } from "@/lib/type";
// import { SlidersHorizontal, LayoutGrid } from "lucide-react";

// const AllStudiopage = async () => {
//   const res = await fetch("http://localhost:5000/studio");

//   if (!res.ok) {
//     throw new Error("Failed to fetch studios");
//   }

//   const studios: Studio[] = await res.json();

//   return (
//     <main className="min-h-screen bg-[#FAFAFA]">
//       <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

//         {/* Page Heading */}
//         <div className="mb-10">
//           <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
//             YOYO / DISCOVER
//           </p>

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
//                 Explore Studios<span className="text-red-600">.</span>
//               </h1>

//               <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
//                 Discover creative spaces designed for your next project.
//                 Find the right studio, explore its details, and make your
//                 creative vision happen.
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
//                 <LayoutGrid className="size-5" />
//               </div>

//               <div>
//                 <p className="text-2xl font-bold text-neutral-950">
//                   {studios.length}
//                 </p>
//                 <p className="text-xs text-neutral-500">
//                   Available workspaces
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Listing Toolbar */}
//         <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-4">
//           <div>
//             <p className="text-sm font-semibold text-neutral-900">
//               All creative spaces
//             </p>
//             <p className="mt-1 text-xs text-neutral-500">
//               Browse studios available for booking
//             </p>
//           </div>

//           <button
//             type="button"
//             className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-500 hover:text-red-600"
//           >
//             <SlidersHorizontal className="size-4" />
//             Filters
//           </button>
//         </div>

//         {/* Studio Grid */}
//         {studios.length === 0 ? (
//           <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-5 py-20 text-center">
//             <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
//               <LayoutGrid className="size-6" />
//             </div>

//             <h2 className="text-lg font-semibold text-neutral-900">
//               No studios found
//             </h2>

//             <p className="mt-2 text-sm text-neutral-500">
//               There are no available workspaces at the moment.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
//             {studios.map((studio) => (
//               <StudioCard key={studio._id} studio={studio} />
//             ))}
//           </div>
//         )}

//       </section>
//     </main>
//   );
// };

// export default AllStudiopage;
import AllStudiosPage from "@/components/AllStudiosPage";

export default function Page() {
  return <AllStudiosPage category="All" />;
}
