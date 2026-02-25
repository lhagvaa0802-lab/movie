import type { FetchMovieDataType } from "@/lib/types";
const token = process.env.TMDB_ACCESS_TOKEN;
const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getSearch = async (
  searchValue: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", searchValue);
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), option);
  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json();
};

export const getDiscoverMovies = async (genreId?: string, page: number = 1) => {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", String(page));
console.log("FETCH URL:", url.toString());
  if (genreId) url.searchParams.set("with_genres", genreId);

  const res = await fetch(url.toString(), option);
  if (!res.ok) throw new Error("Failed to fetch discover movies");
  return res.json();
};