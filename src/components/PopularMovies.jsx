import { fetchPopularMovies } from "../../lib/tmdb";

import Link from "next/link";
import SeeMoreButton from "./SeeMoreButton";

export default async function PopularMovies() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className="flex flex-col items-center py-16 px-5">
      <h2 className="font-title text-lg sm:text-xl md:text-3xl text-white tracking-wide mb-2">
        Films populaires
      </h2>
      <div className="w-20 h-[3px] bg-red1 mb-4 rounded"></div>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-[#1a1a1a] p-4 rounded-lg mb-4">
        {popularMovies.results.slice(0, 8).map((movie) => (
          <Link key={movie.id} href={`/popular/${movie.id}`}>
            <div
              key={movie.id}
              className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-neutral-400/30 hover:shadow-neutral-500/50 hover:scale-105 transition-transform duration-200"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="p-2">
                <h3 className="text-white font-semibold text-sm">
                  {movie.title}
                </h3>
                <p className="text-yellow-400 text-sm">
                  ⭐ {movie.vote_average}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/popular">
        <SeeMoreButton variant="red" />
      </Link>
    </div>
  );
}
