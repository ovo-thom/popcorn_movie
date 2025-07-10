"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import MovieCard from "./MovieCard";

export default function NowPlayingSlider({ movies }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
       loop                                      
      autoplay={{                               
        delay: 3000,           
        disableOnInteraction: false, 
      }}
      spaceBetween={16}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
    >
      {movies.map((m) => (
        <SwiperSlide key={m.id}>
          <MovieCard 
    movie={m} 
    linkPath={`/movie/${m.id}`}
    size="medium"
  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
