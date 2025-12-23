import { Button } from "@/components/ui/button";
import { LucideShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  const items = 6;

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      asChild
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LucideShoppingCart className="w-[1.2rem]! h-[1.2rem]!" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {items}
        </span>
      </Link>
    </Button>
  );
}
