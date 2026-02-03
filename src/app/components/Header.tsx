import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Film } from "lucide-react";
import { Moon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between mt-2 h-[59px] items-center mx-4">
      <div className="flex gap-4">
        <Film className="text-indigo-700" />
        <p className="text-indigo-700 italic font-semibold">Movie Z</p>
      </div>
      <div className="flex gap-2">
        <Button size="icon" variant="outline">
          <Search />
        </Button>
        <Button size="icon" variant="outline">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
