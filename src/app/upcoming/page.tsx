import { Upcoming } from "../components/Upcoming";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Upcoming className="hidden" />
      <div className="mt-10"></div>
    </div>
  );
}
