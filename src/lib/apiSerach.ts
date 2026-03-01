
import type { FetchMovieDataType } from "@/lib/types";
import { tmdbFetch } from "./tmdb";

function clampPage(page: number) {
  return Math.min(500, Math.max(1, Math.trunc(page)));
}

export const getSearch = async (
  searchValue: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const makePath = (p: number) => {
    const safePage = clampPage(p);
    const NewUrl = new URLSearchParams({
    query: searchValue,
    language: "en-US",
    page: String(safePage),
  });
    return `/search/movie?${NewUrl.toString()}`;
  };

  try {
    return await tmdbFetch(makePath(page));
  } catch (e: any) {
   
    const msg = String(e?.message ?? "");
    if (
      page > 1 &&
      (msg.includes(" 400") ||
        msg.includes(" 422") ||
        msg.includes("Error 400") ||
        msg.includes("Error 422"))
    ) {
      return tmdbFetch(makePath(page - 1));
    }
    throw e;
  }
};

export const getDiscoverMovies = async (
  genreId?: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const safePage = clampPage(Number(page) || 1);

   const NewUrlforDis = new URLSearchParams({
     language: "en-US",
     page: String(safePage),
   });
  if (genreId) NewUrlforDis.set("with_genres", genreId);

  // tmdbFetch already throws with TMDB status + text
  return tmdbFetch(`/discover/movie?${NewUrlforDis.toString()}`);
};
    