import { Star, Play } from "lucide-react";
import { TrailerModal } from "./TrailerModal";

type MovieHeroProps = {
  rating: number;
  name: string;
  description: string;
  imgPath: string;
  trailerKey?: string | null;
};

const baseImgUrl = "https://image.tmdb.org/t/p/original";

export function MovieHero({
  rating,
  name,
  description,
  imgPath,
  trailerKey,
}: MovieHeroProps) {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden dark:bg-zinc-950 lg:bg-transparent">
        {/* IMAGE */}
        <div
          className="relative h-55 sm:h-80 lg:h-130 xl:h-150 bg-cover bg-center"
          style={{
            backgroundImage: `url(${baseImgUrl + imgPath})`,
          }}
        >
          <div className="hidden lg:absolute lg:inset-0 lg:block lg:bg-linear-to-r lg:from-black/85 lg:via-black/55 lg:to-black/10" />

          <div className="absolute inset-0 bg-black/25 lg:hidden" />
        </div>

        <div className="p-4 sm:p-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:p-10">
          <div className="max-w-140">
            <div className="flex items-center justify-between lg:hidden">
              <p className="text-xs text-zinc-200/80">Now Playing</p>
              <div className="flex items-center gap-2 text-white">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <span className="text-sm font-medium">
                  {rating.toFixed(2)} / 10
                </span>
              </div>
            </div>

            <p className="hidden lg:block text-sm text-white/90">Now Playing</p>

            <h1 className="mt-2 text-2xl font-bold text-white lg:mt-3 lg:text-5xl">
              {name}
            </h1>

            <div className="mt-3 hidden items-center gap-2 lg:flex text-white/80">
              <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
              <span className="text-base font-medium text-white">
                {rating.toFixed(2)} <span className="text-white/75">/ 10</span>
              </span>
            </div>

            <p className="mt-3 text-sm text-white/85 lg:mt-5 lg:text-lg line-clamp-3">
              {description}
            </p>

            <div className="mt-5 lg:mt-7">
              <TrailerModal videoKey={trailerKey}>
                <div className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/80 lg:bg-white lg:text-black lg:hover:bg-white/90">
                  <Play className="h-4 w-4" fill="currentColor" />
                  Play Trailer
                </div>
              </TrailerModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
