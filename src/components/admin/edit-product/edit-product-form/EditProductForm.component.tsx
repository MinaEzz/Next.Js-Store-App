"use client";
import IEditProductFormProps from "./EditProductForm.types";
import FormContainer from "@/components/common/forms/form-container/FormContainer.component";
import FormField from "@/components/common/forms/form-field/FormField.component";
import PriceInput from "@/components/common/forms/price-input/PriceInput.component";
import TextareaInput from "@/components/common/forms/textarea-input/TextareaInput.component";
import CheckboxInput from "@/components/common/forms/checkbox-input/CheckboxInput.component";
import { SubmitButton } from "@/components/common/forms/buttons/Buttons.component";
import { updateProduct } from "@/utils/actions";

export default function EditProductForm({ product }: IEditProductFormProps) {
  return (
    <FormContainer action={updateProduct}>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <input type="hidden" name="id" value={product.id} />
        <FormField
          type="text"
          name="name"
          label="Product Name"
          placeholder="Product Name"
          defaultValue={product.name}
        />
        <FormField
          type="text"
          name="company"
          label="Company"
          placeholder="XYZ Company"
          defaultValue={product.company}
        />
        <PriceInput defaultValue={product.price} />
      </div>
      <div className="mt-4">
        <TextareaInput
          name="description"
          label="Product Description"
          defaultValue={product.description}
        />
      </div>
      <div className="mt-6">
        <CheckboxInput
          name="featured"
          label="Featured"
          defaultChecked={product.featured}
        />
        <SubmitButton text="Update Product" className="mt-8" />
      </div>
    </FormContainer>
  );
}
