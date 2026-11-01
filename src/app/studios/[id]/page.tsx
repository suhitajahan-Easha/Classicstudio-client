
import Link from "next/link";
import {
  MapPin,
  Star,
  Users,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowLeft,
  UserRound,
} from "lucide-react";
import { Studio } from "@/lib/type";
import BookWorkspace from "@/components/Shared/BookWorkspace";
import ImageSlider from "@/components/Shared/ImageSlider";

const StudioDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/studio/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Studio not found
      </div>
    );
  }

  const studio: Studio = await res.json();
  const amenities = Array.isArray(studio.amenities) ? studio.amenities : [];

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-10 dark:bg-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/studios"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft size={18} /> Back to studios
        </Link>

        {/* Studio heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-950/40 dark:text-orange-400">
              {studio.category}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {studio.title}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
              <MapPin size={17} /> {studio.location}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
            <Star size={17} className="fill-yellow-400 text-yellow-400" /> Guest
            reviews
          </div>
        </div>

        {/* Studio image */}
        {/* <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] sm:h-[400px] lg:h-[480px]">
          {studio.images ? (
            <Image
              src={studio.images?.[0] || "/placeholder.png"}
              alt={studio.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400 dark:text-neutral-500">
              No image available
            </div>
          )}
        </div> */}
        <ImageSlider images={studio.images || []} title={studio.title} />

        {/* Studio information */}
        <div className="mt-10">
          {/* Overview */}
          <section className="border-b border-gray-200 pb-8 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              About this studio
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-gray-600 dark:text-neutral-300">
              {studio.overview}
            </p>
          </section>

          {/* Specifications */}
          <section className="border-b border-gray-200 py-8 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Workspace specifications
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]">
                <Clock className="text-orange-500" size={22} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    Hourly rate
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ৳{studio.hourlyRate} / hour
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]">
                <Users className="text-orange-500" size={22} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    Maximum capacity
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {studio.maxCapacity} people
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]">
                <ShieldCheck className="text-orange-500" size={22} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    Security deposit
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ৳{studio.securityDeposit}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]">
                <MapPin className="text-orange-500" size={22} />
                <div>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    Location
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {studio.location}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="border-b border-gray-200 py-8 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Amenities & facilities
            </h2>
            {amenities.length > 0 ? (
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600 dark:text-neutral-300"
                  >
                    <CheckCircle
                      size={18}
                      className="shrink-0 text-green-600 dark:text-green-500"
                    />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-gray-500 dark:text-neutral-400">
                No amenities listed for this studio.
              </p>
            )}
          </section>

          {/* Host details */}
          <section className="border-b border-gray-200 py-8 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Meet your host
            </h2>
            <div className="mt-5 flex items-center gap-4 rounded-xl bg-white p-5 dark:bg-[#1a1a1a]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400">
                <UserRound size={27} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {studio.username}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                  {studio.email}
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="py-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Guest reviews
            </h2>
            <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center dark:border-neutral-700 dark:bg-[#1a1a1a]">
              <Star
                size={28}
                className="mx-auto text-gray-300 dark:text-neutral-600"
              />
              <p className="mt-3 font-medium text-gray-700 dark:text-neutral-200">
                No reviews yet
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                Reviews will appear here after guests share their experience.
              </p>
            </div>
          </section>
        </div>

        {/* Booking card - BELOW all studio details */}
        <section className="mt-6 rounded-2xl bg-[#171717] p-6 text-white sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-orange-400">
                Ready to create something amazing?
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Book this workspace
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Reserve this studio for your next creative project and bring
                your ideas to life.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:min-w-[260px]">
              <div className="border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400">Hourly rate</span>
                <p className="mt-1 text-2xl font-bold">
                  ৳{studio.hourlyRate}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    / hour
                  </span>
                </p>
              </div>
              <BookWorkspace studio={studio} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StudioDetailsPage;
