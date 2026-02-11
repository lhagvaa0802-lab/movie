const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const token =
  "eyJ"

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
