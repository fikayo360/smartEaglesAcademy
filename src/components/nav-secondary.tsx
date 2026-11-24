"use client"

import * as React from "react"
import { useTheme } from "./theme-provider"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"
import { Link,useLocation } from "react-router-dom"
export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url?: string
    icon?: React.ReactNode
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {

   const location = useLocation()
  const { theme, setTheme } = useTheme()

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light")
}

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
        {items.map((item) => {
       
        // 1. Define the core menu item content
        const menuContent = (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
            onClick={toggleTheme}
              className={`
                w-full transition-all duration-200 
                hover:!bg-[#80a2b3] 
                 !rounded-[50px] !cursor-pointer
              `}
            >
              {item.icon}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );

        // 2. Conditionally wrap with React Router's Link if item.url exists
        if (item.url) {
          return (
            <Link key={item.title} to={item.url}>
              <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
               
              className={`
                w-full transition-all duration-200 
                hover:!bg-[#80a2b3] 
                 !rounded-[50px] !cursor-pointer
              `}
            >
              {item.icon}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
            </Link>
          );
        }

        // 3. Return unwrapped menu item if there is no URL
        return menuContent;
      })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
