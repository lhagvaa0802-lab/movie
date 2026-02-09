import { movies } from "./Movielist";
import { MovieHero } from "./MovieHero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselHero = () => {
  return (
    <div>
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
    </div>
  );
};
