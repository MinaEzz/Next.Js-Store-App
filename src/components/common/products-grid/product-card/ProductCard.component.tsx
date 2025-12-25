import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import IProductCardProps from "./ProductCard.types";
import Image from "next/image";
import FavoriteButton from "./favorite-button/FavoriteButton.component";

export default function ProductCard({
  productId,
  image,
  title,
  price,
}: IProductCardProps) {
  return (
    <article className="group relative">
      <Link href={`/products/${productId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 p-0">
          <CardContent className="p-4">
            {/** Product Image */}
            <div className="relative h-64 md:h-48 rounded overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200) 50vw, 33vw"
                priority
                className="w-full h-full rounded object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/** Product Details */}
            <div className="mt-4 text-center">
              <h3 className="text-lg capitalize">{title}</h3>
              <p className="text-muted-foreground">{price}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-7 right-7 z-5">
        <FavoriteButton prodcutId={productId} />
      </div>
    </article>
  );
}
