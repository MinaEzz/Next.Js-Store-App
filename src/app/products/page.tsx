import Products from "@/components/products/Products.page";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ layout?: "grid" | "list"; search?: string }>;
}) {
  const { layout, search } = await searchParams;

  return <Products layout={layout} searchValue={search} />;
}
