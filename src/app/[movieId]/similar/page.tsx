import Link from "next/link";
import { getSimilarMovie } from "@/lib/apiCredit";
import { MovieCard } from "@/app/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  const totalPages = Math.min(rawTotalPages, 500);

  const withPage = (p: number) => `?page=${p}`;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Similar movies</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center">
        {results.map((m: any) => (
          <Link key={m.id} href={`/${m.id}`}>
            <MovieCard
              imgPath={m.poster_path ?? "/no-image.png"}
              rating={m.vote_average}
              name={m.original_title ?? m.title}
            />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={withPage(currentPage - 1)} />
                </PaginationItem>
              )}

              {currentPage > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink href={withPage(1)}>1</PaginationLink>
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
                      href={withPage(pageNum)}
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
                    <PaginationLink href={withPage(totalPages)}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext href={withPage(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
