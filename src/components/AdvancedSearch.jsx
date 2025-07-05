"use client";
import { useState, useEffect } from "react";
import { fetchMovieGenres, generateYears } from "../../lib/tmdb";

export default function AdvancedSearch() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [years] = useState(generateYears());
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const loadGenres = async () => {
      const genresData = await fetchMovieGenres();
      setGenres(genresData.genres);
    };
    loadGenres();
  }, []);

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
            className="text-gray-50text-gray-50 px-4 py-1 border-2 rounded-lg border-red bg-gray-800 outline-none"
          >
            <option value="">Choisir popularité</option>
            <option value="">Action</option>
            <option value="">Comédie</option>
            <option value="">Drame</option>
            <option value="">Horreur</option>
            <option value="">Romance</option>
          </select>
          <button
            type="submit"
            className="bg-blue rounded-lg px-6 py-2 hover:bg-cyan-600 transition"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
}
