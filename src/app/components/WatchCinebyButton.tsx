"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Props = {
  movieId: number | string | undefined | null;
  className?: string;
};

export function WatchCinebyButton({ movieId, className }: Props) {
  const disabled = movieId == null || movieId === "";

  return (
    <Button
      className={`gap-2 ${className ?? ""}`}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        window.open(
          `https://www.cineby.gd/movie/${movieId}`,
          "_blank",
          "noopener,noreferrer",
        );
      }}
    >
      <Play className="h-4 w-4" />
      Watch
    </Button>
  );
}
