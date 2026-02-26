"use client";

import { useQueryState, parseAsInteger } from "nuqs";
import { useRouter } from "next/navigation";
import { Genres } from "./Genres";
import type { Genre } from "@/lib/types";

export function GenresListClient({ genres }: { genres: Genre[] }) {
  const router = useRouter();

  const [genreId, setGenreId] = useQueryState(
    "genre",
    parseAsInteger.withOptions({ shallow: false }),
  );

  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [, setQuery] = useQueryState("query");

  const onSelectGenre = async (id: number) => {
    const next = genreId === id ? null : id;

    await setGenreId(next); 
    await setPage(1);
    await setQuery(null);

    router.refresh(); 
  };

  return (
    <Genres genres={genres} activeGenre={genreId} onSelect={onSelectGenre} />
  );
}
