import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ProductForm from "@/components/admin/product-form";

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-2">
          <Link href="/admin/products">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
        <p className="text-gray-600 mt-1">
          Create a new product for your salon
        </p>
      </div>

      <Card className="p-6">
        <ProductForm />
      </Card>
    </div>
  );
}
