import SectionTitle from "@/components/common/section-title/SectionTitle.component";
import FeacturedProducstsContent from "./featured-products-content/FeacturedProductsContent.component";
import { Suspense } from "react";
import LoadingGrid from "@/components/common/products-grid/loading-grid/LoadingGrid.component";

export default async function FeaturedProductsSection() {
  return (
    <section className="pt-24">
      <SectionTitle title="Featured Products" />
      <Suspense fallback={<LoadingGrid />}>
        <FeacturedProducstsContent />
      </Suspense>
    </section>
  );
}
