import EmptyList from "@/components/common/empty-list/EmptyList.component";
import ProductsGrid from "@/components/common/products-grid/ProductsGrid.component";
import SectionTitle from "@/components/common/section-title/SectionTitle.component";
import { DUMMY_PRODUCTS } from "@/data";

export default function FeaturedProductsSection() {
  const products = DUMMY_PRODUCTS.filter((product) => product.fetured === true);

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle title="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}
