import { MovieHero } from "./MovieHero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPopularMovies } from "@/lib/apiPopular";
type PopularMoviesDataType = {
  adult: boolean;
  backdrop_path: string;

  genre_ids: string[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type FetchMovieDataType = {
  page: string;
  results: PopularMoviesDataType[];
  total_pages: number;
};
export const CarouselHero = async () => {
  const popularMoviesData: FetchMovieDataType = await getPopularMovies();
  return (
    <div>
      <Carousel className="relative w-full">
        <CarouselContent>
          {popularMoviesData.results.map((movie) => (
            <CarouselItem key={movie.id}>
              <MovieHero
                key={movie.id}
                imgPath={movie.backdrop_path}
                rating={movie.vote_average}
                name={movie.original_title}
                img={movie.backdrop_path}
                description={movie.overview}
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
