import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    
    <section
      id="about"
      className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#111111] sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:px-4">
        {/* Left Side - About Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            About ClassicStudio
          </p>

          <h2 className="text-3xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
            Where Creativity
            <span className="text-red-600"> Finds Its Space.</span>
          </h2>

          <p className="mt-6 leading-7 text-neutral-600 dark:text-neutral-300 text-justify">
            ClassicStudio connects creators with inspiring spaces to bring their
            ideas to life. Whether you are a photographer, filmmaker, podcaster,
            or content creator, we help you discover a space that fits your
            vision.
          </p>

          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300 text-justify">
            Our mission is to make finding and booking creative spaces simple,
            so you can spend less time searching and more time creating
            something amazing.
          </p>

          {/* Highlights */}
          <div className="mt-7 grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                For Creators
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Discover spaces for your next big idea.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                For Hosts
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Share your space with creative minds.
              </p>
            </div>
          </div>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Explore Studios
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/music2.jpg"
            alt="Creative studio"
            width={700}
            height={500}
            className="h-87.5 w-full object-cover sm:h-112.5"
          />
        </div>
      </div>
    </section>
  );
}
