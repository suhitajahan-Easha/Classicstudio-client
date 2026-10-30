import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  Star,
  Clock,
} from "lucide-react";
import { Studio } from "@/lib/type";

export default function StudioCard({ studio }: { studio: Studio }) {
  return (
    <article className="group w-full max-w-[340px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-[220px] overflow-hidden bg-neutral-100">
        <img
          src={studio.imageUrl}
          alt={studio.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-md bg-red-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg">
          {studio.category.replace("-", " ")}
        </span>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-md">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          4.5
          <span className="text-xs font-normal text-neutral-500">
            (Review)
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-red-600">
            {studio.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPin className="size-4 shrink-0 text-red-600" />
            <span className="line-clamp-1">{studio.location}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-neutral-200" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400">
              Starting from
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-red-600">
                ${studio.hourlyRate}
              </span>
              <span className="text-xs text-neutral-500">/ hour</span>
            </div>
          </div>

          <Link
            href={`/studios/${studio._id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
          >
            View Details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}