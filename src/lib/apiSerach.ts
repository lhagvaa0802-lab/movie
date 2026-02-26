import type { FetchMovieDataType } from "@/lib/types";
import { options } from "./tmdb";

export const getSearch = async (
  searchValue: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const makeUrl = (p: number) => {
    const url = new URL("https://api.themoviedb.org/3/search/movie");
    url.searchParams.set("query", searchValue);
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", String(p));
    return url.toString();
  };

  let res = await fetch(makeUrl(page), options);

  // ✅ if last page fails, retry with page-1
  if (!res.ok && (res.status === 400 || res.status === 422) && page > 1) {
    res = await fetch(makeUrl(page - 1), options);
  }

  if (!res.ok) throw new Error("Failed to fetch search results");

  return res.json();
};



export const getDiscoverMovies = async (genreId?: string, page: number = 1) => {
  const safePage = Math.min(500, Math.max(1, Math.trunc(Number(page) || 1)));

  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", String(safePage));
  if (genreId) url.searchParams.set("with_genres", genreId);

  const res = await fetch(url.toString(), options);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(
      `Discover failed: status=${res.status} page=${safePage}\n${err}`,
    );
  }

  return res.json();
};