import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { TopRated } from "../components/TopRated";
import { PageCount } from "../components/PageCount";

export default function Home() {
  return (
    <div>
      <Header />
      <TopRated className="hidden" />
      <PageCount />
    </div>
  );
}
