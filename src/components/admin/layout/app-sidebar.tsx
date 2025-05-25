"use client";

import * as React from "react";
import {
  Brush,
  Calendar,
  LayoutDashboard,
  List,
  MessageSquare,
  Package,
  Plus,
  Scissors,
  Settings2,
  User,
} from "lucide-react";

import { NavMain } from "@/components/admin/layout/nav-main";
import { NavUser } from "@/components/admin/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@gmail.com.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: Package,
      isActive: true,
      items: [
        {
          title: "All Products",
          url: "/admin/products",
          icon: List,
        },
        {
          title: "Add Product",
          url: "/admin/products/new",
          icon: Plus,
        },
      ],
    },

    {
      title: "Services",
      url: "#",
      icon: Scissors,
      items: [
        {
          title: "All Services",
          url: "/admin/services",
          icon: List,
        },
        {
          title: "Add Service",
          url: "/admin/services/new",
          icon: Plus,
        },
      ],
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: User,
    },
    {
      title: "Reviews",
      url: "/admin/reviews",
      icon: MessageSquare,
    },
    {
      title: "Appointment",
      url: "/admin/appointments",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-primary">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="bg-slate-100 dark:bg-transparent hover:bg-slate-200"
            >
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary dark:bg-amber-600 text-sidebar-primary-foreground">
                  <Brush className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Glamour Haven</span>
                  <span className="truncate text-xs">Salon</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
