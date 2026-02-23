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
): Promise<FetchMovieDataType | undefined> => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US`;
    const res = await fetch(url, option);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
