import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Tour = {
  city: string
  country: string
  title: string
  description: string
  /** Put images in /public/tours and update the paths if needed */
  image: string
}

// TODO: all of this is made-up sample content, replace with real tours
const tours: Tour[] = [
  {
    city: "Barcelona",
    country: "Spain",
    title: "Spanish Football Experience",
    description:
      "Ten days of high-level training, friendly matches against local academies and a stadium visit.",
    image: "/tours/barcelona.jpg",
  },
  {
    city: "Manchester",
    country: "England",
    title: "English Pathway Tour",
    description:
      "Train in the home of the Premier League, play youth fixtures and learn what it takes to compete in Europe.",
    image: "/tours/manchester.jpg",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    title: "Atlantic Cup Camp",
    description:
      "A tournament-style tour with daily coaching, video analysis and cultural exploration.",
    image: "/tours/lisbon.jpg",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    title: "Desert Showcase",
    description:
      "International friendlies and showcase games in world-class facilities, open to our top age groups.",
    image: "/tours/dubai.jpg",
  },
  {
    city: "Accra",
    country: "Ghana",
    title: "West Africa Friendship Series",
    description:
      "A short regional trip to face rival academies and build lasting friendships across the region.",
    image: "/tours/accra.jpg",
  },
  {
    city: "Paris",
    country: "France",
    title: "French Technical Camp",
    description:
      "A technique-first programme focused on ball mastery, movement and tactical awareness.",
    image: "/tours/paris.jpg",
  },
]

function TourCard({ tour, index }: { tour: Tour; index: number }) {
  return (
    <Card className="group gap-0 overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={tour.image}
          alt={`${tour.city}, ${tour.country}`}
          loading="lazy"
          className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Badge
          variant="secondary"
          className="absolute left-4 top-4 uppercase tracking-widest"
        >
          {String(index + 1).padStart(2, "0")}
        </Badge>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
            {tour.country}
          </p>
          <p className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">
            {tour.city}
          </p>
        </div>
      </div>

      <CardContent className="space-y-2 px-0 pb-0 pt-5">
        <h3 className="text-xl font-black uppercase leading-tight tracking-tight sm:text-2xl">
          {tour.title}
        </h3>
        <p className="text-muted-foreground">{tour.description}</p>
      </CardContent>
    </Card>
  )
}

export function InternationalTours() {
  return (
    <section
      id="international-tours"
      aria-labelledby="tours-heading"
      className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <h2
        id="tours-heading"
        className="mb-10 text-[clamp(3.25rem,11vw,11rem)] font-black uppercase leading-[0.85] tracking-tighter md:mb-14"
      >
        International{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          Tours
        </span>
      </h2>

      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:col-span-3">
          Beyond Lagos
        </p>
        <div className="space-y-6 md:col-span-9 lg:col-span-7">
          <p className="text-xl font-medium leading-snug sm:text-2xl lg:text-3xl">
            {/* TODO: replace with the academy's real tour pitch */}
            Every year, our players travel abroad to train, compete and see
            the game from a new angle. Our international tours combine
            high-level coaching, friendly matches against overseas academies
            and cultural experiences that build confidence, independence and
            a global mindset.
          </p>
          <Button variant="outline" className="group rounded-full" asChild>
            <a href="/contact">
              Ask about upcoming tours
              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, i) => (
          <TourCard key={tour.title} tour={tour} index={i} />
        ))}
      </div>
    </section>
  )
}