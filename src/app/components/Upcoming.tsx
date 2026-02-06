import { MovieCard } from "./MovieCard";
import { movies } from "./Movielist";

import { SeeMore } from "./SeeMore";

type UpcomingProps = {
  className: string;
};

export const Upcoming = ({ className }: UpcomingProps) => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between items-center mb-4 mx-8">
        <p className="font-semibold">Upcoming</p>

        <SeeMore url="/upcoming" className={className} />
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
