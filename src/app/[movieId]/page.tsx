import { getDetailsMovies } from "@/lib/apiDetails";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Detailspageprops = {
  params: Promise<{ movieId: string }>;
};
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
const Details = async ({ params }: Detailspageprops) => {
  const { movieId } = await params;

  const movie = await getDetailsMovies(movieId);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              {movie.title}
            </h1>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              <span>
                {movie.release_date}
                {movie.release_date ? " · " : ""}
                {movie.adult ? "R" : "PG"}
                {movie.runtime}
              </span>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-xs text-zinc-500">Rating</p>
            <div className="mt-1 flex items-center justify-end gap-2">
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

        {/* Posters row */}
        <div className="mt-6 grid grid-cols-12 gap-4">
          {/* Left poster */}
          <div className="col-span-12 sm:col-span-4">
            <div
              className="h-full bg-cover w-72.5"
              style={{
                backgroundImage: `url(${`${baseImgUrl + movie.poster_path}`})`,
              }}
            ></div>
          </div>

          {/* Right hero */}
          <div className="col-span-12 sm:col-span-8">
            <div className="relative h-[240px]  bg-zinc-100 sm:h-[360px]">
              <div
                className="h-full bg-cover"
                style={{
                  backgroundImage: `url(${`${baseImgUrl + movie.backdrop_path}`})`,
                }}
              ></div>

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
        <div className=" flex mt-8 gap-4">
          <Badge variant="outline">Fair Tale</Badge>
          <Badge variant="outline">Fair Tale</Badge>
          <Badge variant="outline">Fair Tale</Badge>
        </div>
        <p className="mt-8">{movie.overview}</p>
        {/* Credits Section */}
        <div className="mt-8 border-y border-zinc-200 divide-y divide-zinc-200">
          {/* Director */}
          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">
              Director
            </span>
            <div className="flex flex-wrap gap-2 text-zinc-900 ">
              <span className="hover:underline cursor-pointer">Jon M. Chu</span>
            </div>
          </div>

          {/* Writers */}
          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">
              Writers
            </span>
            <div className="flex flex-wrap items-center gap-x-2 text-zinc-900  ">
              <span className="hover:underline cursor-pointer">
                Winnie Holzman
              </span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="hover:underline cursor-pointer">Dana Fox</span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="hover:underline cursor-pointer">
                Gregory Maguire
              </span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex py-4 gap-8">
            <span className="w-20 font-bold text-zinc-900 shrink-0">Stars</span>
            <div className="flex flex-wrap items-center gap-x-2  text-zinc-900  ">
              <span className="hover:underline cursor-pointer">
                Cynthia Erivo
              </span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="hover:underline cursor-pointer">
                Ariana Grande
              </span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="hover:underline cursor-pointer">
                Jeff Goldblum
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
