import { Product } from "@prisma/client";

export default interface IProductsListProps {
  products: Product[];
}
