import { MovieCard } from "../components/MovieCard";
import Link from "next/link";

import { getSearch } from "@/lib/apiSerach";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Genres } from "../components/Genres";

type SearchedMovieProps = {
  searchParams: Promise<{ page: string; query: string; genre?: string }>;
};

export default async function SearchedMovie({
  searchParams,
}: SearchedMovieProps) {
  const { page, query, genre } = await searchParams;

  console.log("genre: ", genre);

  const currentPage = Number(page) || 1;

  const searchValue = query ?? "";

  if (!searchValue.trim()) {
    return (
      <div className="mx-auto mt-10 max-w-7xl px-6 text-center">
        <p className="font-semibold">Search results</p>
        <p className="mt-4 text-sm text-zinc-500">Type something to search.</p>
      </div>
    );
  }

  const searchedMoviesData = await getSearch(searchValue, currentPage);

  const totalPages = searchedMoviesData.total_pages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const withQuery = (p: number) => `?query=${searchValue}&page=${p}`;

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Search results</p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
          {searchedMoviesData.results.slice(0, 6).map((movie) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                imgPath={movie.poster_path}
                rating={movie.vote_average}
                name={movie.original_title}
              />
            </Link>
          ))}
        </div>
        <Genres />
      </div>

      <div className="mt-10 flex justify-center">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={withQuery(currentPage - 1)} />
              </PaginationItem>
            )}

            {currentPage > 3 && (
              <>
                <PaginationItem>
                  <PaginationLink href={withQuery(1)}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {pages.map((pageNum) => {
              if (pageNum < currentPage - 2) return null;

              if (pageNum > currentPage + 2) return null;

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href={withQuery(pageNum)}
                    isActive={pageNum === currentPage}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {currentPage < totalPages - 2 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href={withQuery(totalPages)}>
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
    </div>
  );
}
