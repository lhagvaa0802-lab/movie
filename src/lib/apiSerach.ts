import { FetchMovieDataType } from "./types";

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
): Promise<FetchMovieDataType> => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US`;
  const res = await fetch(url, option);

  const data = await res.json();

  console.log("TMDB similar status:", res.status);
  if (!res.ok) {
    console.log("TMDB similar error body:", data);
    throw new Error(data?.status_message ?? "TMDB similar request failed");
  }

  return data;
};
