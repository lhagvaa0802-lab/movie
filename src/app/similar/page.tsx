import { Similar } from "../components/similar";
import { PageCount } from "../components/PageCount";

type HomeProps = {
  params: { movieId: string }; 
};

export default function Home({ params }: HomeProps) {
  return (
    <div className="space-y-6">
      <Similar movieId={params.movieId} />
      <PageCount />
    </div>
  );
}
