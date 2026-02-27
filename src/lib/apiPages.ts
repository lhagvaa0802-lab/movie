import "server-only";
import type { FetchMovieDataType } from "./types";
import { options } from "./tmdb";

export const getPopularMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
   const safePage = Math.min(500, Math.max(1, Math.trunc(page)));

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getTopRatedMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
    const safePage = Math.min(
      500, 
      Math.max(1, Math.trunc(page)),
    );

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return res.json();
};



export const getUpcomingMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
    const safePage = Math.min(500, Math.max(1, Math.trunc(page)));

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${safePage}`,
    options,
  );

  if (!res.ok) throw new Error("Failed to fetch upcoming movies");

  return res.json();
};
