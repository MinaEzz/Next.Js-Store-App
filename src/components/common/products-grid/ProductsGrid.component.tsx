import { formatCurrency } from "@/utils/format";
import IProductsGridProps from "./ProductsGrid.types";
import ProductCard from "./product-card/ProductCard.component";

export default function ProductsGrid({ products }: IProductsGridProps) {
  return (
    <ul className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const priceInDollars = formatCurrency(product.price);
        return (
          <li key={product.id}>
            <ProductCard
              productId={product.id}
              image={product.image}
              title={product.name}
              price={priceInDollars}
            />
          </li>
        );
      })}
    </ul>
  );
}
