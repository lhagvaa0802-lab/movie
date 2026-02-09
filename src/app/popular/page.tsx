


import { Popular } from "../components/Popular";
import { PageCount } from "../components/PageCount";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      
      <Popular className="hidden" />
      <PageCount />
    </div>
  );
}
