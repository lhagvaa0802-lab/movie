"use cllient";
import { useState, useEffect, ChangeEventHandler } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { getSearch } from "@/lib/apiSerach";
import { Types } from "@/lib/types";

export const SeachInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Types[]>([]);
  const onChangeSearchvalue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event?.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }
    const timer = setTimeout(async () => {
      const data = await getSearch(searchValue);

      setMovies(data.results);

      console.log(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div>
      <InputGroup className="w-[320px]">
        <InputGroupInput
          value={searchValue}
          onChange={onChangeSearchvalue}
          placeholder="Search..."
        />
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
      </InputGroup>
      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};
