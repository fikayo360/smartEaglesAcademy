import { AppSidebar } from "./app-sidebar"
import { ChartAreaInteractive } from "./chart-area-interactive"
import { SectionCards } from "./section-cards"
import { SiteHeader } from "@/components/site-header"
import { Outlet } from "react-router-dom"

import {
  SidebarInset,
  SidebarProvider,
} from "../components/ui/sidebar"



export default function ClientLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
     <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
