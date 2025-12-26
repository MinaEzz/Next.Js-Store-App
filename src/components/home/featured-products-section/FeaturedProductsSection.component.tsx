import EmptyList from "@/components/common/empty-list/EmptyList.component";
import ProductsGrid from "@/components/common/products-grid/ProductsGrid.component";
import LoadingGrid from "@/components/common/products-grid/loading-grid/LoadingGrid.component";
import SectionTitle from "@/components/common/section-title/SectionTitle.component";
import { fetchFeaturedProducts } from "@/utils/actions";
import { Suspense } from "react";

export default async function FeaturedProductsSection() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle title="Featured Products" />
      <Suspense fallback={<LoadingGrid />}>
        <ProductsGrid products={products} />
      </Suspense>
    </section>
  );
}
