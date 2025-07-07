import { LuPopcorn } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#121212] text-[#FFFFFF] h-32 border-b border-b-red1 grid grid-cols-3 items-center">
      <Link href="/" className="w-fit mx-auto">
        <div className="flex flex-col items-center text-center space-y-1">
          <h1 className="font-title text-lg lg:text-3xl font-semibold tracking-wide">
            <span className="text-red1">P</span>opCorn movie
          </h1>
          <div className="flex border border-blue1 rounded-full w-6 h-6 sm:w-9 sm:h-9 justify-center items-center sm:text-lg md:text-xl">
            <LuPopcorn />
          </div>
          <p className="font-title text-sm md:text-lg text-gray-300">
            <span className="text-blue1">P</span>opcorn film and chill
          </p>
        </div>
      </Link>

      <input
        type="search"
        className="w-full mx-auto h-8 rounded-xl placeholder:text-sm text-sm sm:text-base px-2 text-black bg-gray-200 outline-none focus:border-2 duration-100 focus:border-stone-400"
        placeholder="Rechercher"
      />
      <div className="flex items-baseline mx-auto space-x-2 border-x border-x-gray-700 hover:border-x-blue1 hover:duration-200 p-2 md:px-6">
        <button className="md:text-xl text-sm cursor-pointer hover:text-gray-300 duration-200">
          Favoris
        </button>
        <FaRegHeart className="text-yellow-500 text-base md:text-xl" />
      </div>
    </header>
  );
}
