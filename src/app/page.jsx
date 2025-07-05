import PopularMovies from "@/components/PopularMovies";
import AdvancedSearch from "@/components/AdvancedSearch";

export default async function Home() {
  return (
    <div className=" text-[#FFFFFF] bg-[#121212]">
      <PopularMovies />
      <AdvancedSearch />
    </div>
  );
}
