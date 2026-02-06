import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Popular } from "../components/Popular";
import { PageCount } from "../components/PageCount";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Popular className="hidden" />
      <PageCount />
    </div>
  );
}
