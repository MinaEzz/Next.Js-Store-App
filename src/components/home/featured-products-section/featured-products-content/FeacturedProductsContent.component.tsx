import EmptyList from "@/components/common/empty-list/EmptyList.component";
import ProductsGrid from "@/components/common/products-grid/ProductsGrid.component";
import { fetchFeaturedProducts } from "@/utils/actions";

export default async function FeacturedProductsContent() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return <ProductsGrid products={products} />;
}
