import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <Carousel className="carouselImg">
      <div>
        <img
          src="/Carousel-Images/landscape-1.jpg"
          alt="forest at sunset with river in foreground and mountains in background"
        />
      </div>
      <div>
        <img
          src="/Carousel-Images/landscape-2.jpg"
          alt="big lake landscape during a purple toned sunset with tree in foreground and mountains in background"
        />
      </div>
      <div>
        <img
          src="/Carousel-Images/landscape-3.jpg"
          alt="landscape of blue coloured mountain ranges with sunrise colours in background"
        />
      </div>
    </Carousel>
  );
}
