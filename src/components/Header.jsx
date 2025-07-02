import { LuPopcorn } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
export default function Header() {
  return (
    // <header className="h-20 border-b border-b-[#FF005C] flex justify-between items-center px-4">
    <header className="h-32 border-b border-b-[#FF005C] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
      <div className="flex flex-col items-center text-center space-y-1">
        <h1 className="font-title text-3xl font-semibold tracking-wide">
          <span className="text-[#FF005C]">P</span>opCorn movie
        </h1>
        <div className="flex border border-cyan-500 rounded-full w-9 h-9 justify-center items-center text-xl">
          <LuPopcorn />
        </div>
        <p className="font-title text-sm text-gray-300">
          <span className="text-cyan-500">P</span>opcorn film and chill
        </p>
      </div>

      <input
        type="search"
        className="w-full h-8 rounded-xl text-base px-2 text-black bg-gray-200 outline-none focus:border-2 duration-100 focus:border-stone-400"
        placeholder="Rechercher"
      />
      <div className="flex items-baseline mx-auto space-x-2 border-x border-x-gray-700 p-3">
        <button className="text-2xl cursor-pointer hover:text-pink-500">
          Favoris
        </button>
        <FaRegHeart className="text-yellow-500 text-xl" />
      </div>
    </header>
  );
}
