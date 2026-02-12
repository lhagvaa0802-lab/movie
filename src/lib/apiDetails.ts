import { MovieDetails } from "@/lib/types";
const token = process.env.TMDB_ACCESS_TOKEN;
const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getDetailsMovies = async (
  movieId: string,
): Promise<MovieDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    option,
  );
  const data = await response.json();
  return data;
};
