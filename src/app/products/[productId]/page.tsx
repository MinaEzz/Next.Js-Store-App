import ProductDetails from "@/components/product-details/ProductDetails.page";

export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <ProductDetails productId={productId} />;
}
