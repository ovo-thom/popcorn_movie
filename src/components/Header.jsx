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
    <header className="bg-[#121212] text-[#FFFFFF] h-32 border-b border-b-red1 flex justify-between w-full">
      <div className="flex items-center w-[90%] mx-auto">
        <Link href="/" className="">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-title text-base lg:text-xl font-semibold tracking-wide">
              <span className="text-red1">P</span>opCorn movie
            </h1>
            <div className="hidden md:block border p-2 rounded-full border-blue1">
              <LuPopcorn />
            </div>
            <p className="hidden md:block">
              <span className="text-blue1">P</span>opcorn film and chill
            </p>
          </div>
        </Link>

        <div className="flex-grow sm:mx-4 relative">
          <input
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-3/4 mx-auto block h-8 rounded-xl placeholder:text-sm text-sm sm:text-base sm:px-2 text-black bg-gray-200 outline-none focus:border-2 duration-100 focus:border-stone-400"
            placeholder="Rechercher un film..."
          />

          {(searchResults.length > 0 || isSearching) && (
            <div className="w-3/4 mx-auto block absolute top-full left-0 right-0 bg-white text-black rounded-lg max-h-96 overflow-y-auto z-50 mt-1">
              {isSearching ? (
                <div className="p-4 text-center text-gray-500">
                  Recherche...
                </div>
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

        <div className="flex items-baseline sm:space-x-2 sm:border-x sm:border-x-gray-700 sm:hover:border-x-blue1 hover:duration-200 p-2 px-3 md:px-6">
          <Link href="/favorites">
            <button className="hidden sm:block md:text-lg lg:text-xl text-base cursor-pointer hover:text-gray-300 duration-200">
              Favoris
            </button>
          </Link>
          <FaRegHeart className="text-yellow-500 text-xl md:text-lg lg:text-xl" />
        </div>
      </div>
    </header>
  );
}
