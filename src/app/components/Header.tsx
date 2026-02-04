import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Film } from "lucide-react";
import { Moon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const Header = () => {
  return (
    <div className="flex justify-between mt-2 h-[59px] items-center mx-4">
      <div className="flex gap-4">
        <Film className="text-indigo-700" />
        <p className="text-indigo-700 italic font-semibold">Movie Z</p>
      </div>
      <div className="lg:gap-2 hidden lg:block lg:flex ">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ChevronDown />
                Genre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                Action
                <DropdownMenuShortcut>
                  <ChevronRight />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Adventure
                <DropdownMenuShortcut>
                  <ChevronRight />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Animation
                <DropdownMenuShortcut>
                  <ChevronRight />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Biography
                <DropdownMenuShortcut>
                  <ChevronRight />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Comedy
                <DropdownMenuShortcut>
                  <ChevronRight />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <InputGroup className="max-w-xs">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end"></InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="lg:hidden">
          <Button size="icon" variant="outline">
            <Search />
          </Button>
        </div>

        <Button size="icon" variant="outline">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
