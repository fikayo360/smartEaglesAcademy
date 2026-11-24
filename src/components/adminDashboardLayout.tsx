
import { Outlet } from "react-router-dom"

import {
  SidebarInset,
  SidebarProvider,
} from "../components/ui/sidebar"
import {  } from "./agentApp-sidebar"
import { AdminAppSidebar } from './adminApp-sidebar';



export default function AdminLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AdminAppSidebar variant="sidebar" />
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
