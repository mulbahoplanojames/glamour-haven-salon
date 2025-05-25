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

export const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/, {
      message: "Password must include letters, numbers, and symbols",
    }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  fullName: z.string().min(1, { message: "Full name is required" }),
});

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/, {
      message: "Password must include letters, numbers, and symbols",
    }),
});

export const productFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Product name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  price: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Price must be a valid number.",
  }),
  category: z.string().min(1, { message: "Please select a category." }),
  stock: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Stock must be a valid number.",
  }),
  featured: z.boolean().default(false),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required." }),
});

export const serviceFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Service name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  price: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Price must be a valid number.",
  }),
  duration: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Duration must be a valid number.",
  }),
  category: z.string().min(1, { message: "Please select a category." }),
  featured: z.boolean().default(false),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required." }),
});
