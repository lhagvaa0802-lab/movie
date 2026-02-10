const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MThkODk5NDdiODJjMzJmMGJmMTM2ZTdlN2NkYzg1NyIsIm5iZiI6MTc3MDYwODMyMC4yNjEsInN1YiI6IjY5ODk1NmMwZGRhMDQ2OWIwODVjYWViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBMnwPwo4W58j6BY3FNxYKbUgfB3eKPXvW9D2XdU1s";

const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getTopRatedMovies = async () => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
