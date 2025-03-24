"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  imageClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  alt,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
  imageClassName = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next/prev navigation
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  // Handle single image case
  if (images.length === 0) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400">No image available</span>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {/* Current Image */}
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${imageClassName}`}
          priority={currentIndex === 0}
        />
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:hover:bg-gray-600 text-gray-800 rounded-full w-8 h-8 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        onClick={goToPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-full w-full" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 dark:hover:bg-gray-600 text-gray-800 rounded-full w-8 h-8 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-full w-full" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;