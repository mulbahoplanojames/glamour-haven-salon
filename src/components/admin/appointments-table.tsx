"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

interface Appointment {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  notes?: string;
  duration: number;
  price: number;
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    customerPhone: "+1 (555) 123-4567",
    service: "Hair Cut & Style",
    stylist: "Emma Wilson",
    date: "2024-01-15",
    time: "10:00",
    status: "confirmed",
    notes: "First time client, prefers shorter styles",
    duration: 60,
    price: 85,
  },
  {
    id: "2",
    customerName: "Michael Chen",
    customerEmail: "michael@example.com",
    customerPhone: "+1 (555) 234-5678",
    service: "Hair Color",
    stylist: "Sophia Davis",
    date: "2024-01-15",
    time: "14:30",
    status: "pending",
    notes: "Wants to go from brown to blonde",
    duration: 180,
    price: 150,
  },
  {
    id: "3",
    customerName: "Lisa Rodriguez",
    customerEmail: "lisa@example.com",
    customerPhone: "+1 (555) 345-6789",
    service: "Facial Treatment",
    stylist: "Olivia Brown",
    date: "2024-01-16",
    time: "11:00",
    status: "completed",
    notes: "Regular client, sensitive skin",
    duration: 90,
    price: 120,
  },
  {
    id: "4",
    customerName: "David Kim",
    customerEmail: "david@example.com",
    customerPhone: "+1 (555) 456-7890",
    service: "Beard Trim",
    stylist: "James Miller",
    date: "2024-01-16",
    time: "16:00",
    status: "cancelled",
    notes: "Cancelled due to emergency",
    duration: 30,
    price: 35,
  },
];

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AppointmentsTable() {
  const [appointments, setAppointments] =
    useState<Appointment[]>(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.stylist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (
    appointmentId: string,
    newStatus: Appointment["status"]
  ) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
    toast("Status Updated", {
      description: `Appointment status changed to ${newStatus}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search appointments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full "
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Appointments Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Stylist</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">
                      {appointment.customerName}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {appointment.customerEmail}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {appointment.customerPhone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{appointment.service}</div>
                    <div className="text-sm text-gray-500">
                      {appointment.duration} minutes
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    {appointment.stylist}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      {appointment.time}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Select
                    value={appointment.status}
                    onValueChange={(value) =>
                      handleStatusUpdate(
                        appointment.id,
                        value as Appointment["status"]
                      )
                    }
                  >
                    <SelectTrigger className="w-32">
                      <Badge className={statusColors[appointment.status]}>
                        {appointment.status}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <div className="font-medium">${appointment.price}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
