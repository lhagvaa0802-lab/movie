import { MovieDetails } from "@/lib/types";
const token =
  "eyJhbNkYzg1NyIsIm5iZiI6MTc3MDYwODMyMC4yNjODk1NmMwZGRhMDyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBMnwPwo4W58j6BY3FNxYKbUgfB3eKPXvW9D2XdU1s";
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


