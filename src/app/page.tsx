import { Popular } from "./Components/Popular";
import { TopRated } from "./Components/TopRated";
import { Upcoming } from "./Components/Upcoming";
import { CarouselHero } from "./Components/CarouselHero";

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
