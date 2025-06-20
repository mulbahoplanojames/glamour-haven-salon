"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
// import services from "@/data/services.json";
import { stylists, timeSlots } from "@/data/data";
import { bookingFormSchema } from "@/schema/zod-schema";
import { getCookie } from "cookies-next/client";
import axios from "axios";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { handleFetchServices } from "@/utils/helper";
import { Service } from "@/types/types";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: handleFetchServices,
  });

  useEffect(() => {
    const storedToken = getCookie("access_token") as string | undefined;
    setToken(storedToken);
    setLoading(false);
  }, []);

  const defaultServiceId = searchParams.get("service");

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service: defaultServiceId || "",
      stylist: "",
      notes: "",
      date: new Date(),
      time: "",
    },
  });

  // Getting the user from the cookies
  const user = getCookie("user");

  async function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    setIsSubmitting(true);

    console.log("Form submitted:", values);

    try {
      if (loading && !token) {
        router.push("/sign-in");
        return;
      }

      const { service, stylist, notes, date, time } = values;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/book-appointment/`,
        {
          service,
          stylist,
          special_request: notes,
          date: format(date, "yyyy-MM-dd"),
          time,
          user: JSON.parse(user as string).full_name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Service Book Successful", {
        description: `Hi, ${
          user && JSON.parse(user as string).full_name
        } your service as been book successfully`,
      });

      const data = await response.data;

      return data;
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Booking Failed", {
        description: `Something went wrong. Please try again.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services &&
                    Array.isArray(services) &&
                    services.length > 0 &&
                    services.map((service: Service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - ${Number(service.price).toFixed(2)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Select the service you would like to book.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stylist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stylist</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a stylist" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {stylists.map((stylist) => (
                    <SelectItem key={stylist.id} value={stylist.name}>
                      {stylist.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose your preferred stylist.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={
                        (date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                          date.getDay() === 0 // Disable Sundays
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Select your preferred appointment date.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a time" />
                      <Clock className="h-4 w-4 opacity-50" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose your preferred appointment time.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Requests</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special requests or notes for your stylist"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Optional: Add any special requests or notes for your
                appointment.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full text-white cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </Form>
  );
}
