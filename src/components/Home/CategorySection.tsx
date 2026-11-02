import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Film-Stage", image: "/categories/film-stage.avif", description: "Professional film production spaces" },
  { name: "Podcast-Lounge", image: "/categories/podcast.avif", description: "Spaces for podcasts and recordings" },
  { name: "Music-Suite", image: "/categories/music.avif", description: "Create music in professional studios" },
  { name: "Workshop", image: "/categories/workshop.avif", description: "Creative spaces for workshops" },
  { name: "Event-Space", image: "/categories/event.avif", description: "Spaces for your special events" },
  { name: "Photo-Studio", image: "/categories/photo4.avif", description: "Studios for Photo and Click" },
];

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">Explore by <span className="text-red-600">Category</span></h2>
        <p className="mt-2 text-neutral-500">Find the perfect creative space for your needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.name} href={`/studios/category/${category.name.toLowerCase()}`} className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <div className="relative h-52 overflow-hidden">
              <Image src={category.image} alt={category.name} loading="eager" height={500} width={500}  className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-600 dark:text-white">{category.name.replace("-", " ")}</h3>
              <p className="mt-2 text-sm text-neutral-500">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}