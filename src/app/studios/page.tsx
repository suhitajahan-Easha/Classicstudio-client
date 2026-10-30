// import StudioCard from "@/components/Shared/Studiocard";
// import { Studio } from "@/lib/type";
// const AllStudiopage = async () => {
//   const res = await fetch("http://localhost:5000/studio");
//   const studio:Studio[]= await res.json();
  
//   return (
//     <main className="min-h-screen bg-white px-5 py-10 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <h1 className="mb-2 text-3xl font-semibold text-neutral-900">
//           All Destinations
//         </h1>

//         <p className="mb-8 text-sm text-neutral-500">
//           Discover your next travel destination.
//         </p>

//         {studio.length === 0 ? (
//           <p className="py-10 text-center text-neutral-500">
//             No destinations found.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {studio.map((studio) => (
//               <StudioCard
//                 key={studio._id}
//                 studio={studio}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default AllStudiopage;
// import StudioCard from "@/components/Shared/Studiocard";
// import { Studio } from "@/lib/type";
// import { ArrowDown, Camera, Clapperboard, Mic2, Music2 } from "lucide-react";

// const AllStudiopage = async () => {
//   const res = await fetch("http://localhost:5000/studio");

//   if (!res.ok) {
//     throw new Error("Failed to fetch studios");
//   }

//   const studios: Studio[] = await res.json();

//   const categories = [
//     { name: "Photo Studios", icon: Camera },
//     { name: "Film Stages", icon: Clapperboard },
//     { name: "Podcast Spaces", icon: Mic2 },
//     { name: "Music Suites", icon: Music2 },
//   ];

//   return (
//     <main className="min-h-screen bg-[#FAFAFA]">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-neutral-950 text-white">
//         <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
//         <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
//           <div>
//             <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
//               <span className="size-2 rounded-full bg-red-500" />
//               Create without limits
//             </span>

//             <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
//               Find your space.
//               <span className="block text-red-500">Create your story.</span>
//             </h1>

//             <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400 sm:text-lg">
//               Discover inspiring creative spaces built for your next big idea.
//               From photography studios to podcast rooms, find the perfect place
//               to bring your vision to life.
//             </p>

//             <a
//               href="#studios"
//               className="mt-9 inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
//             >
//               Explore studios
//               <ArrowDown className="size-4" />
//             </a>
//           </div>

//           {/* Category Showcase */}
//           <div className="grid grid-cols-2 gap-4">
//             {categories.map((category, index) => {
//               const Icon = category.icon;

//               return (
//                 <div
//                   key={category.name}
//                   className={`flex min-h-36 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-red-500/60 hover:bg-white/[0.09] ${
//                     index % 2 === 1 ? "md:translate-y-8" : ""
//                   }`}
//                 >
//                   <Icon className="size-8 text-red-500" />
//                   <h3 className="text-sm font-semibold text-white sm:text-base">
//                     {category.name}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-transparent" />
//       </section>

//       {/* Studios Section */}
//       <section
//         id="studios"
//         className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
//       >
//         {/* Section Heading */}
//         <div className="mb-10 flex flex-col justify-between gap-5 border-b border-neutral-200 pb-7 sm:flex-row sm:items-end">
//           <div>
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
//               The Yoyo collection
//             </p>

//             <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
//               Spaces to create
//             </h2>

//             <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
//               Explore unique spaces and find the right environment for your
//               creative projects.
//             </p>
//           </div>

//           <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
//             <span className="text-2xl font-bold text-red-600">
//               {studios.length}
//             </span>
//             <span>studios available</span>
//           </div>
//         </div>

//         {/* Studio Grid */}
//         {studios.length === 0 ? (
//           <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-5 py-20 text-center">
//             <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-red-50">
//               <Camera className="size-6 text-red-600" />
//             </div>

//             <h3 className="text-lg font-semibold text-neutral-900">
//               No studios available yet
//             </h3>

//             <p className="mt-2 text-sm text-neutral-500">
//               Check back soon for creative spaces listed on Yoyo.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//             {studios.map((studio) => (
//               <StudioCard key={studio._id} studio={studio} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-5 pb-16 sm:px-8">
//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-red-600 px-7 py-10 text-white sm:flex-row sm:items-center sm:px-12">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
//               Have a creative space?
//             </p>

//             <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
//               Your studio belongs on Yoyo.
//             </h2>

//             <p className="mt-2 text-sm text-red-100">
//               List your space and connect with creators.
//             </p>
//           </div>

//           <a
//             href="/AddStudio"
//             className="shrink-0 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-red-600 transition hover:bg-neutral-100"
//           >
//             List your studio
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AllStudiopage;
import StudioCard from "@/components/Shared/Studiocard";
import { Studio } from "@/lib/type";
import { SlidersHorizontal, LayoutGrid } from "lucide-react";

const AllStudiopage = async () => {
  const res = await fetch("http://localhost:5000/studio");

  if (!res.ok) {
    throw new Error("Failed to fetch studios");
  }

  const studios: Studio[] = await res.json();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

        {/* Page Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
            YOYO / DISCOVER
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Explore Studios<span className="text-red-600">.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                Discover creative spaces designed for your next project.
                Find the right studio, explore its details, and make your
                creative vision happen.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <LayoutGrid className="size-5" />
              </div>

              <div>
                <p className="text-2xl font-bold text-neutral-950">
                  {studios.length}
                </p>
                <p className="text-xs text-neutral-500">
                  Available workspaces
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Listing Toolbar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-4">
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              All creative spaces
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Browse studios available for booking
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-500 hover:text-red-600"
          >
            <SlidersHorizontal className="size-4" />
            Filters
          </button>
        </div>

        {/* Studio Grid */}
        {studios.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-5 py-20 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
              <LayoutGrid className="size-6" />
            </div>

            <h2 className="text-lg font-semibold text-neutral-900">
              No studios found
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              There are no available workspaces at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((studio) => (
              <StudioCard key={studio._id} studio={studio} />
            ))}
          </div>
        )}

      </section>
    </main>
  );
};

export default AllStudiopage;
