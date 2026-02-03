import { Card, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

type MovieCardProps = {
  img: string;
  rating: number;
  name: string;
};

export const MovieCard = (props: MovieCardProps) => {
  const { img, rating, name } = props;
  return (
    <Card className="w-[160px] bg-gray-200 text-black overflow-hidden p-0 gap-1">
      <div className="relative h-[233px] w-full">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <CardFooter className="flex flex-col items-start gap-1 ml-0 px-2">
        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={14} fill="currentColor" />
          <span className="text-sm  text-black">
            {rating} <span className=" text-gray-400">/10</span>
          </span>
        </div>
        <p className="text-sm font-medium line-clamp-2">{name}</p>
      </CardFooter>
    </Card>
  );
};
