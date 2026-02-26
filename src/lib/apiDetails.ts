import { MovieDetails } from "@/lib/types";
import { options } from "./tmdb";


export const getDetailsMovies = async (
  movieId: string,
): Promise<MovieDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  );
  const data = await response.json();
  return data;
};
