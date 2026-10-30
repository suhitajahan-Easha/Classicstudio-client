"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb",
    subtitle: "FIND YOUR CREATIVE SPACE",
    title: "Every great idea needs the right space.",
    description:
      "Discover inspiring studios designed for photography, filmmaking, podcasts, and everything in between.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    subtitle: "MAKE SOMETHING AMAZING",
    title: "Your next creative project starts here.",
    description:
      "From professional studios to unique creative spaces, find the perfect setting for your next big idea.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    subtitle: "TURN YOUR SPACE INTO OPPORTUNITY",
    title: "Have a space? Let it inspire others.",
    description:
      "Share your creative space with a community of makers, artists, and ambitious creators.",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".banner-prev",
          nextEl: ".banner-next",
        }}
        className="h-[560px] sm:h-[620px] lg:h-[680px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex h-full items-center">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

              {/* Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 sm:px-10 lg:px-16">
                <div className="max-w-3xl">
                  <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-red-500 sm:text-sm">
                    <span className="h-[2px] w-8 bg-red-500" />
                    {slide.subtitle}
                  </p>

                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/studios"
                      className="inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Explore Studios
                      <ArrowRight className="size-4" />
                    </Link>

                    <Link
                      href="/studios"
                      className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950"
                    >
                      Host Your Space
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="banner-prev absolute left-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-red-600 sm:flex lg:left-8"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        className="banner-next absolute right-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-red-600 sm:flex lg:right-8"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 28px !important;
        }

        .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          width: 26px;
          border-radius: 8px;
          background: #dc2626;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}