import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Studio } from "@/lib/type";
import { DeletestudiolistDialog } from "./DeleteDialog";

export default function ListingCard({ studio }: { studio: Studio }) {
  return (
    
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-[#1a1a1a] dark:hover:shadow-black/30">
      {/* Studio information */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {studio.title}
        </h3>

        <Image
          src={studio.images?.[0] || "/placeholder.png"}
          alt={studio.title}
          width={110}
          height={75}
          className="h-18.75 w-27.5 rounded-lg object-cover"
        />

        <p className="text-sm text-gray-500 dark:text-neutral-400">
          ${studio.hourlyRate} / hour
        </p>
      </div>

      {/* Action icons */}
      <div className="flex items-center gap-2">
        <Link
          href={`/studios/${studio._id}`}
          title="View studio"
          className="rounded-lg bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200 dark:bg-[#222222] dark:text-neutral-300 dark:hover:bg-neutral-700"
        >
          <Eye size={18} />
        </Link>

        <Link
          href={`/studios/edit/${studio._id}`}
          title="Edit studio"
          className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:bg-blue-950/70"
        >
          <Pencil size={18} />
        </Link>

        <DeletestudiolistDialog studioId={studio._id} />
      </div>
    </div>
  );
}
