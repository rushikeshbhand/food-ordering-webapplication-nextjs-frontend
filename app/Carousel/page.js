'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "/images/slide-one.jpg", alt: "Slide One" },
    { src: "/images/slide-two.jpg", alt: "Slide Two" },
    { src: "/images/slide-three.jpg", alt: "Slide Three" },
    { src: "/images/slide-four.jpg", alt: "Slide Four" },
    { src: "/images/slide-five.jpg", alt: "Slide Five" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full xl:h-custom-height">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${index === currentIndex ? '' : 'hidden'}`}
        >
          <Image src={slide.src} alt={slide.alt} width={500} height={500} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${(index - 1 + slides.length) % slides.length + 1}`}
              className="btn btn-circle"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex((index - 1 + slides.length) % slides.length);
              }}
            >
              ❮
            </a>
            <a
              href={`#slide${(index + 1) % slides.length + 1}`}
              className="btn btn-circle"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex((index + 1) % slides.length);
              }}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
