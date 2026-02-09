import Image from "next/image";
import { Star, Play } from "lucide-react";


type MovieHeroProps = {
  img: string;
  rating: number;
  name: string;
  description:string
};

export function MovieHero(props: MovieHeroProps) {
  const { img, rating, name, description } = props;
  return (
    <div className="w-full ">
      <div className="relative overflow-hidden  dark:bg-zinc-950 lg:bg-transparent">
        {/* IMAGE */}
        <div className="relative h-[220px] sm:h-[320px] lg:h-[520px] xl:h-[600px]">
          <Image src={img} alt={name} fill className="object-cover" />
          <div className="hidden lg:absolute lg:inset-0 lg:block lg:bg-lineiar-to-r lg:from-black/85 lg:via-black/55 lg:to-black/10" />
        </div>

        <div className="p-4 sm:p-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:p-10">
          <div className="max-w-[560px]">
            <div className="flex items-center justify-between lg:hidden">
              <p className="text-xs text-zinc-500">Now Playing</p>
              <div className="flex items-center gap-2 text-zinc-700">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <span className="text-sm font-medium">{rating} / 10</span>
              </div>
            </div>

            <p className="hidden lg:block text-sm text-white">Now Playing</p>

            <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white lg:mt-3 lg:text-5xl lg:text-white">
              {name}
            </h1>

            <div className="mt-3 hidden items-center gap-2 lg:flex text-white/80">
              <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
              <span className="text-base font-medium text-white">
                {rating} <span className="text-white/75">/ 10</span>
              </span>
            </div>

            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 lg:mt-5 lg:text-lg lg:text-white line-clamp-3">
              {description}
            </p>

            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white lg:mt-7 lg:bg-white lg:text-black">
              <div className="block lg:hidden">
                <Play className="h-4 w-4 " fill="black" />
              </div>
              <div className="hidden lg:block">
                <Play className="h-4 w-4" fill="white" />
              </div>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
