"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search")?.toString() || ""
  );

  // handle search
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`/products?${params.toString()}`);
  }, 500);

  // handle change
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  }

  return { searchValue, onChange };
}
