import { z } from "zod";

export const bookingFormSchema = z.object({
  service: z.string({
    message: "Please select a service",
  }),
  stylist: z.string({
    message: "Please select a stylist",
  }),
  date: z.date({
    message: "Please select a date",
  }),
  time: z.string({
    message: "Please select a time",
  }),
  notes: z.string().optional(),
});

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zipCode: z
    .string()
    .min(5, { message: "Zip code must be at least 5 characters" }),
  paymentMethod: z.enum(["credit-card", "paypal"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  notes: z.string().optional(),
});
