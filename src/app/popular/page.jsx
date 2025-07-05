import Link from "next/link";
import Image from "next/image";
import { fetchPopularMovies } from "../../../lib/tmdb";
import BackLink from "@/components/BackLink";

export default async function PopularPage() {
  const page1 = await fetchPopularMovies(1);
  const page2 = await fetchPopularMovies(2);

  const uniqueMovies = Array.from(
    new Map([...page1.results, ...page2.results].map((m) => [m.id, m])).values()
  );

  return (
    <section className="bg-[#121212] w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-white mb-6 tracking-wide">
          Tous les films populaires
        </h1>
        <BackLink className="mb-6 text-gray-100 hover:text-gray-300 duration-200 mr-auto">
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
            <Link
              key={movie.id}
              href={`/popular/${movie.id}`}
              className="group"
            >
              <div
                className="
                bg-gray-800 rounded-xl overflow-hidden shadow-md
                transition-transform duration-200 group-hover:scale-105
              "
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  width={300}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-2">
                  <h3 className="text-white font-semibold text-sm truncate">
                    {movie.title}
                  </h3>
                  <p className="text-yellow-400 text-xs sm:text-sm">
                    ⭐ {movie.vote_average}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
