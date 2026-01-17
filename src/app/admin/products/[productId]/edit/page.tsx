import EditProduct from "@/components/admin/edit-product/EditProduct.page";

export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <EditProduct productId={productId} />;
}
