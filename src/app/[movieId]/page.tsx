import { getDetailsMovies } from "@/lib/apiDetails";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCreditsMovies, getSimilarMovie } from "@/lib/apiCredit";
import Link from "next/link";
import { MovieCard } from "../components/MovieCard";
import { SeeMore } from "../components/SeeMore";
import { Types } from "@/lib/types";
import { Trailer } from "../components/trailer";

type Detailspageprops = {
  className: string;
  params: Promise<{ movieId: string }>;
};

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const Details = async ({ params, className }: Detailspageprops) => {
  const { movieId } = await params;

  const movie = await getDetailsMovies(movieId);
  if (!movie) return null;

  const credits = await getCreditsMovies(movieId);
  const similarMovieData = await getSimilarMovie(movieId);

  const similar: Types[] = similarMovieData?.results ?? [];

  const cast = credits?.cast ?? [];
  const crew = credits?.crew ?? [];

  const directors = crew
    .filter((person) => person.job === "Director")
    .map((d) => d.name)
    .join(" • ");

  const writers = crew
    .filter((person) => person.department === "Writing")
    .map((d) => d.name)
    .slice(0, 3)
    .join(" • ");

  const stars = cast
    .map((person) => person.name)
    .slice(0, 3)
    .join(" • ");

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        {/* TOP */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{movie.title}</h1>

            <div className="mt-1 text-sm text-zinc-500">
              {movie.release_date}
              {movie.release_date && " · "}
              {movie.adult ? "R" : "PG"}
              {movie.runtime && ` · ${movie.runtime}m`}
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-zinc-500">Rating</p>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">{movie.vote_average}/10</span>
            </div>
            <p className="text-xs text-zinc-400">{movie.vote_count} votes</p>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="mt-6 grid grid-cols-12 gap-4">
          <div className="hidden sm:block sm:col-span-4">
            <div
              className="h-[428px] w-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${baseImgUrl + movie.poster_path})`,
              }}
            />
          </div>

          <div className="col-span-12 sm:col-span-8">
            <div className="relative h-[240px] sm:h-[428px] overflow-hidden rounded-lg">
              {/* BACKDROP
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${baseImgUrl + movie.backdrop_path})`,
                }}
              /> */}

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Trailer movieId={movieId} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p>{movie.overview}</p>
        </div>

        {/* CREDITS */}
        <div className="mt-8 border-y divide-y">
          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold">Director</span>
            <span>{directors}</span>
          </div>

          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold">Writers</span>
            <span>{writers}</span>
          </div>

          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold">Stars</span>
            <span>{stars}</span>
          </div>
        </div>

        {/* SIMILAR */}
        <div className="mt-10">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">More like this</p>
            <SeeMore url={`/${movieId}/similar`} className={className} />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {similar.slice(0, 5).map((m) => (
              <Link href={`/${m.id}`} key={m.id}>
                <MovieCard
                  imgPath={m.poster_path}
                  rating={m.vote_average}
                  name={m.original_title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
