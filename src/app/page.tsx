import { Header } from "./components/Header";
import { MovieHero } from "./components/MovieHero";
import { movies } from "./components/Movielist";
import { Footer } from "./components/Footer";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Upcoming } from "./components/Upcoming";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <Carousel className="relative w-full">
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <MovieHero
                name={movie.name}
                rating={movie.rating}
                description={movie.description}
                img={movie.img}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-6 top-1/3  sm:left-4 sm:top-1/3 lg:left-6 lg:top-1/2 -translate-y-1/3 z-10" />
        <CarouselNext className="absolute right-6 top-1/3  sm:right-4 sm:top-1/3 lg:right-6 lg:top-1/2 -translate-y-1/3 z-10" />
      </Carousel>

      <Upcoming className="visible" />
      <TopRated className="visible" />
      <Popular className="visible" />
    </div>
  );
}
