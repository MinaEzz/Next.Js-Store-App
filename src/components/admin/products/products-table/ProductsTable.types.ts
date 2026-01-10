import { Product } from "@prisma/client";

export default interface IProductsTableProps {
  products: Product[];
  productsCount: number;
}
