import { MovieCard } from "../Components/MovieCard";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/apiPages";
import { FetchMovieDataType } from "@/lib/types";
import PaginationBar from "../Components/PagintaionBar";


type UpcomingMoviesProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

export default async function UpcomigMovies({
  searchParams,
}: UpcomingMoviesProps) {
  const { page } = await searchParams;

  const currentPage = Math.max(1, Number(page ?? 1) || 1);

  const upcomingMoviesData: FetchMovieDataType =
    await getUpcomingMovies(currentPage);
   const totalPages = Math.min(upcomingMoviesData?.total_pages ?? 1, 500);

  const hrefForPage = (p: number) => `?page=${p}`;

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 ">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">Upcoming</p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
        {upcomingMoviesData.results.slice(0, 10).map((movie) => (
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
