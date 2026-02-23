import Link from "next/link";
import { MovieCard } from "./MovieCard";

import { SeeMore } from "./SeeMore";
import { getTopRatedMovies } from "@/lib/apiPages";
import { FetchMovieDataType } from "../../lib/types";
type TopRatedProps = {
  className: string;
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
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              imgPath={movie.poster_path}
              rating={movie.vote_average}
              name={movie.original_title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
