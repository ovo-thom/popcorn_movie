"use client";

import Link from "next/link";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "../contexts/FavoritesContext";

export default function MovieCard({
  movie,
  showFavoriteButton = true,
  size = "medium",
  linkPath = null,
  className = "",
}) {
  const sizes = {
    small: {
      container: "w-32",
      textSize: "text-xs",
      titleSize: "text-sm",
      heartSize: "text-sm",
    },
    medium: {
      container: "w-full",
      textSize: "text-sm",
      titleSize: "text-sm",
      heartSize: "text-base md:text-xl",
    },
    large: {
      container: "w-full",
      textSize: "text-base",
      titleSize: "text-lg",
      heartSize: "text-xl",
    },
  };
  const { isFavorite, toggleFavorite } = useFavorites();
  const currentSize = sizes[size] || sizes.medium;

  const movieLink = linkPath || `/movie/${movie.id}`;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <div className={`${currentSize.container} ${className}`}>
      <Link href={movieLink}>
        <div className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-cyan-400/30 hover:shadow-cyan-500/50 hover:scale-105 transition-transform duration-200">
          <div className="relative">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-48 bg-gray-600 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🎬</span>
              </div>
            )}
          </div>

          <div className="p-2 flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <h3
                className={`text-white font-semibold ${currentSize.titleSize} truncate`}
              >
                {movie.title}
              </h3>
              {movie.vote_average > 0 && (
                <p className={`text-yellow-400 ${currentSize.textSize}`}>
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>
              )}
              {movie.release_date && (
                <p className={`text-gray-400 ${currentSize.textSize} mt-1`}>
                  {new Date(movie.release_date).getFullYear()}
                </p>
              )}
            </div>

            {showFavoriteButton && (
              <button
                onClick={handleFavoriteClick}
                className="hover:scale-105 hover:rotate-6 md:hover:scale-110 md:hover:rotate-12 transition-all duration-200 ease-in-out ml-2 flex-shrink-0"
              >
                {isFavorite(movie.id) ? (
                  <FaHeart
                    className={`${currentSize.heartSize} text-red-500`}
                  />
                ) : (
                  <FaRegHeart
                    className={`${currentSize.heartSize} text-red1`}
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
