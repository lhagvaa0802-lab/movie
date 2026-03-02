import { getGenre } from "@/lib/apiGenre";
import { GenresListClient } from "./GenresListClient";
import { Suspense } from "react";
export default async function GenresListServer() {
  const genres = await getGenre();
  return (
    <Suspense fallback={null}>
      <GenresListClient genres={genres} />
    </Suspense>
  );
}
