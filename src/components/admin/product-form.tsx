"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import ImageUpload from "@/components/ui/image-upload";
import { toast } from "sonner";

const productFormSchema = z.object({
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

// This would come from your database

const categories = [
  { label: "Shampoo", value: "shampoo" },
  { label: "Conditioner", value: "conditioner" },
  { label: "Styling", value: "styling" },
  { label: "Hair Color", value: "hair-color" },
  { label: "Treatment", value: "treatment" },
  { label: "Tools", value: "tools" },
];

export default function ProductForm({ productId }: { productId?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with default values or product data if editing
  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      featured: false,
      images: [],
    },
  });

  async function onSubmit(data: z.infer<typeof productFormSchema>) {
    setIsLoading(true);

    try {
      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);

      toast("Product created", {
        description: `${data.name} has been added to your products.`,
      });
    } catch (error) {
      toast("Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter product description"
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Featured Product
                    </FormLabel>
                    <FormDescription>
                      This product will appear on the homepage.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Images</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={(urls) => field.onChange(urls)}
                      onRemove={(url) =>
                        field.onChange(field.value.filter((val) => val !== url))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Upload product images. You can upload multiple images.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/products")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : productId
              ? "Update Product"
              : "Create Product"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
