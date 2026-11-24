import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./mode-toggle"

// Plain anchors so this works with any router.
// With React Router, swap <a href> for <Link to>.
const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  // { label: "Programs", href: "#programs" },
  { label: "Sport Categories", href: "#categories" },
  // { label: "International Tours", href: "#international-tours" },
]

const BRAND = "Smart Eagles Academy" // TODO: replace with the academy name

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-slate-900/20 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10"
      >
        <div className="flex items-center">
          <img className='w-[40px] h-[40px]' src="./smartEagles.png" alt="Smart Eagles academy logo"/>
          <a
          href="/"
          className="text-lg font-black uppercase tracking-tighter sm:text-xl"
        >
          {BRAND}
        </a>
        </div>
        

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Button variant="ghost" size="sm" asChild>
                <a href={link.href}>{link.label}</a>
              </Button>
            </li>
          ))}
          <li>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </li>
          <li className="pl-3">
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile / tablet */}
        <div className="flex items-center gap-3 lg:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left font-black uppercase tracking-tighter">
                  {BRAND}
                </SheetTitle>
              </SheetHeader>
              <Separator />
              <ul className="flex flex-col gap-1 px-4">
                {[...links, { label: "Contact Us", href: "/contact" }].map(
                  (link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block py-3 text-3xl font-black uppercase tracking-tighter transition-colors hover:text-primary"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  )
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}