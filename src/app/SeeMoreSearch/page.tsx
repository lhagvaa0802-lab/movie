import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { getSearch } from "@/lib/apiSerach";
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

type SearchedMovieProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

export default async function SearchedMovie({
  searchParams,
}: SearchedMovieProps) {
  const { page } = await searchParams;
  const searchedMoviesData = await getSearch();

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Popular</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {searchedMoviesData.results.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              imgPath={movie.poster_path}
              rating={movie.vote_average}
              name={movie.original_title}
            />
          </Link>
        ))}
      </div>
      <div className="mt-10"></div>
    </div>
  );
}
