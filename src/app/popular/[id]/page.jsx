import { fetchMovieById } from "../../../../lib/tmdb"; // ajuste le chemin si besoin
import Image from "next/image"; // pour optimiser l’affiche

export default async function Page({ params }) {
  const id = params.id; 
  const movie = await fetchMovieById(id); 


  return (
    <section className="bg-[#121212] flex flex-col md:flex-row gap-6 p-6 w-full">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width={350}
        height={525}
        className="rounded-xl shadow-lg"
        priority
      />

      <div className="text-white space-y-3">
        <h1 className="font-title text-3xl md:text-4xl">{movie.title}</h1>
        <p className="italic text-gray-300">{movie.tagline}</p>
        <p>{movie.overview}</p>

        <ul className="text-sm text-gray-400 space-y-1">
          <li>
            <strong>Date :</strong> {movie.release_date}
          </li>
          <li>
            <strong>Durée :</strong> {movie.runtime} min
          </li>
          <li>
            <strong>Genres :</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </li>
          <li>
            <strong>Note :</strong> ⭐ {movie.vote_average}
          </li>
        </ul>
      </div>
    </section>
  );
}
