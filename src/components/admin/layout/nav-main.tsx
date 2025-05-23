"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = item.items
            ? item.items.some((subItem) => subItem.url === pathname)
            : item.url === pathname;

          const isSubItemActive = item.items?.some(
            (subItem) => subItem.url === pathname
          );

          return item.items ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`${
                            isSubItemActive
                              ? "bg-primary/50 text-primary-foreground"
                              : ""
                          } hover:bg-primary/50`}
                        >
                          <Link href={subItem.url}>
                            {subItem.icon && <subItem.icon />}
                            <span className="truncate">{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuButton
              tooltip={item.title}
              asChild
              key={item.title}
              className={`${
                isActive ? "bg-primary text-primary-foreground" : ""
              } hover:bg-primary/50`}
            >
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

// <Collapsible
// key={item.title}
// asChild
// defaultOpen={item.isActive}
// className="group/collapsible"
// >
// <SidebarMenuItem>
//   <CollapsibleTrigger asChild>
//     <SidebarMenuButton tooltip={item.title}>
//       {item.icon && <item.icon />}
//       <span>{item.title}</span>
//       <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
//     </SidebarMenuButton>
//   </CollapsibleTrigger>
//   <CollapsibleContent>
//     <SidebarMenuSub>
//       {item.items?.map((subItem) => (
//         <SidebarMenuSubItem key={subItem.title}>
//           <SidebarMenuSubButton asChild>
//             <a href={subItem.url}>
//               <span>{subItem.title}</span>
//             </a>
//           </SidebarMenuSubButton>
//         </SidebarMenuSubItem>
//       ))}
//     </SidebarMenuSub>
//   </CollapsibleContent>
// </SidebarMenuItem>
// </Collapsible>
