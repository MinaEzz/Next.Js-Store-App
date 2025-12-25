import EmptyList from "@/components/common/empty-list/EmptyList.component";
import ProductsGrid from "@/components/common/products-grid/ProductsGrid.component";
import LoadingGrid from "@/components/common/products-grid/loading-grid/LoadingGrid.component";
import SectionTitle from "@/components/common/section-title/SectionTitle.component";
import { DUMMY_PRODUCTS } from "@/data";
import { Suspense } from "react";

export default function FeaturedProductsSection() {
  const products = DUMMY_PRODUCTS.filter((product) => product.fetured === true);

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
