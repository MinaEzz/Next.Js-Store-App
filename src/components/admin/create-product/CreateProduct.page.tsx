import CreateProductForm from "./create-product-form/CreateProductForm.component";

export default function CreateProduct() {
  // TODO: move form into its own component, move the action into actions file
  // TODO: finish the admin pages and functionality TODAAY !

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <CreateProductForm />
      </div>
    </section>
  );
}
