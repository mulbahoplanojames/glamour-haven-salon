import { Badge } from "@/components/ui/badge";
import services from "@/data/services.json";
import { Clock } from "lucide-react";
import Image from "next/image";

const Service = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);
  return (
    <>
      <section className="container md:px-6  lg:px-20 mx-auto px-4 md:py-6 py-3">
        <h1 className="text-3xl font-bold pb-1">{service?.name}</h1>
        <p className="pb-3 text-lg">{service?.shortDescription}</p>

        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-md bg-red-500 mb-2">
          <Image
            src={service?.image || "/placeholder.svg?height=400&width=600"}
            alt={service?.name || ""}
            fill
            className="object-cover"
          />
          {service?.featured && (
            <Badge className="absolute top-2 right-2 text-white">
              Featured
            </Badge>
          )}
        </div>
        <div className="flex items-center text-base pb-5">
          Read TIme: &nbsp;
          <Clock className="h-4 w-4 mr-1" />
          {service?.duration} min
        </div>
        <p className="pb-5 text-lg">{service?.description}</p>
        {service?.details?.map((detail) => (
          <p key={detail.id} className="pb-5 text-lg">
            {detail.label}
          </p>
        ))}
      </section>
    </>
  );
};

export default Service;
