"use client";

import { LuPopcorn } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useState, useCallback } from "react";
import { fetchSearchMovies } from "../../lib/tmdb";

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(
    debounce(async (term) => {
      if (term.length > 2) {
        setIsSearching(true);
        try {
          const data = await fetchSearchMovies(term);
          setSearchResults(data.results || []);
        } catch (error) {
          console.error("Erreur de recherche:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleBlur = () => {
    setTimeout(() => setSearchResults([]), 200);
  };

  return (
    <header className="bg-[#121212] text-[#FFFFFF] h-32 border-b border-b-red1 grid grid-cols-3 items-center relative">
      <Link href="/" className="w-fit mx-auto">
        <div className="flex flex-col items-center text-center space-y-1">
          <h1 className="font-title text-lg lg:text-3xl font-semibold tracking-wide">
            <span className="text-red1">P</span>opCorn movie
          </h1>
          <div className="flex border border-blue1 rounded-full w-6 h-6 sm:w-9 sm:h-9 justify-center items-center sm:text-lg md:text-xl">
            <LuPopcorn />
          </div>
          <p className="font-title text-sm md:text-lg text-gray-300">
            <span className="text-blue1">P</span>opcorn film and chill
          </p>
        </div>
      </Link>

      <div className="relative w-full mx-auto">
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full h-8 rounded-xl placeholder:text-sm text-sm sm:text-base px-2 text-black bg-gray-200 outline-none focus:border-2 duration-100 focus:border-stone-400"
          placeholder="Rechercher un film..."
        />

        {/* Dropdown des résultats */}
        {(searchResults.length > 0 || isSearching) && (
          <div className="absolute top-full left-0 right-0 bg-white text-black rounded-lg shadow-lg max-h-96 overflow-y-auto z-50 mt-1">
            {isSearching ? (
              <div className="p-4 text-center text-gray-500">Recherche...</div>
            ) : (
              searchResults.slice(0, 8).map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                  className="flex items-center p-3 hover:bg-gray-100 border-b last:border-b-0"
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      className="w-12 h-16 object-cover rounded mr-3"
                    />
                  ) : (
                    <div className="w-12 h-16 bg-gray-300 rounded mr-3 flex items-center justify-center">
                      <span className="text-xs text-gray-500">?</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{movie.title}</h3>
                    <p className="text-xs text-gray-600">
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "N/A"}
                    </p>
                    {movie.vote_average > 0 && (
                      <p className="text-xs text-yellow-600">
                        ⭐ {movie.vote_average.toFixed(1)}
                      </p>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>

      <div className="flex items-baseline mx-auto space-x-2 border-x border-x-gray-700 hover:border-x-blue1 hover:duration-200 p-2 md:px-6">
        <Link href="/favorites">
          <button className="md:text-xl text-sm cursor-pointer hover:text-gray-300 duration-200">
            Favoris
          </button>
        </Link>
        <FaRegHeart className="text-yellow-500 text-base md:text-xl" />
      </div>
    </header>
  );
}
