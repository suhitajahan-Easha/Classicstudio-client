"use client";

import StudioCard from "@/components/Shared/Studiocard";
import { Studio } from "@/lib/type";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  category?: string;
};

export default function AllStudiosPage({ category = "All" }: Props) {
  const [studios, setStudios] = useState<Studio[]>([]);

  useEffect(() => {
    const fetchStudios = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio`);
      const data = await res.json();
      setStudios(data);
    };

    fetchStudios();
  }, []);

  const selectedCategory = category=== "All" ? "All" : category.replace("category=", "");

  const categories = ["All", "Film-Stage", "Podcast-Lounge", "Music-Suite", "Workshop", "Event-Space", "Dance-Studio"];

  const filteredStudios = selectedCategory === "All"
    ? studios
    : studios.filter((studio) => studio.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Explore Studios</h1>
        <p className="mt-2 text-sm text-neutral-500">Find the perfect space for your creative projects.</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((item) => (
          <Link key={item} href={item === "All" ? "/studios" : `/studios/category/${item.toLowerCase()}`} className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${selectedCategory === item ? "bg-red-600 text-white" : "border border-gray-200 bg-white text-neutral-700 hover:border-red-600 hover:text-red-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"}`}>
            {item}
          </Link>
        ))}
      </div>

      {filteredStudios.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudios.map((studio) => <StudioCard key={studio._id} studio={studio} />)}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-12 text-center dark:border-neutral-700">
          <p className="text-neutral-500">No studios found in this category.</p>
        </div>
      )}
    </main>
  );
}