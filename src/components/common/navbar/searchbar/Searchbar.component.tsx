"use client";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch.hook";

export default function Searchbar() {
  const { searchValue, onChange } = useSearch();
  return (
    <Input
      type="search"
      placeholder="Search Product..."
      name="search"
      className="max-w-xs dark:bg-muted"
      value={searchValue}
      onChange={onChange}
    />
  );
}
