
import { TopRated } from "../components/TopRated";
import { PageCount } from "../components/PageCount";

export default function Home() {
  return (
    <div>
     
      <TopRated className="hidden" />
      <PageCount />
    </div>
  );
}
