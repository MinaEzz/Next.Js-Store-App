import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TextContent() {
  return (
    <div className="w-full h-full">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
        We are changing the way people shop
      </h1>
      <p className="max-w-xl text-lg leading-8 text-muted-foreground mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt
        voluptate labore corrupti repellat nisi ratione optio explicabo
        dignissimos quaerat?
      </p>
      <Button asChild size={"lg"} className="mt-10">
        <Link href={"/products"}>Our Products</Link>
      </Button>
    </div>
  );
}
