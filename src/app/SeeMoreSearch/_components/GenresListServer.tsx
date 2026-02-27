import { getGenre } from "@/lib/apiGenre";
import { GenresListClient } from "./GenresListClient";

export default async function GenresListServer() {
  const genres = await getGenre();
  return <GenresListClient genres={genres} />;
}
