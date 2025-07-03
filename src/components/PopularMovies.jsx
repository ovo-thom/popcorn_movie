import { fetchPopularMovies } from "../../lib/tmdb";

export default async function PopularMovies() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className="flex flex-col items-center pt-16 px-5">
      <h2 className="font-title text-lg sm:text-xl md:text-3xl mb-4 text-white tracking-wide">
        Films populaires
      </h2>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-slate-700 p-4 rounded-lg mb-4">
        {popularMovies.results.slice(0, 8).map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-neutral-400 hover:scale-105 transition-transform duration-200"
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
              <p className="text-yellow-400 text-sm">⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
