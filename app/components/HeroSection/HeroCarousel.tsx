"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

// Define the aspect ratio based on your image dimensions
const aspectRatio = 708 / 350;
const imageHeight = 350;
const imageWidth = 708;

function HeroCarouse() {
  return (
    <div
      className="w-full h-auto"
      // This ensures container maintains aspect ratio before image loads
      style={{ aspectRatio: aspectRatio }}
    >
      <Carousel
        infiniteLoop
        transitionTime={500}
        interval={2000}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        className="h-full"
      >
        <div className="relative w-full h-full">
          <Image
            className="rounded-lg"
            src="/Hero1.avif"
            alt="hero-image-1"
            height={imageHeight}
            width={imageWidth}
            priority={true}
            sizes="(max-width: 768px) 100vw, 708px"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="rounded-lg"
            src="/Hero2.avif"
            alt="hero-image-2"
            height={imageHeight}
            width={imageWidth}
            sizes="(max-width: 768px) 100vw, 708px"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="rounded-lg"
            src="/Hero3.avif"
            alt="hero-image-3"
            height={imageHeight}
            width={imageWidth}
            sizes="(max-width: 768px) 100vw, 708px"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="rounded-lg"
            src="/Hero4.avif"
            alt="hero-image-4"
            height={imageHeight}
            width={imageWidth}
            sizes="(max-width: 768px) 100vw, 708px"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCarouse;
