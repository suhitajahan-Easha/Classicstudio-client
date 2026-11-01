
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureCard from "../Shared/Featurecard";
import { Studio } from "@/lib/type";



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
    <section className="bg-[#FAFAFA] px-4 py-16 dark:bg-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4 ">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
              Explore Studios
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Featured Studios
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
              Discover spaces for your next creative project.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
              className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-white"
              aria-label="Previous studios"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage >= totalPages - 1}
              className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-white"
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
          <p className="py-12 text-center text-gray-500 dark:text-neutral-400">
            No studios available right now.
          </p>
        )}

        {/* {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentPage === index
                    ? "w-7 bg-red-600"
                    : "w-2.5 bg-gray-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default FeaturedStudios;
