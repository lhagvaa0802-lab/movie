import { MovieCard } from "@/components/moviecard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <MovieCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZMLG9HUNwoF7PMmsiTpbmh64ouRumJ4VQ&s"
          rating={3}
          name="The Silence of the lambs"
        />
      </div>
    </div>
  );
}

const Hero = () => {};
