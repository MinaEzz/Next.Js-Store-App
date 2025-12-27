import { formatCurrency } from "@/utils/format";
import IProductsListProps from "./ProductsList.types";
import ProductCard from "./product-card/ProductCard.component";

export default function ProductsList({ products }: IProductsListProps) {
  return (
    <ul className="pt-12 grid gap-y-4">
      {products.map((product) => {
        const priceInDollars = formatCurrency(product.price);
        return (
          <li key={product.id}>
            <ProductCard
              productId={product.id}
              image={product.image}
              title={product.name}
              company={product.company}
              price={priceInDollars}
            />
          </li>
        );
      })}
    </ul>
  );
}
