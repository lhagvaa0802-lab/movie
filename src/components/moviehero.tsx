type MovieheroProps = {
  title: string;
  description: string;
  rating: number;
  image: string;
};

export const Moviehero=(props:MovieheroProps) => {
    const {title,description,rating,image}=props


  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      
      <div className="absolute inset-0 bg-line-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="ml-10 max-w-xl text-white">
          <p className="text-sm uppercase text-gray-300">Now Playing</p>

          <h1 className="mt-2 text-5xl font-extrabold">{title}</h1>

          <div className="mt-3 flex items-center gap-2 text-yellow-400">
            ⭐ <span className="text-white">{rating} / 10</span>
          </div>

          <p className="mt-4 text-sm text-gray-200 leading-relaxed">
            {description}
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition">
            ▶ Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};


