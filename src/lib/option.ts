export const TmdbOption = () => {
  const token = process.env.TMDB_ACCESS_TOKEN;
  const option = {
    method: "GET",
    headers: {
      accept: "aplication/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
