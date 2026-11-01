"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Clapperboard } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "Find the space. Create the magic.",
    description: "Discover exceptional studios for photography, filmmaking, podcasts, and your next big idea.",
    image: "/categories/first.avif",
    label: "YOUR CREATIVE SPACE AWAITS",
  },
  {
    title: "Where your ideas come to life.",
    description: "From professional recording rooms to creative production spaces, find the perfect studio for your vision.",
    image: "/categories/2nd.avif",
    label: "MADE FOR CREATIVITY",
  },
  {
    title: "Your space. Your opportunity.",
    description: "Share your studio with creators and turn your creative space into a new opportunity.",
    image: "/categories/3rd.avif",
    label: "HOST YOUR SPACE",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-neutral-950 sm:h-[620px] lg:h-[700px]">
      {slides.map((slide, index) => (
        <div key={slide.label} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"}`}>
          <Image src={slide.image} alt={slide.title} width={600} height={600} className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-10 lg:px-16 justify-center">
            <div className="max-w-3xl text-white ">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Clapperboard className="size-4 text-red-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">{slide.label}</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-200 sm:text-base sm:leading-8 lg:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                <Link href="/studios" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700">
                  Explore Studios
                  <ArrowRight className="size-4" />
                </Link>

                <Link href="/add-studio" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950">
                  Host Your Space
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-20 mx-auto flex w-full max-w-7xl items-center justify-center px-5 sm:px-10 lg:px-16">
        <div className="flex items-center gap-5">
          <button type="button" onClick={prevSlide} aria-label="Previous slide" className="flex size-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:bg-red-600">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={nextSlide} aria-label="Next slide" className="flex size-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:bg-red-600">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
