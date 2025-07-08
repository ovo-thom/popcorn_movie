import { fetchNowPlayingMovie } from "../../lib/tmdb";
import NowPlayingSlider from "./NowPlayingSlider";

export default async function NowPlayingSection() {
  const { results: movies } = await fetchNowPlayingMovie(1);

  return (
    <section className="min-h-screen border-t border-t-cyan-500/50 w-full px-6">
      <div className="max-w-5xl flex flex-col items-center mx-auto">
        <h2 className="font-title text-2xl md:text-3xl mt-8 mb-3">
          Films recommandés&nbsp;/&nbsp;Nouveautés
        </h2>
        <div className="w-28 h-[3px] bg-red1 mb-8 rounded" />
      </div>

      <div className="max-w-7xl mx-auto">
        <NowPlayingSlider movies={movies} />
      </div>
    </section>
  );
}
