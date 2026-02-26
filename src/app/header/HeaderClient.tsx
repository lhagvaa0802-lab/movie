"use client";

import { SearchInput } from "../SeeMoreSearch/_components/searchMovie";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, Film, Search, X } from "lucide-react";
import { ModeToggle } from "../components/ModeToggle";
import { Badge } from "@/components/ui/badge";
import { useQueryState, parseAsInteger } from "nuqs";
import type { Genre } from "@/lib/types";

export const HeaderClient = ({ genres }: { genres: Genre[] }) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const [genreId] = useQueryState(
    "genre",
    parseAsInteger.withOptions({ shallow: false }),
  );

  return (
    <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[59px] items-center justify-between">
          <div
            className={`flex items-center gap-3 ${mobileSearchOpen ? "hidden lg:flex" : ""}`}
          >
            <Film className="text-indigo-700" />
            <p className="text-indigo-700 italic font-semibold">Movie Z</p>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ChevronDown className="h-4 w-4" />
                  Genre
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-80 p-2">
                <DropdownMenuLabel className="space-y-1">
                  <p className="font-semibold">Genres</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    See lists of movies by genre
                  </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <div className="grid grid-cols-2 gap-2 mt-5">
                  {genres.map((g) => (
                    <DropdownMenuItem key={g.id} asChild className="p-0">
                      <Link
                        href={`/SeeMoreSearch?genre=${g.id}&page=1`}
                        className="block w-full"
                      >
                        <Badge
                          variant={
                            Number(genreId) === g.id ? "default" : "outline"
                          }
                          className="w-full cursor-pointer flex items-center justify-between"
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

            <SearchInput />
          </div>

          <div
            className={`flex items-center gap-2 ${mobileSearchOpen ? "hidden lg:flex" : ""}`}
          >
            <Button
              size="icon"
              variant="outline"
              className="lg:hidden"
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </Button>

            <ModeToggle />
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="pb-3 lg:hidden">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Open genres"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-[320px] p-2">
                  <DropdownMenuLabel className="space-y-1">
                    <p className="font-semibold">Genres</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      See lists of movies by genre
                    </p>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <div className="grid grid-cols-2 gap-2 mt-5">
                    {genres.map((g) => (
                      <DropdownMenuItem key={g.id} asChild className="p-0">
                        <Link
                          href={`/SeeMoreSearch?genre=${g.id}&page=1`}
                          className="block w-full"
                        >
                          <Badge
                            variant={
                              Number(genreId) === g.id ? "default" : "outline"
                            }
                            className="w-full cursor-pointer flex items-center justify-between"
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

              <SearchInput />

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
