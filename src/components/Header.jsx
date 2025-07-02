import { LuPopcorn } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
export default function Header() {
  return (
    <header className="h-32 border-b border-b-[#FF005C] grid grid-cols-3 items-center">
      <div className="flex flex-col items-center text-center space-y-1">
        <h1 className="font-title text-lg lg:text-3xl font-semibold tracking-wide">
          <span className="text-[#FF005C]">P</span>opCorn movie
        </h1>
        <div className="flex border border-cyan-500 rounded-full w-6 h-6 sm:w-9 sm:h-9 justify-center items-center sm:text-lg md:text-xl">
          <LuPopcorn />
        </div>
        <p className="font-title text-sm md:text-lg text-gray-300">
          <span className="text-cyan-500">P</span>opcorn film and chill
        </p>
      </div>

      <input
        type="search"
        className="w-full mx-auto h-8 rounded-xl placeholder:text-sm text-sm sm:text-base px-2 text-black bg-gray-200 outline-none focus:border-2 duration-100 focus:border-stone-400"
        placeholder="Rechercher"
      />
      <div className="flex items-baseline mx-auto space-x-2 border-x border-x-gray-700 p-2 md:p-3">
        <button className="md:text-2xl text-sm cursor-pointer hover:text-red-400">
          Favoris
        </button>
        <FaRegHeart className="text-yellow-500 text-base md:text-xl" />
      </div>
    </header>
  );
}
