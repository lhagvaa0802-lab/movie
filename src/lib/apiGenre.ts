
import type { Genres, Genre } from "./types";
import { tmdbFetch } from "./tmdb";

export const getGenre = async (): Promise<Genre[]> => {
  const data: Genres = await tmdbFetch("/genre/movie/list?language=en-US");

  return data.genres ?? [];
};
