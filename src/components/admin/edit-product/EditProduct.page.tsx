import { fetchSingleProduct } from "@/utils/actions";
import EditProductForm from "./edit-product-form/EditProductForm.component";

export default async function EditProduct({
  productId,
}: {
  productId: string;
}) {
  const product = await fetchSingleProduct(productId);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8 capitalize">Edit Product</h2>
      <div className="border p-8 rounded-md">
        {/** IMAGE CONTAINER */}
        <EditProductForm product={product} />
      </div>
    </>
  );
}
