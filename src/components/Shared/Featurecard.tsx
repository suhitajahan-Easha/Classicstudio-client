// import Link from "next/link";
// import { MapPin, Star } from "lucide-react";
// import { Studio } from "@/lib/type";
// import Image from "next/image";

// const FeatureCard = ({ studio }:{studio:Studio} ) => {
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-[#1a1a1a]">
//       <div className="relative h-52">
//         <Image
//           src={studio.images?.[0] || "/placeholder.png"}
//           alt={studio.title}
//           height={300}
//           width={300}
//           className="h-full w-full object-cover"
//         />

//         <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600 dark:bg-[#222222]">
//           {studio.category}
//         </span>

//         <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-sm font-semibold text-gray-800 dark:bg-[#222222] dark:text-white">
//           <Star size={14} className="fill-yellow-400 text-yellow-400" />
//          {studio?.rating||4.5}
//         </span>
//       </div>

//       <div className="p-4">
//         <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
//           {studio.title}
//         </h3>

//         <p className="mt-2 text-lg font-bold text-red-600">
//           ${studio.hourlyRate}
//           <span className="text-sm font-normal text-gray-500 dark:text-neutral-400">
//             {" "}/ hr
//           </span>
//         </p>

//         <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
//           <MapPin size={16} />
//           <span className="truncate">{studio.location}</span>
//         </div>

//         <Link
//           href={`/studios/${studio._id}`}
//           className="mt-5 block rounded-lg  bg-red-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-700"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;
import Link from "next/link";
import { MapPin, Star, Users, ArrowUpRight } from "lucide-react";
import { Studio } from "@/lib/type";
import Image from "next/image";

const FeatureCard = ({ studio }: { studio: Studio }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#EBD5CC] bg-[#FFF7F2] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-[#1A1A1A]">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={studio.images?.[0] || "/placeholder.png"}
          alt={studio.title}
          height={300}
          width={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-[#222222]/95 dark:text-red-400">
          {studio.category}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-sm font-semibold text-[#3B2522] dark:bg-[#222222]/95 dark:text-white">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {studio.rating || 4.5}
        </span>
      </div>

      <div className="p-5">
        <h3 className="truncate text-xl font-bold text-[#302522] dark:text-white">
          {studio.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-[#806B65] dark:text-neutral-400">
          <MapPin size={16} className="shrink-0 text-red-600" />
          <span className="truncate">{studio.location}</span>
          <span className="text-[#D6C4BC] dark:text-neutral-700">|</span>
          <Users size={16} className="shrink-0 text-red-600" />
          <span className="shrink-0">{studio.maxCapacity} guests</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#EBD5CC] pt-4 dark:border-neutral-800">
          <div>
            <p className="text-2xl font-bold text-red-600">
              ${studio.hourlyRate}
              <span className="ml-1 text-sm font-normal text-[#806B65] dark:text-neutral-400">
                / hour
              </span>
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {studio.amenities?.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="rounded-full border border-[#EBD5CC] bg-white px-3 py-1 text-xs font-medium text-[#806B65] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {amenity}
            </span>
          ))}
        </div>

        <Link
          href={`/studios/${studio._id}`}
          className="mt-5 flex items-center justify-between rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#302522] dark:hover:bg-neutral-700"
        >
          <span>View Details</span>
          <span className="flex size-8 items-center justify-center rounded-md bg-[#302522] text-white transition-colors duration-300 group-hover:bg-red-600 dark:bg-neutral-900 dark:group-hover:bg-red-600">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
