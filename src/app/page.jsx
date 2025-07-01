import { fetchMovieById } from "../../lib/tmdb";

export default async function Home() {
  const movie = await fetchMovieById(11);
  return (
    <div className="h-screen bg-blue-950">
      <h1>{movie.title}</h1>
    </div>
  );
}
