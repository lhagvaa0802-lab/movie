import { Genres } from "./types";
const token = process.env.TMDB_ACCESS_TOKEN;
const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getGenre = async (): Promise<Genres> => {
  const response = await fetch(
    "https://api.themoviedb.org/3//genre/movie/list?language=en",
    option,
  );
  const data = await response.json();

  return data;
};
