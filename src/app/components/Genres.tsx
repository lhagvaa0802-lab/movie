"use client";

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQueryState } from "nuqs";

export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const Genres = () => {
  const [genre, setGenre] = useQueryState("genre");

  const onSelectGenre = () => {
    setGenre("  hghyg");
  };

  return (
    <div className="grid grid-cols-3 gap-2 mt-5">
      {genres.map((genre) => (
        <Badge key={genre} variant="outline" onClick={onSelectGenre}>
          {genre} {<ChevronRight />}
        </Badge>
      ))}
    </div>
  );
};
