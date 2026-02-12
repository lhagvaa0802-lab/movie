import { getDetailsMovies } from "@/lib/apiDetails";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCreditsMovies } from "@/lib/apiCredit";
import { getSimilarMovie } from "@/lib/apiCredit";
import Link from "next/link";
import { MovieCard } from "../components/MovieCard";
import { SeeMore } from "../components/SeeMore";
type Detailspageprops = {
  className: string;
  params: Promise<{ movieId: string }>;
};


const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const Details = async ({ params, className }: Detailspageprops) => {
  const { movieId } = await params;

  const movie = await getDetailsMovies(movieId);
  const credits = await getCreditsMovies(movieId);
  const similarMovieData = await getSimilarMovie(movieId);

  const { cast, crew } = credits;
  console.log(similarMovieData);

  const directors = crew
    .filter((person) => person.job === "Director")
    .map((d) => d.name);

  const writers = crew
    .filter((person) => person.department === "Writing")
    .map((d) => d.name)
    .slice(0, 3)
    .join(" • ");

  const stars = cast
    .map((person) => person.name)
    .slice(0, 3)
    .join(" • ");

  console.log(writers);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        {/* TOP */}
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              {movie.title}
            </h1>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              <span>
                {movie.release_date}
                {movie.release_date ? " · " : ""}
                {movie.adult ? "R" : "PG"}
                {movie.runtime ? ` · ${movie.runtime}m` : ""}
              </span>
            </div>
          </div>

          <div className="shrink-0 sm:text-right">
            <p className="text-xs text-zinc-500">Rating</p>
            <div className="mt-1 flex items-center gap-2 sm:justify-end">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold text-zinc-900">
                {movie.vote_average}
                <span className="text-zinc-500">/10</span>
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {`${movie.vote_count} votes`}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-4">
          <div className="hidden sm:block sm:col-span-4">
            <div
              className="h-[428px] w-full  bg-zinc-100 bg-cover bg-center"
              style={{
                backgroundImage: `url(${baseImgUrl + movie.poster_path})`,
              }}
            />
          </div>

          {/* Right hero */}
          <div className="col-span-12 sm:col-span-8">
            <div className="relative h-[240px] bg-zinc-100 sm:h-[428px] overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${baseImgUrl + movie.backdrop_path})`,
                }}
              />

              <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur hover:bg-white/25"
                  aria-label="Play trailer"
                >
                  <Play fill="white" />
                </button>
                <div className="text-sm">
                  <p className="font-medium">Play trailer</p>
                  <p className="text-xs text-white/80">2:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: poster + badges in one row (like phone screenshot) */}
        <div className="mt-6 flex gap-4 sm:hidden">
          <div
            className="h-[120px] w-[88px] shrink-0 rounded-lg bg-zinc-100 bg-cover bg-center"
            style={{
              backgroundImage: `url(${baseImgUrl + movie.poster_path})`,
            }}
          />
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Fair Tale</Badge>
              <Badge variant="outline">Fair Tale</Badge>
              <Badge variant="outline">Fair Tale</Badge>
              <p className="mt-2">{movie.overview}</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex mt-8 gap-4 flex-wrap">
          <Badge variant="outline">Fair Tale</Badge>
          <Badge variant="outline">Fair Tale</Badge>
          <Badge variant="outline">Fair Tale</Badge>
          <p className="mt-2">{movie.overview}</p>
        </div>

        <div className="mt-8 border-y border-zinc-200 divide-y divide-zinc-200">
          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">
              Director
            </span>
            <div className="flex flex-wrap gap-2 text-zinc-900">
              <span className="hover:underline cursor-pointer">
                {directors}
              </span>
            </div>
          </div>

          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">
              Writers
            </span>
            <div className="flex flex-wrap items-center gap-x-2 text-zinc-900">
              <span className="hover:underline cursor-pointer">{writers}</span>
            </div>
          </div>

          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">Stars</span>
            <div className="flex flex-wrap items-center gap-x-2 text-zinc-900">
              <span className="hover:underline cursor-pointer">{stars}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-6 ">
          <div className="flex justify-between items-center mb-4 mx-8">
            <p className="font-semibold">More like this</p>

            <SeeMore url="/similar" className={className} />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 place-items-center mt-10">
            {similarMovieData.results?.slice(0, 5).map((movie) => (
              <Link href={`/${movie.id}`} key={movie.id}>
                <MovieCard
                  imgPath={movie.poster_path}
                  rating={movie.vote_average}
                  name={movie.original_title}
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
