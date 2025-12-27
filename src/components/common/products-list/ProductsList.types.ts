import { Product } from "@/generated/prisma/client";

export default interface IProductsListProps {
  products: Product[];
}
