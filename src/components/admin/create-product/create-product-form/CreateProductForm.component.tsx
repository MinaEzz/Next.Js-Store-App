"use client";
import FormContainer from "@/components/common/forms/form-container/FormContainer.component";
import FormField from "@/components/common/forms/form-field/FormField.component";
import { faker } from "@faker-js/faker";
import { createProduct } from "@/utils/actions";
import PriceInput from "@/components/common/forms/price-input/PriceInput.component";
import FileInput from "@/components/common/forms/file-input/FileInput.component";
import TextareaInput from "@/components/common/forms/textarea-input/TextareaInput.component";
import CheckboxInput from "@/components/common/forms/checkbox-input/CheckboxInput.component";
import { SubmitButton } from "@/components/common/forms/buttons/Buttons.component";

export default function CreateProductForm() {
  const randomName = faker.commerce.productName();
  const randomDescription = faker.lorem.paragraph({ min: 10, max: 14 });
  const randomCompany = faker.company.name();

  return (
    <FormContainer action={createProduct}>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <FormField
          type="text"
          name="name"
          label="Product Name"
          placeholder="Product Name"
          defaultValue={randomName}
        />
        <FormField
          type="text"
          name="company"
          label="Company"
          placeholder="XYZ Company"
          defaultValue={randomCompany}
        />
        <PriceInput />
        <FileInput name="image" />
      </div>
      <div className="mt-4">
        <TextareaInput
          name="description"
          label="Product Description"
          defaultValue={randomDescription}
        />
      </div>
      <div className="mt-6">
        <CheckboxInput name="featured" label="Featured" />
        <SubmitButton text="Create Product" className="mt-8" />
      </div>
    </FormContainer>
  );
}
