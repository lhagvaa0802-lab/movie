// const urlPopular = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
// const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;

// const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;

const token = process.env.TMDB_ACCESS_TOKEN;

const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getPopularMovies = async (page?: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&${page ?? 1}`,
    option,
  );
  const data = await response.json();
  return data;
};

export const getTopRatedMovies = async (page?: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&${page ?? 1}`,
    option,
  );
  const data = await response.json();
  return data;
};

export const getUpcomingMovies = async (page?: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page ?? 1}`,
    option,
  );
  const data = await response.json();
  return data;
};
