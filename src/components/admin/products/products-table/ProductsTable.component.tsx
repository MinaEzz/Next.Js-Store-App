import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import IProductsTableProps from "./ProductsTable.types";

export default function ProductsTable({
  products,
  productsCount,
}: IProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell>
                <Link
                  href={`/products/${product.id}`}
                  className="text-muted-foreground underline capitalize tracking-wide"
                >
                  {product.name}
                </Link>
              </TableCell>
              <TableCell>{product.company}</TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell className="flex items-center gap-x-2"></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableCaption className="capitalize">
        total products {productsCount}
      </TableCaption>
    </Table>
  );
}
