"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

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
          <Link href={`/movie/${m.id}`}>
            <div className="bg-gray-800 rounded overflow-hidden shadow-red-500/30 hover:shadow-red-600/50 hover:scale-105 transition">
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                className="w-full h-auto"
              />
              <div className="p-2">
                <h3 className="text-white text-sm font-semibold truncate">
                  {m.title}
                </h3>
                <p className="text-yellow-400 text-sm">⭐ {m.vote_average}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
