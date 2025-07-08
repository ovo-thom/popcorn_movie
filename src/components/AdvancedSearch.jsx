"use client";
import { useState, useEffect } from "react";
import {
  fetchMovieGenres,
  generateYears,
  fetchDiscoverMovies,
} from "../../lib/tmdb";
import Link from "next/link";
import SeeMoreButton from "./SeeMoreButton";

export default function AdvancedSearch() {
  const [genres, setGenres] = useState([]);
  const years = generateYears();
  const [selectedGenre, setGenre] = useState("");
  const [selectedYear, setYear] = useState("");
  const [selectedSort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  /* charge la liste des genres au montage */
  useEffect(() => {
    (async () => {
      const data = await fetchMovieGenres();
      setGenres(data.genres);
    })();
  }, []);

  /* -------- première recherche -------- */
  const handleSearch = async () => {
    setLoading(true);
    setPage(1); // repart à la page 1
    try {
      const data = await fetchDiscoverMovies({
        genre: selectedGenre,
        year: selectedYear,
        sortBy: selectedSort || "popularity.desc",
        page: 1,
      });
      setMovies(data.results); // on REMPLACE
    } finally {
      setLoading(false);
    }
  };

  /* -------- charger page suivante -------- */
  const handleMore = async () => {
    const next = page + 1;
    setLoading(true);
    try {
      const data = await fetchDiscoverMovies({
        genre: selectedGenre,
        year: selectedYear,
        sortBy: selectedSort || "popularity.desc",
        page: next,
      });
      setMovies((prev) => [...prev, ...data.results]); // Ajoute les films
      setPage(next);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 md:py-16 border-t border-blue1/50 bg-[#121212] text-gray-50">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-title text-2xl md:text-3xl mb-2">
          Recherche avancée
        </h2>
<div className="w-20 h-[3px] bg-red1 mb-4 rounded"></div>
        <div className="grid grid-cols-3 max-w-80 sm:max-w-5xl gap-4 my-8">
          <select
            value={selectedGenre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-1 rounded-lg border-2 border-red1 bg-gray-800 outline-none"
          >
            <option value="">Genre</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-1 rounded-lg border-2 border-red1 bg-gray-800 outline-none"
          >
            <option value="">Année</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={selectedSort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-1 rounded-lg border-2 border-red1 bg-gray-800 outline-none"
          >
            <option value="">Trier par</option>
            <option value="popularity.desc">Popularité ↓</option>
            <option value="popularity.asc">Popularité ↑</option>
            <option value="vote_average.desc">Note ↓</option>
            <option value="vote_average.asc">Note ↑</option>
            <option value="release_date.desc">Sortie ↓</option>
            <option value="release_date.asc">Sortie ↑</option>
          </select>
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="bg-blue1 rounded-lg px-3 py-1 sm:px-6 sm:py-2 mb-10 hover:bg-cyan-600 transition"
          >
            {loading && !movies.length ? "Recherche…" : "Rechercher"}
          </button>
        </div>

        {movies.length > 0 && (
          <>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5 bg-[#1b1b1b] p-4 rounded-lg mb-4 ring-1 ring-cyan-700/25">
              {movies.map((m) => (
                <Link key={m.id} href={`/movie/${m.id}`}>
                  <div className="bg-[#222222] rounded overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                      alt={m.title}
                      className="w-full h-auto"
                    />
                    <div className="p-2">
                      <h3 className="text-white text-sm font-semibold truncate">
                        {m.title}
                      </h3>
                      <p className="text-yellow-400 text-sm">
                        ⭐ {m.vote_average}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {!loading && <SeeMoreButton variant="blue" onClick={handleMore} />}
          </>
        )}

        {movies.length === 0 && !loading && (
          <p className="text-gray-400 mt-8">
            Aucun film trouvé. Essayez d’autres critères.
          </p>
        )}

        {loading && movies.length > 0 && (
          <p className="text-gray-400 mt-4 animate-pulse">Chargement…</p>
        )}
      </div>
    </section>
  );
}
