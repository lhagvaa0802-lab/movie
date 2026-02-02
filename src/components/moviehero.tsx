type MovieHeroProps = {
  title: string;
  description: string;
  rating: number;
  image: string;
};

export function Moviehero({
  title,
  description,
  rating,
  image,
}: MovieHeroProps) {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden rounded-none sm:rounded-xl">
  
        <div className="relative h-[220px] sm:h-[360px] md:h-[420px] ">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />

         
        </div>

        
        <div className="bg-white px-4 py-4 sm:px-6 sm:py-6 dark:bg-zinc-950">

          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Now Playing
              </p>

              <h1 className="mt-1 text-2xl font-extrabold leading-tight text-zinc-900 sm:text-4xl dark:text-white">
                {title}
              </h1>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="text-yellow-400 text-xl">★</span>
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                {rating}
                <span className="text-zinc-500 dark:text-zinc-400">/10</span>
              </div>
            </div>
          </div>

   
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
            {description}
          </p>

          <div className="mt-5">
            <button className="inline-flex w-[145px]items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 sm:w-auto sm:px-6">
              <span>▶</span>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
