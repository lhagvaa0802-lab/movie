import { Star } from "lucide-react";

type MovieCardProps = {
  img: string;
  rating: number;
  name: string;
};

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, name } = props;
  return (
    <div className="w-[157.5] h=[309.1]">
      <img src={img} alt="" />
      <div className="bg-gray-100 w-[157.5] h-[76] px-3">
        <div className="flex gap-1">
          <Star className="w-4 h=4 fill-amber-300 text-amber-300" />
          <div className="flex text-xs items-center">
            <p>{rating}/</p>
            <p className="text-gray-400">10</p>
          </div>
        </div>

        <p className="text-xs">{name}</p>
      </div>
    </div>
  );
};
