import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type PaginationBarProps = {
  currentPage: number;
  totalPages: number;
  hrefForPage: (p: number) => string;
};
export default function PaginationBar({
  currentPage,
  totalPages,
  hrefForPage,
}: PaginationBarProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent className="flex-nowrap gap-1">
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={hrefForPage(currentPage - 1)} />
            </PaginationItem>
          )}
          {currentPage > 3 && (
            <>
              <PaginationItem>
                <PaginationLink href={hrefForPage(1)} className="h-9 w-9 p-0">
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
                    href={hrefForPage(pageNum)}
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
                  href={hrefForPage(totalPages)}
                  className="h-9 w-9 p-0"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={hrefForPage(currentPage + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
