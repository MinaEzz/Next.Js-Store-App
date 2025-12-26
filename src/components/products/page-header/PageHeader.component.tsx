import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import IPageHeaderProps from "./PageHeader.types";

export default function PageHeader({
  productsCount,
  searchValue,
  layout,
}: IPageHeaderProps) {
  const searchTerm = searchValue ? `&search=${searchValue}` : "";
  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">
          {productsCount} Product{productsCount > 1 && "s"}
        </h4>
        <div className="flex gap-x-4 items-center">
          <Button
            size={"icon"}
            variant={`${layout === "grid" ? "default" : "ghost"}`}
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid className="w-5! h-5!" />
            </Link>
          </Button>
          <Button
            size={"icon"}
            variant={`${layout === "list" ? "default" : "ghost"}`}
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList className="w-5! h-5!" />
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
    </section>
  );
}
