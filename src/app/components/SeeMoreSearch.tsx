"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SeeMoreProps = {
  url: string;
  searchValue: string;
};

export const SeeMoreSearch = ({ searchValue }: SeeMoreProps) => {
  return (
    <Link href={`/SeeMoreSearch?search=${searchValue}`}>
      <Button variant="ghost">
        <p>See All Result For "{searchValue}"</p>
        <ArrowRight />
      </Button>
    </Link>
  );
};
