import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/types/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full p-0">
      <div className="relative h-56">
        <Image
          src={service.image || "/placeholder.svg?height=400&width=600"}
          alt={service.name}
          fill
          className="object-cover"
        />
        {service.featured && (
          <Badge className="absolute top-2 right-2 text-white">Featured</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">
            ${service.price.toFixed(2)}
          </span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {service.duration} min
          </div>
        </div>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pb-4">
        <Button variant="outline" asChild>
          <Link href={`/services/${service.slug}`}>Learn More</Link>
        </Button>
        <Button asChild className="text-white">
          <Link href={`/booking?service=${service.id}`}>
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
