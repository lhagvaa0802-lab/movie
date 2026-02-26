import { getGenre } from "@/lib/apiGenre";
import { HeaderClient } from "./HeaderClient"; 

export default async function HeaderServer() {
  const genres = await getGenre(); // Genre[]
  return <HeaderClient genres={genres} />;
}
