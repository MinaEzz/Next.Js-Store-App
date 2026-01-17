import { fetchSingleProduct, updateProductImage } from "@/utils/actions";
import EditProductForm from "./edit-product-form/EditProductForm.component";
import UpdateProductImage from "./update-product-image/UpdateProductImage.component";

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
        <UpdateProductImage
          image={product.image}
          name={product.name}
          text={"Update Image"}
          action={updateProductImage}
        >
          <input type="hidden" name="id" value={product.id} />
        </UpdateProductImage>
        <EditProductForm product={product} />
      </div>
    </>
  );
}
