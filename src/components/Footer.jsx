export default function Footer() {
  return (
    <footer className="text-[#FFFFFF] bg-[#121212] flex justify-center items-center h-20 border-t border-t-[#06B6D4]">
      <div
        className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base text-center
"
      >
        <a
          href="https://github.com/ovo-thom/popcorn_movie"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF005C] transition-colors"
        >
          Lien Github
        </a>
        <p>&bull;</p>
        <a
          href="https://www.linkedin.com/in/thomas-thonnard-a520b72b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF005C] transition-colors"
        >
          Linkedin
        </a>
        <p>&bull;</p>
        <p>&#169;</p>
        <p>2025 Popcorn Movie</p>
      </div>
    </footer>
  );
}
