import * as React from "react"
import { NavMain } from "../components/nav-main"
import { NavSecondary } from "../components/nav-secondary"
import { Separator } from "../components/ui/separator"
import {
  Sidebar,
  SidebarContent
} from "../components/ui/sidebar"
import {  Archive, BadgeCheck, Eclipse, House,LogOut,SquarePlus } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/clientDashboard/home",
      icon: (
        <House strokeWidth={2}
        />
      ),
    },
    {
      title: "Create Ticket",
      url: "/clientDashboard/createTicket",
      icon: (
        <SquarePlus strokeWidth={2}
        />
      ),
    },
    {
      title: "Past tickets",
      url: "/viewPastTickets",
      icon: (
        <Archive strokeWidth={2}
        />
      ),
    },
    {
      title: "Verify ticket",
      url: "/verifyTicket",
      icon: (
        <BadgeCheck strokeWidth={2}
        />
      ),
    },
  
  ],
  // navClouds: [
  //   {
  //     title: "Capture",
  //     icon: (
  //       <CameraIcon
  //       />
  //     ),
  //     isActive: true,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Proposal",
  //     icon: (
  //       <FileTextIcon
  //       />
  //     ),
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Prompts",
  //     icon: (
  //       <FileTextIcon
  //       />
  //     ),
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],

  navSecondary: [
  {
      title: "Toggle darkmode",
      icon: (
        <Eclipse strokeWidth={2}
        />
      ),
    },
    {
      title: "Logout",
      url: "/login",
      icon: (
        <LogOut strokeWidth={2}
        />
      ),
    }
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="py-4">
      <div className="flex gap-0.5 items-center mb-2 !w-[100%]">
        <img src='./../../public/gslLogo.png' className="h-12" />
        <span className="text-lg font-bold ml-0">Gsl support</span>
      </div>
       <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-0.25"
        />
      <SidebarContent className="p-2">
        <NavMain items={data.navMain}/>
        <NavSecondary items={data.navSecondary} className="mt-auto"/>
      </SidebarContent>
      
    </Sidebar>
  )
}
