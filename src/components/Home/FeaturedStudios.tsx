
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureCard from "../Shared/Featurecard";
import { Studio } from "@/lib/type";
import StudioCard from "../Shared/Studiocard";



const FeaturedStudios = () => {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-Studio`);
        const data = await res.json();

        setStudios(data);
      } catch (error) {
        console.error("Failed to fetch studios:", error);
      }
    };

    fetchStudios();
  }, []);

  const totalPages = Math.ceil(studios.length / 3);

  const visibleStudios = studios.slice(
    currentPage * 3,
    currentPage * 3 + 3
  );

  return (
    // <section className="bg-[#FAFAFA] px-4 py-16 dark:bg-[#111111] sm:px-6 lg:px-8">
    //   <div className="mx-auto max-w-7xl">
    //     <div className="mb-8 flex items-end justify-between gap-4 ">
    //       <div>
    //         <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
    //           Explore Studios
    //         </p>
    //         <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
    //           Featured Studios
    //         </h2>
    //         <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
    //           Discover spaces for your next creative project.
    //         </p>
    //       </div>

    //       <div className="flex gap-2">
    //         <button
    //           onClick={() => setCurrentPage(0)}
    //           disabled={currentPage === 0}
    //           className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-white"
    //           aria-label="Previous studios"
    //         >
    //           <ChevronLeft size={20} />
    //         </button>

    //         <button
    //           onClick={() => setCurrentPage(1)}
    //           disabled={currentPage >= totalPages - 1}
    //           className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-white"
    //           aria-label="Next studios"
    //         >
    //           <ChevronRight size={20} />
    //         </button>
    //       </div>
    //     </div>

    //     {studios.length > 0 ? (
    //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //         {visibleStudios.map((studio) => (
    //           <FeatureCard key={studio._id} studio={studio} />
    //         ))}
    //       </div>
    //     ) : (
    //       <p className="py-12 text-center text-gray-500 dark:text-neutral-400">
    //         No studios available right now.
    //       </p>
    //     )}

       
    //   </div>
    // </section>
    
<section className="bg-[#FAF7F5] px-4 py-16 sm:px-6 lg:bg-[#FAF7F5] lg:px-8 dark:bg-[#111111]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-8 bg-red-600 dark:bg-red-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400">
            ClassicStudio / Selected Spaces
          </p>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-[#302522] sm:text-4xl lg:text-5xl dark:text-white">
          Featured Studios
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#806B65] sm:text-base dark:text-neutral-400">
          Explore inspiring spaces designed to bring your creative ideas to life.
        </p>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
          className="flex size-10 items-center justify-center rounded-full border border-[#E5D8D2] bg-white text-[#3B2522] transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:size-12 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600"
          aria-label="Previous studios"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage >= totalPages - 1}
          className="flex size-10 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-30 sm:size-12"
          aria-label="Next studios"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    {studios.length > 0 ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStudios.map((studio) => (
          <FeatureCard key={studio._id} studio={studio} />
        ))}
      </div>
    ) : (
      <div className="rounded-2xl border border-[#EBD5CC] bg-white px-4 py-16 text-center dark:border-neutral-800 dark:bg-neutral-900/60">
        <p className="text-sm text-[#806B65] dark:text-neutral-400">
          No studios available right now.
        </p>
      </div>
    )}
  </div>
</section>

  );
};

export default FeaturedStudios;
