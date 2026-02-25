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
import { Genres } from "../components/Genres";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    query?: string;
    genre?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { page, query, genre } = await searchParams;

  const currentPage = Number(page) || 1;
  const searchValue = query ?? "";

  
  const data = genre
    ? await getDiscoverMovies(genre, currentPage)
    : await getSearch(searchValue, currentPage);

  const results = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;


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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">
          {genre
            ? "Movies by Genre"
            : `Search results for "${searchValue}"`}
        </p>
      </div>

      <div className="flex gap-6">
        {/* Movie Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10 flex-1">
          {results.map((movie: any) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                imgPath={movie.poster_path}
                rating={movie.vote_average}
                name={movie.original_title ?? movie.title}
              />
            </Link>
          ))}
        </div>

        {/* Genre Sidebar */}
        <div className="mt-10 w-[280px] shrink-0">
          <Genres />
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
}