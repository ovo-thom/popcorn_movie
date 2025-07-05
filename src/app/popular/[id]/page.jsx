import { fetchMovieById } from "../../../../lib/tmdb";
import Image from "next/image";
import BackLink from "../../../components/BackLink";

export default async function Page({ params }) {
  const id = params.id;
  const movie = await fetchMovieById(id);

  return (
    <section className="flex-1 flex flex-col max-w-6xl mx-auto md:flex-row gap-6 p-6 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        <BackLink className="mb-6 text-gray-100 hover:text-gray-300 duration-200">← Retour aux films populaires</BackLink>
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
            width={350}
            height={525}
            className="rounded-xl shadow-lg flex-shrink-0 w-[250px] md:w-[300px] lg:w-[350px] h-auto object-cover"
            priority
          />

          <div className="text-white space-y-4">
            <h1 className="font-title text-2xl md:text-3xl lg:text-4xl">
              {movie.title}
            </h1>
            <p className="italic text-gray-300 text-sm md:text-base">
              {movie.tagline}
            </p>
            <p className="text-sm md:text-base text-gray-100">
              {movie.overview}
            </p>

            <ul className="text-sm md:text-base text-gray-400 space-y-1 pt-2">
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
        </div>
      </div>
    </section>
  );
}
