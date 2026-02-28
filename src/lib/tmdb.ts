const BASE_URL = "https://api.themoviedb.org/3";

function getToken() {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) {
    throw new Error("TMDB_ACCESS_TOKEN is missing");
  }
  return token;
}

export async function tmdbFetch(path: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TMDB Error ${res.status}: ${text}`);
  }

  return res.json();
}
