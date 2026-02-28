import Link from "next/link";
import { getSimilarMovie } from "@/lib/apiCredit";
import { MovieCard } from "@/app/Components/MovieCard";
import PaginationBar from "@/app/Components/PagintaionBar";

type Props = {
  params: Promise<{ movieId: string }>;
  searchParams: Promise<{ page?: string }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { movieId } = await params;
  const sp = await searchParams;

  const currentPage = Math.max(1, Number(sp.page ?? 1) || 1);

  const data = await getSimilarMovie(movieId, currentPage);

  const results = data?.results ?? [];

  const rawTotalPages = data?.total_pages ?? 1;
 
     const totalPages = Math.min(data?.total_pages ?? 1, 500);

     const hrefForPage = (p: number) => `?page=${p}`;

 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Similar movies</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center">
        {results.map((m: any) => (
          <Link key={m.id} href={`/${m.id}`}>
            <MovieCard
              
              imgPath={m.poster_path}
              rating={m.vote_average}
              name={m.title}
            />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            hrefForPage={hrefForPage}
          />
        </div>
      )}
    </div>
  );
}
