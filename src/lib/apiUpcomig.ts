const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

const token =
  "ey"

const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getUpcomingMovies = async () => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
