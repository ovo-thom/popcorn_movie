"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import MovieCard from "@/components/MovieCard";
import BackLink from "@/components/BackLink";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section className="bg-[#121212] min-h-screen py-8 sm:px-5">
      <div className="max-w-7xl mx-auto px-4">
        <BackLink className="mb-6 text-gray-100 hover:text-gray-300 duration-200">
          ← Retour à l'accueil
        </BackLink>

        <h1 className="font-title text-3xl md:text-4xl text-white text-center mb-3">
          Mes Films Favoris
        </h1>
        <div className="w-20 h-[3px] bg-red1 mb-8 rounded mx-auto"></div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} size="medium" />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-16">
            <p className="text-xl mb-4">Aucun film en favoris pour le moment</p>
            <p>Ajoutez des films à vos favoris en cliquant sur ❤️</p>
          </div>
        )}
      </div>
    </section>
  );
}
