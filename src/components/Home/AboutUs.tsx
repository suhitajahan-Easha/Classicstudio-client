import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:px-4 lg:gap-16">
        {/* Left Side - About Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            About ClassicStudio
          </p>

          <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Where Creativity
            <span className="text-red-600"> Finds Its Space.</span>
          </h2>

          <p className="mt-6 leading-7 text-neutral-600">
            ClassicStudio connects creators with inspiring spaces to bring their
            ideas to life. Whether you are a photographer, filmmaker, podcaster,
            or content creator, we help you discover a space that fits your
            vision.
          </p>

          <p className="mt-4 leading-7 text-neutral-600">
            Our mission is to make finding and booking creative spaces simple,
            so you can spend less time searching and more time creating
            something amazing.
          </p>

          {/* Highlights */}
          <div className="mt-7 grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                For Creators
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Discover spaces for your next big idea.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                For Hosts
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
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
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb"
            alt="Creative studio"
            width={700}
            height={500}
            className="h-[350px] w-full object-cover sm:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
