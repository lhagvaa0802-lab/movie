const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const token = process.env.TMDB_ACCESS_TOKEN;

 
const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getPopularMovies = async () => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};

export const getTopRatedMovies = async () => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
