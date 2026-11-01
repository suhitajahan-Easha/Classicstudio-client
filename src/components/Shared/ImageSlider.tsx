"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

const ImageSlider = ({ images, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const studioImages = images?.length ? images : [];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % studioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + studioImages.length) % studioImages.length
    );
  };

  return (
    <div className="relative h-70 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] sm:h-100 lg:h-120">
      {studioImages.length > 0 ? (
        <Image
          src={studioImages[currentIndex]}
          alt={`${title} image ${currentIndex + 1}`}
          height={600}
          width={700}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-gray-400 dark:text-neutral-500">
          No image available
        </div>
      )}

      {studioImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {studioImages.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;