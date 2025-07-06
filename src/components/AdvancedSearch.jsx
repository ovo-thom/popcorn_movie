"use client";
import { useState, useEffect } from "react";
import { fetchMovieGenres, generateYears } from "../../lib/tmdb";
import { fetchDiscoverMovies } from "../../lib/tmdb";
import Link from "next/link";

export default function AdvancedSearch() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [years] = useState(generateYears());
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const genresData = await fetchMovieGenres();
      setGenres(genresData.genres);
    };
    loadGenres();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const filters = {
        genre: selectedGenre,
        year: selectedYear,
        sortBy: selectedSort,
      };

      const result = await fetchDiscoverMovies(filters);
      setMovies(result.results);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-16 border-t border-blue/50 bg-[#121212] text-gray-50">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="font-title tracking-wider text-lg sm:text-xl md:text-2xl xl:text-3xl my-8">
          Recherche avancée
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <select
            onChange={(e) => setSelectedGenre(e.target.value)}
            name="genre"
            className="text-gray-50 px-4 py-1 border-2 rounded-lg border-red bg-gray-800 outline-none"
          >
            <option value="">Choisir un genre</option>
            {genres.map((genre, index) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSelectedYear(e.target.value)}
            name="year"
            className="text-gray-50 px-4 py-1 border-2 rounded-lg border-red bg-gray-800 outline-none"
          >
            <option value="">Choisir une année</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            name="popular"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="text-gray-50 px-4 py-1 border-2 rounded-lg border-red bg-gray-800 outline-none"
          >
            <option value="">Trier par</option>
            <option value="popularity.desc">Popularité ↓</option>
            <option value="popularity.asc">Popularité ↑</option>
            <option value="vote_average.desc">Note ↓</option>
            <option value="vote_average.asc">Note ↑</option>
            <option value="release_date.desc">Date de sortie ↓</option>
            <option value="release_date.asc">Date de sortie ↑</option>
          </select>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue rounded-lg px-6 py-2 hover:bg-cyan-600 transition"
          >
            {loading ? "Recherche..." : "Rechercher"}
          </button>
        </div>
        {movies.length > 0 && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-[#1b1b1b] p-4 rounded-lg mb-4 ring-1 ring-cyan-700/25">
            {movies.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="bg-[#222222] rounded overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-transform duration-200">
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
        )}

        {movies.length === 0 && !loading && (
          <div className="text-center text-gray-400 mt-8">
            <p>Aucun film trouvé. Essayez avec d'autres critères.</p>
          </div>
        )}
      </div>
    </section>
  );
}
