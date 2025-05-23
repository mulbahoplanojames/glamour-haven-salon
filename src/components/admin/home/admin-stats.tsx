import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Scissors, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Products",
    value: "156",
    change: "+12%",
    icon: Package,
    href: "/admin/products",
  },
  {
    title: "Total Services",
    value: "24",
    change: "+3%",
    icon: Scissors,
    href: "/admin/services",
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+18%",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "This Month's Revenue",
    value: "$12,450",
    change: "+25%",
    icon: DollarSign,
    href: "/admin/appointments",
  },
];

export default function AdminStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="hover:shadow-md transition-shadow py-4"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between mt-2">
              <Badge
                variant="secondary"
                className="text-green-600 bg-green-100"
              >
                {stat.change}
              </Badge>
              <Button variant="ghost" size="sm" asChild>
                <Link href={stat.href}>View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
