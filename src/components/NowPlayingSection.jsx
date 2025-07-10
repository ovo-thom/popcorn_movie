import { fetchNowPlayingMovie } from "../../lib/tmdb";
import NowPlayingSlider from "./NowPlayingSlider";
import SectionTitle from "./SectionTitle";

export default async function NowPlayingSection() {
  const { results: movies } = await fetchNowPlayingMovie(1);

  return (
    <section className="py-8 sm:py-16 border-t border-t-cyan-500/50 w-full px-6 flex flex-col items-center justify-center">
      <SectionTitle underlineWidth="w-28">
        Films recommandés&nbsp;/&nbsp;Nouveautés
      </SectionTitle>

      <div className="max-w-7xl mx-auto w-full">
        <NowPlayingSlider movies={movies} />
      </div>
    </section>
  );
}
