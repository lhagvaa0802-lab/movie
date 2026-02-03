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
    <Card className="bg-zinc-500 relative p-0 ">
      <div className="w-38 h-40">
        <Image
          src={img}
          alt="Zurag"
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <div></div>

      <Star />
      <p>{rating}</p>
      <p>{name}</p>
    </Card>
  );
};
