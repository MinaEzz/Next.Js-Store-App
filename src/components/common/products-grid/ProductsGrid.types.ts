import { Product } from "@prisma/client";

export default interface IProductsGridProps {
  products: Product[];
}
