import { fetchPopularMovies } from "../../../lib/tmdb";
import BackLink from "@/components/BackLink";
import MovieCard from "@/components/MovieCard";

export default async function PopularPage() {
  const page1 = await fetchPopularMovies(1);
  const page2 = await fetchPopularMovies(2);

  const uniqueMovies = Array.from(
    new Map([...page1.results, ...page2.results].map((m) => [m.id, m])).values()
  );

  return (
    <section className="bg-[#121212] w-full overflow-x-hidden sm:px-5">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-white mb-4 tracking-wide">
          Tous les films populaires
        </h1>
        <div className="w-20 h-[3px] bg-red1 mb-4 rounded"></div>
        <BackLink className="mb-6 text-slate-400 hover:text-gray-300 duration-200 mr-auto">
          ← Page d'accueil
        </BackLink>
        <div
          className="
          w-full
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
          gap-6
        "
        >
          {uniqueMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              linkPath={`/popular/${movie.id}`}
              size="medium"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
