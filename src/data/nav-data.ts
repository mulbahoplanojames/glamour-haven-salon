export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

// Add new navigation items for our new features
export const extraNavItems = [
  { name: "Virtual Try-On", href: "/virtual-try-on" },
  { name: "Stylist Finder", href: "/stylist-finder" },
];

export const allNavItems = [...navigation, ...extraNavItems];
