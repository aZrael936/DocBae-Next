'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function HeroCarouse() {
  return (
    <Carousel
      infiniteLoop
      transitionTime={500}
      interval={2000}
      autoPlay={true}
      // thumbWidth={100}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      showArrows={false}
    >
      <div>
        <Image
          className="rounded-lg"
          src="/Hero1.avif"
          alt="hero-image-1"
          height={400}
          width={708}
        />
      </div>
      <div>
        <Image
          className="rounded-lg"
          src="/Hero2.avif"
          alt="hero-image-2"
          height={400}
          width={708}
        />
      </div>
      <div>
        <Image
          className="rounded-lg"
          src="/Hero3.avif"
          alt="hero-image-3"
          height={400}
          width={708}
        />
      </div>
      <div>
        <Image
          className="rounded-lg"
          src="/Hero4.avif"
          alt="hero-image-4"
          height={400}
          width={708}
        />
      </div>
    </Carousel>
  );
}

export default HeroCarouse;
