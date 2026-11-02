import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, Star } from "lucide-react";
import { Studio } from "@/lib/type";

export default function StudioCard({ studio }: { studio: Studio }) {
  return (
    
    <article className="group w-full max-w-85 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-[#1a1a1a] dark:hover:shadow-black/30">
      {/* Image */}
      <div className="overflow-hidden">
        {/* <Image
          src={studio.imageUrl}
          alt={studio.title}
          width={500}
          height={350}
          className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
        /> */}
       
        <Image
          src={studio.images?.[0] || "/placeholder.png"}
          alt={studio.title}
          width={500}
          height={350}
          className="h-55 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category and Rating */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-400">
            {studio.category}
          </span>

          <div className="flex items-center gap-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {studio?.rating||4.5}
            <span className="font-normal text-neutral-400">(Review)</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="line-clamp-1 text-xl font-bold text-neutral-900 transition group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400">
          {studio.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <MapPin className="size-4 shrink-0 text-red-500" />
          <span className="line-clamp-1">{studio.location}</span>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-neutral-100 dark:border-neutral-800" />

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-neutral-400">Starting from</p>

            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
              ${studio.hourlyRate}
              <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                / hour
              </span>
            </p>
          </div>

          <Link
            href={`/studios/${studio._id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            View Details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
