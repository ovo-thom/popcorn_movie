import { fetchNowPlayingMovie } from "../../lib/tmdb";
import NowPlayingSlider from "./NowPlayingSlider";

export default async function NowPlayingSection() {
  const { results: movies } = await fetchNowPlayingMovie(1);

  return (
    <section className="py-8 sm:py-16 border-t border-t-cyan-500/50 w-full px-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl flex flex-col items-center mx-auto">
        <h2 className="font-title text-2xl md:text-3xl mb-3 text-center">
          Films recommandés&nbsp;/&nbsp;Nouveautés
        </h2>
        <div className="w-28 h-[3px] bg-red1 mb-8 rounded" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <NowPlayingSlider movies={movies} />
      </div>
    </section>
  );
}
