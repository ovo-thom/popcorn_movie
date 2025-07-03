import { fetchMovieById } from "../../lib/tmdb";
import PopularMovies from "@/components/PopularMovies";

export default async function Home() {
  const movie = await fetchMovieById(11);
  return (
    <div className=" text-[#FFFFFF] bg-[#121212]">
      {/* <h1>{movie.title}</h1> */}
      <PopularMovies />
    </div>
  );
}
