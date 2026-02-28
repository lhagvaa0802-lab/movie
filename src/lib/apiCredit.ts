
import type { MovieCredits } from "./types";
import type { FetchMovieDataType, VideoResponse } from "@/lib/types";
import { tmdbFetch } from "./tmdb";

function clampPage(page: number) {
  return Math.min(500, Math.max(1, Math.trunc(page)));
}

export const getCreditsMovies = async (
  movieId: string,
): Promise<MovieCredits> => {
  if (!movieId) throw new Error("movieId missing");
  return tmdbFetch(`/movie/${movieId}/credits`);
};

export const getSimilarMovie = async (
  movieId: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  if (!movieId) throw new Error("movieId missing");
  const safePage = clampPage(page);

  return tmdbFetch(`/movie/${movieId}/similar?language=en-US&page=${safePage}`);
};

export const getVideoMovie = async (
  movieId: string,
): Promise<VideoResponse> => {
  if (!movieId) throw new Error("movieId missing");
  return tmdbFetch(`/movie/${movieId}/videos`);
};
