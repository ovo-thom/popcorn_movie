import { fetchPopularMovies } from "../../lib/tmdb";
import Link from "next/link";
import SeeMoreButton from "./SeeMoreButton";
import MovieCard from "./MovieCard";

export default async function PopularMovies() {
  const popularMovies = await fetchPopularMovies();

  return (
    <section className="flex flex-col items-center py-8 md:py-9 px-5">
      <h2 className="font-title text-2xl md:text-3xl text-white tracking-wide mb-2">
        Films populaires
      </h2>
      <div className="w-20 h-[3px] bg-red1 mb-6 rounded"></div>
      <div className=" max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-[#1a1a1a] p-4 rounded-lg mb-4">
        {popularMovies.results.slice(0, 8).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            linkPath={`/popular/${movie.id}`}
          />
        ))}
      </div>
      <Link href="/popular">
        <SeeMoreButton variant="red" />
      </Link>
    </section>
  );
}
