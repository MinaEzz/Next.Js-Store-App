import FormField from "@/components/common/forms/form-field/FormField.component";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";

async function createProduct(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
}

export default function CreateProductForm() {
  const randomName = faker.commerce.productName();
  const randomDescription = faker.commerce.productDescription();
  const randomCompany = faker.company.name();

  return (
    <form action={createProduct}>
      <FormField
        name="name"
        type="text"
        label="product name"
        defaultValue={randomName}
        placeholder="Product Name"
      />

      <Button type="submit" size={"lg"} variant={"default"}>
        Submit
      </Button>
    </form>
  );
}
