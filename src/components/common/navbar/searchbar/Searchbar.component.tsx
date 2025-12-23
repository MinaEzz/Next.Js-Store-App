"use client";

import { Input } from "@/components/ui/input";

export default function Searchbar() {
  return (
    <Input
      type="search"
      placeholder="Search Product..."
      name="search"
      className="max-w-xs dark:bg-muted"
    />
  );
}
