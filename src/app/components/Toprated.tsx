import { MovieCard } from "./MovieCard";

import { MoveRight } from "lucide-react";
import { movies } from "./Movielist";
import { SeeMore } from "./SeeMore";
import { getTopRatedMovies } from "@/lib/apiTopRated";

type TopRatedProps = {
  className: string;
};
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

export const TopRated = async ({ className }: TopRatedProps) => {
  const topRatedMoviesData: FetchMovieDataType = await getTopRatedMovies();
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Top Rated</p>

        <SeeMore url="/toprated" className={className} />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {topRatedMoviesData.results.map((movie) => (
          <MovieCard
            key={movie.id}
            imgPath={movie.poster_path}
            rating={movie.vote_average}
            name={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
};
