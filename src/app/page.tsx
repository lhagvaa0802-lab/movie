import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Upcoming } from "./components/Upcoming";
import { CarouselHero } from "./components/CarouselHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <CarouselHero />
      <Upcoming className="visible" />
      <TopRated className="visible" />
      <Popular className="visible" />
    </div>
  );
}
