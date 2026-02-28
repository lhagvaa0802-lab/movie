
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
    const sp = new URLSearchParams();
    sp.set("query", searchValue);
    sp.set("language", "en-US");
    sp.set("page", String(safePage));
    return `/search/movie?${sp.toString()}`;
  };

  try {
    return await tmdbFetch(makePath(page));
  } catch (e: any) {
    // ✅ if last page fails, retry with page-1
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

  const sp = new URLSearchParams();
  sp.set("language", "en-US");
  sp.set("page", String(safePage));
  if (genreId) sp.set("with_genres", genreId);

  // tmdbFetch already throws with TMDB status + text
  return tmdbFetch(`/discover/movie?${sp.toString()}`);
};
