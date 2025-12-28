import { fetchSingleProduct } from "@/utils/actions";
import BreadCrumps from "./bread-crumps/BreadCrumps.component";
import DetailsContent from "./details-content/DetailsContent.component";

export default async function ProductDetails({
  productId,
}: {
  productId: string;
}) {
  const product = await fetchSingleProduct(productId);

  return (
    <section className="flex flex-col gap-6">
      <BreadCrumps name={product.name} />
      <DetailsContent product={product} />
    </section>
  );
}
