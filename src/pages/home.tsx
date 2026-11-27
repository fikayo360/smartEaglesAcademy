import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SchoolMarquee } from "@/components/marquee/marquee"

export function Hero() {
  return (
    <>
      <section id="hero" className="mx-auto flex lg:min-h-[calc(100svh-4rem)] min-h-auto max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-10 pt-28 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
        </div>

        <h1 className="font-black uppercase leading-[0.82] tracking-tighter">
          <span className="block text-[clamp(3.25rem,15.5vw,17rem)]">
            Smart
          </span>
          <span
            className="block text-[clamp(3.25rem,15.5vw,17rem)] text-transparent text-right"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            Eagles 
          </span>
         <span
          className="block text-[clamp(3.25rem,15.5vw,17rem)]"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          Sp
          <img
            src="./ball.png"
            alt="o"
            className="inline-block h-[0.72em] w-[0.72em] align-baseline object-contain mx-[0.02em] "
          />
          rt
        </span>
          <span className="block text-[clamp(3.25rem,15.5vw,17rem)]">
            Academy.
          </span>
        </h1>
      </section>

      <SchoolMarquee />

      <section className="mx-auto grid max-w-screen-2xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:col-span-3">
          Who we are
        </p>
        <div className="space-y-8 md:col-span-9 lg:col-span-7">
          <p className="text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
            {/* TODO: replace with your friend's real vision statement */}
           We are a multi-sport academy built on discipline, technique and character. From first steps to international stage, we develop young athletes on and off the field across Football, 
           Basketball, Tennis, Swimming and Gymnastics — giving every child in Lagos a real pathway in sport.      
          </p>
          <Button size="lg" className="group rounded-full" asChild>
            <a href="#contact">
              Contact us
              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}