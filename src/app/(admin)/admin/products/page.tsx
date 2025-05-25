import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import ProductsTable from "@/components/admin/products-table";

export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your salon products</p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>

      <ProductsTable />
    </div>
  );
}
