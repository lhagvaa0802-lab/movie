import Link from "next/link";
import { getSimilarMovie } from "@/lib/apiCredit";
import { MovieCard } from "@/app/components/MovieCard";

type Props = {
  params: Promise<{ movieId: string }>;
};

export default async function Page({ params }: Props) {
  const { movieId } = await params;

  const data = await getSimilarMovie(movieId);
  const results = data?.results ?? [];

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Similar movies</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center">
        {results.map((m: any) => (
          <Link key={m.id} href={`/${m.id}`}>
            <MovieCard
              imgPath={m.poster_path ?? "/no-image.png"}
              rating={m.vote_average}
              name={m.original_title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
