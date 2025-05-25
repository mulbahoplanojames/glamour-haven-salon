import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import ServicesTable from "@/components/admin/services-table";

export default function ServicesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Services
          </h1>
          <p className="text-gray-600 mt-1 dark:text-gray-400">
            Manage your salon services
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/services/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Service
          </Link>
        </Button>
      </div>

      <ServicesTable />
    </div>
  );
}
