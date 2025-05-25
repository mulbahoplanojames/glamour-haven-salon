import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ServiceForm from "@/components/admin/service-form"

export default function EditServicePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-2">
          <Link href="/admin/services">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Edit Service</h1>
        <p className="text-gray-600 mt-1">Update service information</p>
      </div>

      <Card className="p-6">
        <ServiceForm serviceId={params.id} />
      </Card>
    </div>
  )
}
