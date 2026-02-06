"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SeeMoreProps = {
  url: string;
  className: string;
};

export const SeeMore = ({ url, className }: SeeMoreProps) => {
  return (
    <Link href={url} className={className}>
      <Button variant="ghost">
        <p>See more</p>
        <ArrowRight />
      </Button>
    </Link>
  );
};
