import { FetchMovieDataType } from "./types";

const token = process.env.TMDB_ACCESS_TOKEN;
// const token =
// "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTg2ZDQ5YWMzOWU2ZjA5ZjdiNzZhMGMzMDgxN2NiYSIsIm5iZiI6MTc3MDYwODMyMC4yNjEsInN1YiI6IjY5ODk1NmMwZGRhMDQ2OWIwODVjYWViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zCT_Tj-czyrmMHh8STW_GVKn_FiuOJTLvFjpbyebgTs";
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
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`;
    const res = await fetch(url, option);
    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }
    return res.json();
  } catch (error) {
    console.error("Search API Error:", error);
    throw error;
  }
};
