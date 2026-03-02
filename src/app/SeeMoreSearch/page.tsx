import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { getSearch, getDiscoverMovies } from "@/lib/apiSerach";
import PaginationBar from "../components/PagintaionBar";
import { Suspense } from "react";
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

  const rawTotalPages = data?.total_pages ?? 1;
  const totalPages = Math.min(rawTotalPages, 500);

  const currentPage = Math.min(Math.max(1, currentPageRaw), totalPages);

  // ✅ baseQuery = all params except page (server -> client safe)
  const sp = new URLSearchParams();
  if (searchValue.trim()) sp.set("query", searchValue);
  if (genre) sp.set("genre", genre);
  const baseQuery = sp.toString(); // "" OR "query=batman&genre=28"

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

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <div className="flex justify-between mb-4 mx-8 items-center">
        <p className="font-semibold">
          {genre ? "Movies by Genre" : `Search results for "${searchValue}"`}
        </p>
      </div>

      <div className="lg:hidden">
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
          {results.slice(0, 6).map((movie: any) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                imgPath={movie.poster_path}
                rating={movie.vote_average}
                name={movie.original_title ?? movie.title}
              />
            </Link>
          ))}
        </div>

        <Suspense fallback={null}>
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            baseQuery={baseQuery}
          />
        </Suspense>

        <div className="mt-8">
          <Suspense fallback={null}>
            <GenresListServer />
          </Suspense>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-6">
          <div className="mt-10 grid flex-1 grid-cols-4 gap-6 place-items-center">
            {results.slice(0, 12).map((movie: any) => (
              <Link href={`/${movie.id}`} key={movie.id}>
                <MovieCard
                  imgPath={movie.poster_path}
                  rating={movie.vote_average}
                  name={movie.original_title ?? movie.title}
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 w-70 shrink-0">
            <Suspense fallback={null}>
              <GenresListServer />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={null}>
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            baseQuery={baseQuery}
          />
        </Suspense>
      </div>
    </div>
  );
}
