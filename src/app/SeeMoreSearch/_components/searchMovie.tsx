"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Search, Star, ChevronRight, Loader2 } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { getSearch } from "@/lib/apiSerach";

import { Types } from "@/lib/types";

const baseImgUrl = "https://image.tmdb.org/t/p/w92";

export const SearchInput = () => {
  const pathname = usePathname();

  const [searchValue, setSearchValue] = useState("");

  const [movies, setMovies] = useState<Types[]>([]);

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const q = searchValue.trim();

    if (!q) {
      setMovies([]);

      setOpen(false);

      setLoading(false);

      setHasSearched(false);

      return;
    }

    setOpen(true);

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const data = await getSearch(q);

        setMovies(data?.results ?? []);

        setHasSearched(true);
      } catch (e) {
        setMovies([]);

        setHasSearched(true);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const q = searchValue.trim();

  const seeAllHref = `/SeeMoreSearch?query=${encodeURIComponent(q)}&page=1`;

  return (
    <div className="relative w-[520px]">
      <InputGroup className="w-full">
        <InputGroupInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          onFocus={() => {
            if (q) setOpen(true);
          }}
        />
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
      </InputGroup>

      {open && q && (
        <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-2xl border bg-white shadow-xl z-50">
          <div className="max-h-[520px] overflow-y-auto">
            {loading && (
              <div className="flex items-center justify-center gap-2 px-5 py-6 text-sm text-zinc-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Searching...</span>
              </div>
            )}

            {!loading && hasSearched && movies.length === 0 && (
              <div className="px-5 py-6 text-sm text-zinc-500">
                No results found.
              </div>
            )}

            {!loading &&
              movies.slice(0, 6).map((movie) => {
                const year = movie.release_date?.slice(0, 4);

                const rating =
                  typeof movie.vote_average === "number"
                    ? movie.vote_average.toFixed(1)
                    : "—";

                const poster = movie.poster_path
                  ? `${baseImgUrl}${movie.poster_path}`
                  : null;

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
                        {movie.title ?? movie.original_title}
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

          {!loading && (
            <div className="border-t px-5 py-4">
              <Link
                href={seeAllHref}
                className="text-sm font-medium text-blue-600 hover:underline"
                onClick={() => setOpen(false)}
              >
                See all results for “{q}”
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
