import { MovieCredits } from "./types";
import { Video } from "./types";

const token = process.env.TMDB_ACCESS_TOKEN;
const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getCreditsMovies = async (
  movieId: string,
): Promise<MovieCredits> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    option,
  );
  const data = await response.json();
  return data;
};

export const getSimilarMovie = async (movieId: string) => {
  if (!movieId) throw new Error("movieId missing");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
  const res = await fetch(url, option);

  const data = await res.json();

  console.log("TMDB similar status:", res.status);
  if (!res.ok) {
    console.log("TMDB similar error body:", data);
    throw new Error(data?.status_message ?? "TMDB similar request failed");
  }

  return data;
};



import type { VideoResponse } from "@/lib/types";

export const getVideoMovie = async (
  movieId: string,
): Promise<VideoResponse> => {
  if (!movieId) throw new Error("movieId missing");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const res = await fetch(url, option);

  const data: VideoResponse = await res.json();

  if (!res.ok) {
    throw new Error(
      (data as any)?.status_message ?? "TMDB videos request failed",
    );
  }

  return data;
};
