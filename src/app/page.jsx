import { fetchMovieById } from "../../lib/tmdb";
import Header from "@/components/Header";

export default async function Home() {
  const movie = await fetchMovieById(11);
  return (
    <div className="h-screen text-[#FFFFFF] bg-[#121212]">
      {/* <h1>{movie.title}</h1> */}
      {/* <Header /> */}
    </div>
  );
}
