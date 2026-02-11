import { getDetailsMovies } from "@/lib/apiDetails";
type Detailspageprops = {
  params: Promise<{ movieId: string }>;
};
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
const Details = async ({ params }: Detailspageprops) => {
  const { movieId } = await params;

  const movie = await getDetailsMovies(movieId);

  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.runtime}</p>
      <div
        style={{
          backgroundImage: `url(${`${baseImgUrl + movie.poster_path}`})`,
        }}
        className="relative h-[233px] bg-cover"
      ></div>

      <p>{movie.overview}</p>
    </div>
  );
};

export default Details;
