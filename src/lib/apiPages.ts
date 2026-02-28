
import type { FetchMovieDataType } from "./types";
import { tmdbFetch } from "./tmdb";

function clampPage(page: number) {
  return Math.min(500, Math.max(1, Math.trunc(page)));
}

export const getPopularMovies = async (
  page = 1,
): Promise<FetchMovieDataType> => {
  return tmdbFetch(`/movie/popular?language=en-US&page=${clampPage(page)}`);
};

export const getTopRatedMovies = async (
  page = 1,
): Promise<FetchMovieDataType> => {
  return tmdbFetch(`/movie/top_rated?language=en-US&page=${clampPage(page)}`);
};

export const getUpcomingMovies = async (
  page = 1,
): Promise<FetchMovieDataType> => {
  return tmdbFetch(`/movie/upcoming?language=en-US&page=${clampPage(page)}`);
};
