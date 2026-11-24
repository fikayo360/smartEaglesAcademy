import { Button } from "../components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        
        <SidebarMenu className="gap-2">
          {items.map((item) => (
            <Link to={`${item.url}`} >
            <SidebarMenuItem key={item.title} >
              <SidebarMenuButton tooltip={item.title}  className={`
                      w-full transition-all duration-200 
                       hover:!bg-[#80a2b3]
                      /* Optional: Give the active state a distinct style */
                      data-[active=true]:!bg-[#085e8a]  !rounded-[50px] !cursor-pointer
                    `} >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
