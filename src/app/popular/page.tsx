import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { getPopularMovies } from "@/lib/apiPages";
import { FetchMovieDataType } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PopularMoviesProps = {
  searchParams: Promise<{page:string | undefined}>;
};

export default async function PopularMovies({
  searchParams,
}: PopularMoviesProps) {
  const { page } = await searchParams;
  const popularMoviesData: FetchMovieDataType = await getPopularMovies(
    page ?? 1,
  );
  const {total_pages}= await getPopularMovies(page)
  const pages =Array(total_pages)
  .fill(0)
  .map((_, index)=>index+1)
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Popular</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {popularMoviesData.results.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              imgPath={movie.poster_path}
              rating={movie.vote_average}
              name={movie.original_title}
            />
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            {Number(page) > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`?page=${Number(page) - 1}`} />
              </PaginationItem>
            )}

            {/* Jump to first */}
            {Number(page) > 3 && (
              <>
                <PaginationItem>
                  <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {pages.map((pageNum, index) => {
              const current = Number(page) || 1;
              const p = Number(pageNum);

              if (p < current - 2 || p > current + 2) return null;

              return (
                <PaginationItem key={index}>
                  <PaginationLink href={`?page=${p}`} isActive={p === current}>
                    {p}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext href={`?page=${Number(page) + 1}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
