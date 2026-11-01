
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { Studio } from "@/lib/type";
import Image from "next/image";



const FeatureCard = ({ studio }:{studio:Studio} ) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-[#1a1a1a]">
      <div className="relative h-52">
        <Image
          src={studio.images?.[0] || "/placeholder.png"}
          alt={studio.title}
          height={300}
          width={300}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600 dark:bg-[#222222]">
          {studio.category}
        </span>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-sm font-semibold text-gray-800 dark:bg-[#222222] dark:text-white">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          4.5
        </span>
      </div>

      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
          {studio.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-red-600">
          ${studio.hourlyRate}
          <span className="text-sm font-normal text-gray-500 dark:text-neutral-400">
            {" "}/ hr
          </span>
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
          <MapPin size={16} />
          <span className="truncate">{studio.location}</span>
        </div>

        <Link
          href={`/studios/${studio._id}`}
          className="mt-5 block rounded-lg max-w-30 mx-auto bg-red-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
