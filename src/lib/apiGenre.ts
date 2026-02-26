import type { Genres, Genre } from "./types";
import { options } from "./tmdb";


const token = process.env.TMDB_ACCESS_TOKEN;

export const getGenre = async (): Promise<Genre[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
    options,
  );

  const data: Genres = await response.json();

  return data.genres; // ✅ return array only
};
