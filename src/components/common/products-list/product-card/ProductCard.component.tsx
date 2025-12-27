import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../../favorite-button/FavoriteButton.component";
import IProductCardProps from "./ProductCard.types";

export default function ProductCard({
  productId,
  image,
  title,
  company,
  price,
}: IProductCardProps) {
  return (
    <article className="group relative">
      <Link href={`/products/${productId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500 p-0">
          <CardContent className="p-4 grid gap-y-4 md:grid-cols-3">
            {/** Product Image */}
            <div className="relative h-64 md:h-48 md:w-48 rounded overflow-hidden">
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
            <div>
              <h3 className="text-lg font-semibold capitalize">{title}</h3>
              <h4 className="text-muted-foreground">{company}</h4>
            </div>
            <p className="text-lg md:ml-auto text-muted-foreground">{price}</p>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute bottom-7 right-7 z-5">
        <FavoriteButton prodcutId={productId} />
      </div>
    </article>
  );
}
