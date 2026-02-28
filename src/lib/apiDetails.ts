
import { MovieDetails } from "@/lib/types";
import { tmdbFetch } from "./tmdb";

export const getDetailsMovies = async (
  movieId: string,
): Promise<MovieDetails> => {
  if (!movieId) throw new Error("movieId missing");

  return tmdbFetch(`/movie/${movieId}?language=en-US`);
};
