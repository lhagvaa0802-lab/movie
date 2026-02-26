import { MovieCard } from "../components/MovieCard";
import Link from "next/link";

import { getSearch, getDiscoverMovies } from "@/lib/apiSerach";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import GenresListServer from "./_components/GenresListServer";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    query?: string;
    genre?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { page, query, genre } = await searchParams;

  const currentPageRaw = Number(page) || 1;
  const searchValue = query ?? "";

  const data = genre
    ? await getDiscoverMovies(genre, currentPageRaw)
    : await getSearch(searchValue, currentPageRaw);

  const results = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;

  // ✅ clamp
  const currentPage = Math.min(Math.max(1, currentPageRaw), totalPages);

  const withQuery = (p: number) => {
    const sp = new URLSearchParams();
    sp.set("page", String(p));
    if (searchValue.trim()) sp.set("query", searchValue);
    if (genre) sp.set("genre", genre);
    return `?${sp.toString()}`;
  };

  if (!genre && !searchValue.trim()) {
    return (
      <div className="mx-auto mt-10 max-w-7xl px-6 text-center">
        <p className="font-semibold">Search results</p>
        <p className="mt-4 text-sm text-zinc-500">
          Type something or select a genre.
        </p>
      </div>
    );
  }

const PaginationBar = () =>
  totalPages > 1 ? (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent className="flex-nowrap gap-1">
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={withQuery(currentPage - 1)} />
            </PaginationItem>
          )}

          {currentPage > 3 && (
            <>
              <PaginationItem>
                <PaginationLink href={withQuery(1)} className="h-9 w-9 p-0">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          {Array.from({ length: 5 }, (_, i) => currentPage - 2 + i).map(
            (pageNum) => {
              if (pageNum < 1 || pageNum > totalPages) return null;

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href={withQuery(pageNum)}
                    isActive={pageNum === currentPage}
                    className="h-9 w-9 p-0"
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            },
          )}

          {currentPage < totalPages - 2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href={withQuery(totalPages)}
                  className="h-9 w-9 p-0"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={withQuery(currentPage + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  ) : null;

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">
          {genre ? "Movies by Genre" : `Search results for "${searchValue}"`}
        </p>
      </div>

      {/* ===================== MOBILE (only) ===================== */}
      <div className="lg:hidden">
        {/* Movie Grid: mobile 2 cols */}
        <div className="mt-6 grid grid-cols-2 gap-6 place-items-center">
          {results.slice (0,6).map((movie: any) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                imgPath={movie.poster_path}
                rating={movie.vote_average}
                name={movie.original_title ?? movie.title}
              />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <PaginationBar />

        {/* Genre Sidebar bottom on mobile */}
        <div className="mt-8">
          <GenresListServer />
        </div>
      </div>

      {/* ===================== DESKTOP (only) ===================== */}
      <div className="hidden lg:block">
        <div className="flex gap-6">
          {/* Movie Grid: desktop 4 cols */}
          <div className="mt-10 grid flex-1 grid-cols-3 gap-6 place-items-center">
            {results.slice (0,9).map((movie: any) => (
              <Link href={`/${movie.id}`} key={movie.id}>
                <MovieCard
                  imgPath={movie.poster_path}
                  rating={movie.vote_average}
                  name={movie.original_title ?? movie.title}
                />
              </Link>
            ))}
          </div>

          {/* Genre Sidebar right */}
          <div className="mt-10 w-[280px] shrink-0">
            <GenresListServer />
          </div>
        </div>

        {/* Pagination */}
        <PaginationBar />
      </div>
    </div>
  );
}
