import "server-only";
import type { FetchMovieDataType } from "./types";
import { options } from "./tmdb";

export const getPopularMovies = async (
  page: string | undefined = "1",
): Promise<FetchMovieDataType> => {
  const safePage =
    Number.isFinite(Number(page)) && Number(page) > 0
      ? Math.trunc(Number(page))
      : 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getTopRatedMovies = async (
  page: string | undefined = "1",
): Promise<FetchMovieDataType> => {
  const safePage =
    Number.isFinite(Number(page)) && Number(page) > 0
      ? Math.trunc(Number(page))
      : 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch top rated movies");

  return res.json();
};

export const getUpcomingMovies = async (
  page: string | undefined = "1",
): Promise<FetchMovieDataType> => {
  const safePage =
    Number.isFinite(Number(page)) && Number(page) > 0
      ? Math.trunc(Number(page))
      : 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch upcoming movies");

  return res.json();
};
