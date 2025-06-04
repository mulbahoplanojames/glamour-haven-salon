"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Product } from "@/types/product-type";
// import products from "@/data/products.json";
import ProductCard from "@/components/products/product-card";
import Hero from "@/components/hero";
import { Slider } from "@/components/ui/slider";
import { useQuery } from "@tanstack/react-query";
import { handleFetchProducts } from "@/utils/helper";

export default function ProductsPage() {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: handleFetchProducts,
  });

  // console.log("Products", products);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showInStock, setShowInStock] = useState(true);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showBestSellers, setShowBestSellers] = useState(false);
  const [showNew, setShowNew] = useState(false);

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(
      new Set(products.map((product: Product) => product.category))
    ),
  ];

  // Filter products based on all criteria
  useEffect(() => {
    let result = products;

    // Search term filter
    if (searchTerm) {
      result = result.filter(
        (product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product
            ?.description!.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product?.brand!.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product: Product) => product.category === selectedCategory
      );
    }

    // Price range filter
    result = result.filter(
      (product: Product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Featured filter
    if (showFeatured) {
      result = result.filter((product: Product) => product.featured);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      // Default is featured
      default:
        // For featured, prioritize featured items, then best sellers, then new
        result = [...result].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    setFilteredProducts(result);
  }, [
    searchTerm,
    selectedCategory,
    sortBy,
    priceRange,
    showInStock,
    showFeatured,
    showBestSellers,
    showNew,
  ]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("featured");
    setPriceRange([0, 50]);
    setShowInStock(true);
    setShowFeatured(false);
    setShowBestSellers(false);
    setShowNew(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main>
      <Hero
        title="Shop Our Products"
        description="Discover our premium hair care products, specially selected by our
              stylists to help you maintain salon-quality hair at home."
      />

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Search and Filter Bar */}
            <div className="w-full md:w-2/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="w-full md:w-1/3 flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>
                      Narrow down products based on your preferences
                    </SheetDescription>
                  </SheetHeader>

                  <div className="py-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Category</h3>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category === "all" ? "All Categories" : category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Price Range</h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={[0, 50]}
                          max={50}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SheetFooter>
                    <Button variant="outline" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-8"
          >
            <TabsList className="w-full flex flex-wrap justify-start mb-6 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 m-1"
                >
                  {category === "all" ? "All Categories" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <SlidersHorizontal className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
