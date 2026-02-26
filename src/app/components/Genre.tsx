import { Genre as GenreType } from "@/lib/types";
import { Badge } from "lucide-react";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
};

export const Genre = ({ genre }: GenreProps) => {
  return (
    <Badge>
      {genre.name} <ChevronRight />
    </Badge>
  );
};
