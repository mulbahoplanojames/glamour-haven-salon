import { handleFetchProducts } from "@/utils/helper";
import ProductsTableClient from "./product-table-client";
import { Product } from "@/types/product-type";

export default async function ProductsTable() {
  const products = await handleFetchProducts();
  console.log("Products", products);
  return <ProductsTableClient server_products={products as Product[]} />;
}
