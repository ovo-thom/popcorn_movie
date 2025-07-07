import { fetchNowPlayingMovie } from "../../lib/tmdb";

export default async function NowPlayingMovie() {
  const nowPlayingMovies = await fetchNowPlayingMovie();
  return (
    <section className="min-h-screen border-t border-t-cyan-500/50 w-full px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="font-title text-2xl md:text-3xl mt-8 mb-3">
          Films recommandés / Nouveautés
        </h2>
        <div className="w-28 h-[3px] bg-red1 mb-4 rounded"></div>
      </div>
      <div className="max-w-6xl bg-[#222222] mx-auto h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 my-6 border border-red-500/25 rounded-xl">
        {nowPlayingMovies.results.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-red-500/30 hover:shadow-red-600/50 hover:scale-105 transition-transform duration-200"
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
        ))}
      </div>
    </section>
  );
}
