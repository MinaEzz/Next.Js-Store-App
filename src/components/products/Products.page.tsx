import IProductsPageProps from "./Products.page.types";
import ProductsGrid from "../common/products-grid/ProductsGrid.component";
import ProductsList from "../common/products-list/ProductsList.component";
import PageHeader from "./page-header/PageHeader.component";
import { fetchProducts } from "@/utils/actions";

export default async function Products({
  layout = "grid",
  searchValue = "",
}: IProductsPageProps) {
  const products = await fetchProducts({ searchValue });
  const productsCount = products.length;

  return (
    <>
      {/** Header */}
      <PageHeader
        layout={layout}
        productsCount={productsCount}
        searchValue={searchValue}
      />
      {/**products */}
      <div>
        {productsCount === 0 && (
          <h5 className="text-xl text-center text-muted-foreground capitalize mt-8">
            No products found
          </h5>
        )}
        {layout === "grid" && <ProductsGrid products={products} />}
        {layout === "list" && <ProductsList products={products} />}
      </div>
    </>
  );
}
