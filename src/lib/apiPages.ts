// ✅ src/lib/apiPages.ts
import "server-only";
import { FetchMovieDataType } from "./types";

const token = process.env.TMDB_ACCESS_TOKEN;

function authHeaders() {
  if (!token) throw new Error("TMDB_ACCESS_TOKEN is missing in .env.local");
  return {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
}

function clampPage(page: number) {
  return Math.min(500, Math.max(1, Math.trunc(page)));
}

async function tmdbFetch<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    headers: authHeaders(),
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`TMDB ${response.status}: ${err}`);
  }

  return response.json();
}

export const getPopularMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const safePage = clampPage(page);
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${safePage}`;

  const data = await tmdbFetch<FetchMovieDataType>(url);

  console.log(
    "[TMDB Popular] requested=",
    safePage,
    "returned page=",
    data.page,
    "firstId=",
    data.results?.[0]?.id,
  );

  return data;
};

export const getTopRatedMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const safePage = clampPage(page);
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${safePage}`;

  const data = await tmdbFetch<FetchMovieDataType>(url);

  console.log(
    "[TMDB TopRated] requested=",
    safePage,
    "returned page=",
    data.page,
    "firstId=",
    data.results?.[0]?.id,
  );

  return data;
};

export const getUpcomingMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const safePage = clampPage(page);
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${safePage}`;

  const data = await tmdbFetch<FetchMovieDataType>(url);

  console.log(
    "[TMDB Upcoming] requested=",
    safePage,
    "returned page=",
    data.page,
    "firstId=",
    data.results?.[0]?.id,
  );

  return data;
};
