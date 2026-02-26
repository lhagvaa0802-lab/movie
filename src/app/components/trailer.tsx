import { getVideoMovie } from "@/lib/apiCredit";

export const Trailer = async ({ movieId }: { movieId: string }) => {
  const data = await getVideoMovie(movieId);
  const videos = data.results;

  const trailer =
    videos.find(
      (v) =>
        v.site === "YouTube" && v.type === "Trailer" && v.official === true,
    ) ?? videos.find((v) => v.site === "YouTube");

  if (!trailer) return null;

  return (
    <div className="aspect-video w-full   bg-zinc-100">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
