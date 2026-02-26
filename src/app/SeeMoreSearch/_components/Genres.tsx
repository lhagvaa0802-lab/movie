"use client";

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Genre = {
  id: number;
  name: string;
};

type GenresProps = {
  genres: Genre[];
  activeGenre: number | null;
  onSelect: (id: number) => void;
};

export const Genres = ({ genres, activeGenre, onSelect }: GenresProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-5">
      {genres.map((genre) => {
        const isActive = activeGenre === genre.id;

        return (
          <Badge
            key={genre.id}
            variant={isActive ? "default" : "outline"}
            className="cursor-pointer flex items-center justify-between"
            onClick={() => onSelect(genre.id)}
          >
            <span>{genre.name}</span>
            <ChevronRight className="h-4 w-4" />
          </Badge>
        );
      })}
    </div>
  );
};
