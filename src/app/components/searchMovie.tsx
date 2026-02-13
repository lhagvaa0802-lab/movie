"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, ChevronRight } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getSearch } from "@/lib/apiSerach";
import { Types } from "@/lib/types";

const baseImgUrl = "https://image.tmdb.org/t/p/w92"; // жижиг poster-д тохиромжтой

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Types[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const q = searchValue.trim();

    if (!q) {
      setMovies([]);
      setOpen(false);
      return;
    }

    setOpen(true);

    const timer = setTimeout(async () => {
      const data = await getSearch(q);
      setMovies(data.results);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="relative w-[520px]">
      <InputGroup className="w-full">
        <InputGroupInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          onFocus={() => {
            if (searchValue.trim()) setOpen(true);
          }}
        />
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
      </InputGroup>

      {/* Dropdown */}
      {open && (movies.length > 0 || searchValue.trim()) && (
        <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-2xl border bg-white shadow-xl z-50">
          <div className="max-h-[520px] overflow-y-auto">
            {movies.slice(0, 6).map((movie) => {
              const year =
                movie.release_date?.slice(0, 4) 
              

              const rating =
                typeof movie.vote_average

              const poster = `${baseImgUrl}${movie.poster_path}`
                

              return (
                <Link
                  key={movie.id}
                  href={`/${movie.id}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-zinc-50"
                  onClick={() => setOpen(false)}
                >
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                    {poster ? (
                      <Image
                        src={poster}
                        alt={movie.title ?? "Poster"}
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                      />
                    ) : (
                      <div className="h-14 w-14" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-zinc-900">
                      {movie.title ?? movie.title}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-zinc-900">{rating}</span>
                      <span>/ 10</span>
                    </div>

                    <p className="mt-1 text-sm text-zinc-500">{year}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span>See more</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer: See all */}
          <div className="border-t bg-white px-5 py-4">
           
              See all results for 
           
          </div>
        </div>
      )}
    </div>
  );
};
