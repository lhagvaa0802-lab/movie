import type { VideoItem } from "@/lib/types";
import { getVideoMovie } from "./apiCredit";

export const getTrailerKey = async (
  movieId: string,
): Promise<string | null> => {
  const data = await getVideoMovie(movieId);
  const videos: VideoItem[] = data?.results ?? [];

 const picked =
   videos.find(
     (v) => v.site === "YouTube" && v.type === "Trailer" && v.official,
   ) ??
   videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ??
   videos.find((v) => v.site === "YouTube" && v.type === "Teaser") ??
   videos.find((v) => v.site === "YouTube");


  return picked?.key ?? null;
};
