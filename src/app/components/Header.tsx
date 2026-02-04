import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronDown, ChevronRight, Film, Moon, Search } from "lucide-react";


const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-black/60">
      <div className="mx-auto flex h-[59px] max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Film className="text-indigo-700" />
          <p className="text-indigo-700 italic font-semibold">Movie Z</p>
        </div>

        {/* Middle (desktop only) */}
        <div className="hidden items-center gap-3 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <ChevronDown className="h-4 w-4" />
                Genre
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="space-y-1">
                  <p className="font-semibold">Genres</p>
                  <p className="text-sm text-black/30">
                    See lists of movies by genre
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
              </DropdownMenuGroup>
              <div className="grid grid-cols-2 gap-2">
                {genres.map((genre) => (
                  <DropdownMenuItem key={genre}>
                    {genre}
                    <DropdownMenuShortcut>
                      <ChevronRight className="h-4 w-4" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <InputGroup className="w-[320px]">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" className="lg:hidden">
            <Search className="h-4 w-4" />
          </Button>

          <Button size="icon" variant="outline">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
