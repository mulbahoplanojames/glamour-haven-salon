import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ServiceForm from "@/components/admin/service-form";

export default function NewServicePage() {
  return (
    <div>
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-2">
          <Link href="/admin/services">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Add New Service
        </h1>
        <p className="text-gray-600 mt-1 dark:text-gray-400">
          Create a new service for your salon
        </p>
      </div>

      <Card className="p-6">
        <ServiceForm />
      </Card>
    </div>
  );
}
