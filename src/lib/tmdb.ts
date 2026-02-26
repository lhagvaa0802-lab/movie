const token = process.env.TMDB_ACCESS_TOKEN;

if (!token) {
  throw new Error("TMDB_ACCESS_TOKEN is missing");
}

export const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
