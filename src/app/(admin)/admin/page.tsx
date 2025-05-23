import AdminStats from "@/components/admin/home/admin-stats";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";

const recentActivities = [
  {
    type: "appointment",
    message: "New appointment booked by Sarah Johnson",
    time: "2 minutes ago",
  },
  {
    type: "review",
    message: "5-star review received for Hair Color service",
    time: "15 minutes ago",
  },
  {
    type: "product",
    message: "Low stock alert: Olaplex Treatment",
    time: "1 hour ago",
  },
  {
    type: "user",
    message: "New user registration: Michael Brown",
    time: "2 hours ago",
  },
];

export default function AdminHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here&apos;s what&apos;s happening at your salon.
        </p>
      </div>
      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button asChild className="h-20 flex-col">
                <Link href="/admin/products/new">
                  <Plus className="h-6 w-6 mb-2" />
                  Add Product
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col">
                <Link href="/admin/services/new">
                  <Plus className="h-6 w-6 mb-2" />
                  Add Service
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col">
                <Link href="/admin/appointments">
                  <Calendar className="h-6 w-6 mb-2" />
                  View Appointments
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col">
                <Link href="/admin/reviews">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Manage Reviews
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
