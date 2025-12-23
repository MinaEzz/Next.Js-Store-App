"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_MODE } from "@/data";

export default function ThemeDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <SunIcon className="w-[1.2rem]! h-[1.2rem]! rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <MoonIcon className=" absolute w-[1.2rem]! h-[1.2rem]! rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEME_MODE.map((mode, index) => {
          return (
            <DropdownMenuItem key={index} onClick={() => setTheme(mode.value)}>
              {mode.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
