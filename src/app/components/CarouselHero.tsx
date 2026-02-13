import { MovieHero } from "./MovieHero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPopularMovies } from "@/lib/apiPages";
import { getTrailerKey } from "@/lib/getTrailerKey";
import Link from "next/link";
import { FetchMovieDataType } from "@/lib/types";
export const CarouselHero = async () => {
  const popularMoviesData = await getPopularMovies();

const moviesWithTrailer = await Promise.all(
  (popularMoviesData?.results ?? []).map(
    async (movie: FetchMovieDataType["results"][number]) => {
      const trailerKey = await getTrailerKey(String(movie.id));
      return {
        ...movie,
        trailerKey,
      };
    },
  ),
);

  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {moviesWithTrailer.map((movie) => (
          <CarouselItem key={movie.id}>
            
              <MovieHero
                imgPath={movie.backdrop_path}
                rating={movie.vote_average}
                name={movie.original_title}
                description={movie.overview}
                trailerKey={movie.trailerKey}
              />
            
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};
