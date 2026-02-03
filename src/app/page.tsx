import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";
import { Moviehero } from "./components/MovieHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Header */}
      <Header />
      {/* HERO */}
      <Moviehero
        title="Wicked"
        rating={6.9}
        description="Elphaba, misunderstood young woman because of her green skin, and Glinda, popular young woman, become friends at Shiz University in the Land of Oz..."
        image="/images/wicked.jpg"
      />

      {/* MOVIE LIST */}
      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="w-38 h-0">
            <MovieCard
              img="/images/image.avif"
              rating={3}
              name="The Silence of the Lambs"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
