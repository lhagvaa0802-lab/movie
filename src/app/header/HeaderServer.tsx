import { getGenre } from "@/lib/apiGenre";
import { HeaderClient } from "./HeaderClient";

export default async function HeaderServer() {
  const genres = await getGenre();
  return <HeaderClient genres={genres} />;
}
