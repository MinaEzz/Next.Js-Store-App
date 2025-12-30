import CreateProductForm from "./create-product-form/CreateProductForm.component";

export default function CreateProduct() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <CreateProductForm />
      </div>
    </section>
  );
}
