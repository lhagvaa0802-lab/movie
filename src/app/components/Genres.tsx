"use client";

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQueryState, parseAsInteger } from "nuqs";

const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const Genres = () => {
 const [genreId, setGenreId] = useQueryState(
   "genre",
   parseAsInteger.withOptions({ shallow: false }),
 );
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [, setQuery] = useQueryState("query"); 

  const onSelectGenre = (id: number) => {
    const next = genreId === id ? null : id;

    setGenreId(next);
    setPage(1);

   
    setQuery(null);
  };

  return (
    <div className="grid grid-cols-3 gap-2 mt-5">
      {GENRES.map((g) => {
        const isActive = genreId === g.id;

        return (
          <Badge
            key={g.id}
            variant={isActive ? "default" : "outline"}
            className="cursor-pointer flex items-center justify-between"
            onClick={() => onSelectGenre(g.id)}
          >
            <span className="truncate">{g.name}</span>
            <ChevronRight className="h-4 w-4 shrink-0" />
          </Badge>
        );
      })}
    </div>
  );
};
