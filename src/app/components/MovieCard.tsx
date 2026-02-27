import { Card, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

type MovieCardProps = {
  imgPath: string;
  rating: number;
  name: string;
};
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
export const MovieCard = (props: MovieCardProps) => {
  const { imgPath, rating, name } = props;

  return (
    <Card className="w-40 bg-gray-200 text-black overflow-hidden p-0 gap-1">
      <div
        style={{
          backgroundImage: `url(${`${baseImgUrl + imgPath}`})`,
        }}
        className="relative h-58.25 bg-cover"
      ></div>

      <CardFooter className="flex flex-col items-start gap-1 ml-0 px-2">
        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={14} fill="currentColor" />
          <span className="text-sm  text-black">
            {rating.toFixed(2)} <span className=" text-gray-400">/10</span>
          </span>
        </div>
        <p className="text-sm font-medium line-clamp-2 h-10">{name}</p>
      </CardFooter>
    </Card>
  );
};
