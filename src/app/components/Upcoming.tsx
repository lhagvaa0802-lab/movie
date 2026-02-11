import { MovieCard } from "./MovieCard";

import Link from "next/link";
import { SeeMore } from "./SeeMore";
import { getUpcomingMovies } from "@/lib/apiPages"; 
import { FetchMovieDataType } from "../../lib/types";
type UpcomingProps = {
  className: string;
};

export const Upcoming = async ({ className }: UpcomingProps) => {
  const upcomingMoviesData: FetchMovieDataType = await getUpcomingMovies();
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between items-center mb-4 mx-8">
        <p className="font-semibold">Upcoming</p>

        <SeeMore url="/upcoming" className={className} />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {upcomingMoviesData.results.map((movie) => (
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
