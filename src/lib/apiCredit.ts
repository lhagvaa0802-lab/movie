import { MovieCredits } from "./types";
import { options } from "./tmdb";
import { FetchMovieDataType } from "@/lib/types";

export const getCreditsMovies = async (
  movieId: string,
): Promise<MovieCredits> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options,
  );
  const data = await response.json();
  return data;
};

export const getSimilarMovie = async (
  movieId: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const safePage = Math.min(500, Math.max(1, Math.trunc(page)));

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch similar movies");

  return res.json();
};

import type { VideoResponse } from "@/lib/types";

export const getVideoMovie = async (
  movieId: string,
): Promise<VideoResponse> => {
  if (!movieId) throw new Error("movieId missing");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const res = await fetch(url, options);

  const data: VideoResponse = await res.json();

  if (!res.ok) {
    throw new Error(
      (data as any)?.status_message ?? "TMDB videos request failed",
    );
  }

  return data;
};
