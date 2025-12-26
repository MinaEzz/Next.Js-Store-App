import Products from "@/components/products/Products.page";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ layout?: "grid" | "list"; search?: string }>;
}) {
  const { layout, search } = await searchParams;
  console.log("layout", layout);
  console.log("search", search);

  return <Products layout={layout} searchValue={search} />;
}
