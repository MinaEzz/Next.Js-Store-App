"use client";
import { ADMIN_NAVIGATION_LINKS } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {ADMIN_NAVIGATION_LINKS.map((link, index) => {
        const isActive = pathname === link.href;
        const variant = isActive ? "default" : "ghost";
        return (
          <Button
            key={index}
            asChild
            className="w-full mb-2 font-normal capitalize"
            variant={variant}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}
