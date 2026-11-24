
import { Outlet } from "react-router-dom"

import {
  SidebarInset,
  SidebarProvider,
} from "../components/ui/sidebar"
import { AgentAppSidebar } from "./agentApp-sidebar"



export default function AgentLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AgentAppSidebar variant="inset"/>
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
