import { MovieCard } from "@/components/moviecard";
import { Moviehero} from "@/components/moviehero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* HERO */}
      <Moviehero
        title="Wicked"
        rating={6.9}
        description="Elphaba, misunderstood young woman because of her green skin, and Glinda, popular young woman, become friends at Shiz University in the Land of Oz..."
        image="/wicked.svg"
      />

      {/* MOVIE LIST */}
      <section className="mx-auto mt-10 max-w-7xl px-6">
        

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <MovieCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZMLG9HUNwoF7PMmsiTpbmh64ouRumJ4VQ&s"
            rating={3}
            name="The Silence of the Lambs"
          />
        </div>
      </section>
    </div>
  );
}


