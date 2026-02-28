"use client";

import { useState } from "react";
import { Film, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/ModeToggle";
import { SearchInput } from "../SeeMoreSearch/_components/searchMovie";
import type { Genre } from "@/lib/types";

import { GenresDropdown } from "../components/GenresDropdwon"; 

export const HeaderClient = ({ genres }: { genres: Genre[] }) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[59px] items-center justify-between">
          <div
            className={`flex items-center gap-3 ${
              mobileSearchOpen ? "hidden lg:flex" : ""
            }`}
          >
            <Film className="text-indigo-700" />
            <p className="text-indigo-700 italic font-semibold">Movie Z</p>
          </div>

          {/* Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <GenresDropdown genres={genres} />
            <SearchInput />
          </div>

          <div
            className={`flex items-center gap-2 ${
              mobileSearchOpen ? "hidden lg:flex" : ""
            }`}
          >
            <Button
              size="icon"
              variant="outline"
              className="lg:hidden"
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </Button>

            <ModeToggle />
          </div>
        </div>

        {/* Mobile search row */}
        {mobileSearchOpen && (
          <div className="pb-3 lg:hidden">
            <div className="flex items-center gap-2">
              <GenresDropdown genres={genres} iconOnly />

              <SearchInput />

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
