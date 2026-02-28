import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { getTopRatedMovies } from "@/lib/apiPages";
import { FetchMovieDataType } from "@/lib/types";
import PaginationBar from "../components/PagintaionBar";

type TopRatedMoviesProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function TopRatedMovies({ searchParams }: TopRatedMoviesProps) {
  const { page } = await searchParams;

  const currentPage = Math.max(1, Number(page ?? 1) || 1);

  const topRatedMoviesData: FetchMovieDataType =
    await getTopRatedMovies(currentPage);
  const totalPages = Math.min(topRatedMoviesData?.total_pages ?? 1, 500);

  const hrefForPage = (p: number) => `?page=${p}`;

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Toprated</p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {topRatedMoviesData.results.slice(0, 10).map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              imgPath={movie.poster_path}
              rating={movie.vote_average}
              name={movie.original_title}
             
            />
          </Link>
        ))}
      </div>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </div>
  );
}
