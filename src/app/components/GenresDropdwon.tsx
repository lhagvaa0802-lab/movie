"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryState, parseAsInteger } from "nuqs";
import type { Genre } from "@/lib/types";

type Props = {
  genres: Genre[];
  /** default: "Genre" */
  label?: string;
  /** if true -> icon button (mobile), else normal button (desktop) */
  iconOnly?: boolean;
  /** dropdown width (Tailwind), default matches your current usage */
  contentClassName?: string;
};

export function GenresDropdown({
  genres,
  label = "Genre",
  iconOnly = false,
  contentClassName,
}: Props) {
  const [genreId] = useQueryState(
    "genre",
    parseAsInteger.withOptions({ shallow: false }),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {iconOnly ? (
          <Button size="icon" variant="outline" aria-label="Open genres">
            <ChevronDown className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="outline" className="gap-2">
            <ChevronDown className="h-4 w-4" />
            {label}
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className={
          contentClassName ?? (iconOnly ? "w-[320px] p-2" : "w-80 p-2")
        }
      >
        <DropdownMenuLabel className="space-y-1">
          <p className="font-semibold">Genres</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            See lists of movies by genre
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="mt-5 grid grid-cols-2 gap-2">
          {(genres ?? []).map((g) => (
            <DropdownMenuItem key={g.id} asChild className="p-0">
              <Link
                href={`/SeeMoreSearch?genre=${g.id}&page=1`}
                className="block w-full"
              >
                <Badge
                  variant={Number(genreId) === g.id ? "default" : "outline"}
                  className="flex w-full cursor-pointer items-center justify-between"
                >
                  {g.name}
                  <ChevronRight className="h-4 w-4" />
                </Badge>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
