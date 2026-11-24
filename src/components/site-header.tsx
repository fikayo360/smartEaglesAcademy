import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"
import {HandMetal } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear pt-1 group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex  w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex gap-0.5 items-center">
           <HandMetal size={18} strokeWidth={1.5}/>
          <h1 className="font-medium text-lg">Hello Justina</h1>
        </div>
  
      </div>
    </header>
  )
}
