const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MThkODk5NDdiODJjMzJmMGJmMTM2ZTdlN2NkYzg1NyIsIm5iZiI6MTc3MDYwODMyMC4yNjEsInN1YiI6IjY5ODk1NmMwZGRhMDQ2OWIwODVjYWViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBMnwPwo4W58j6BY3FNxYKbUgfB3eKPXvW9D2XdU1s";

const option = {
  method: "GET",
  headers: {
    accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getDetailsMovies = async (
  movieId: string,
): Promise<MovieDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    option,
  );
  const data = await response.json();
  return data;
};

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
