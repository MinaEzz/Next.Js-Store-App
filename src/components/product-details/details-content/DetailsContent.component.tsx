import { formatCurrency } from "@/utils/format";
import IDetailsContentProps from "./DetailsContent.types";
import Image from "next/image";
import FavoriteButton from "@/components/common/favorite-button/FavoriteButton.component";
import Rating from "./rating/Rating.component";
import AddToCartButton from "./add-to-cart-button/AddToCartButton.component";

export default function DetailsContent({ product }: IDetailsContentProps) {
  const priceInDollars = formatCurrency(product.price);

  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-16 gap-y-8">
      {/** IMAGE */}
      <div className="relative h-64 sm:h-80 lg:h-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200) 50vw, 33vw"
          priority
          className="w-full rounded object-cover object-center"
        />
      </div>

      {/** INFO */}
      <div>
        <div className="flex items-center gap-x-8">
          <h1 className="text-3xl font-bold capitalize">{product.name}</h1>
          <FavoriteButton prodcutId={product.id} />
        </div>
        <Rating productsId={product.id} />

        <h2 className="text-xl">{product.company}</h2>
        <p className="inline-block bg-muted p-2 rounded text-base mt-3">
          {priceInDollars}
        </p>
        <p className="text-muted-foreground leading-8 mt-6">
          {product.description}
        </p>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}
