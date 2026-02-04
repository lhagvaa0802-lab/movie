import { MovieCard } from "./MovieCard";

import { MoveRight } from "lucide-react";
import { movies } from "./Movielist";

export const TopRated = () => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8">
        <p className="font-semibold">Top Rated</p>
        <div className="flex gap-2 items-center">
          <button>See more</button>
          <MoveRight size={10} />
        </div>
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
