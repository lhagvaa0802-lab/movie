import { MovieCard } from "./MovieCard";

import { MoveRight } from "lucide-react";
import { movies } from "./Movielist";
import { SeeMore } from "./SeeMore";
import Link from "next/link";
type TopRatedProps = {
  className: string;
};

export const TopRated = ({ className }: TopRatedProps) => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Top Rated</p>

        <SeeMore url="/toprated" className={className} />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.img}
            rating={movie.rating}
            name={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
