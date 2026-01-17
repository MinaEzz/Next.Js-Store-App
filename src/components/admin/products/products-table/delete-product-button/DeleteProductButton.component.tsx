import { ActionButton } from "@/components/common/forms/buttons/Buttons.component";
import FormContainer from "@/components/common/forms/form-container/FormContainer.component";
import { deleteProduct } from "@/utils/actions";

export default function DeleteProductButton({
  proudctId,
  imagePublicId,
}: {
  proudctId: string;
  imagePublicId: string;
}) {
  const deleteProductAction = deleteProduct.bind(null, {
    productId: proudctId,
    imagePublicId,
  });
  return (
    <FormContainer action={deleteProductAction}>
      <ActionButton actionType="delete" />
    </FormContainer>
  );
}
