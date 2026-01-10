import ProductsTable from "./products-table/ProductsTable.component";
import { fetchAdminProducts } from "@/utils/actions";
import EmptyList from "@/components/common/empty-list/EmptyList.component";

export default async function Products() {
  const products = await fetchAdminProducts();
  const productsCount = products.length;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8 capitalize">Products</h2>
      {productsCount === 0 ? (
        <EmptyList />
      ) : (
        <ProductsTable products={products} productsCount={productsCount} />
      )}
    </>
  );
}
