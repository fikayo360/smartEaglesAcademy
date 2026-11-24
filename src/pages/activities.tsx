import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"



type Activity = {
  title: string
  type: string
  date: string
  location?: string
  description: string
  /** Put images in /public/events and update the paths if needed */
  image: string
}

// TODO: all of this is made-up sample content, replace with real events
const activities: Activity[] = [
  {
    title: "Spain international football tour",
    type: "Sport tour",
    date: "2027-07-13",
    description:
      "Our football scouting program",
    image: "/prg1.jpeg",
  },{
    title: "New Year Swim Gala",
    type: "Competition",
    date: "2027-01-16",
    location: "Partner Aquatic Centre, Lekki",
    description:
      "Friendly relays and stroke races for academy swimmers and invited schools.",
    image: "/prg3.jpeg",
  },
  {
    title: "Elite Goalkeeper Clinic",
    type: "Sport Camp",
    date: "2027-02-06",
    location: "Academy Training Ground, Lagos",
    description:
      "A one-day masterclass on positioning, handling and distribution with guest coaches.",
    image: "/prg4.jpeg",
  }
]

const dayFormat = new Intl.DateTimeFormat("en-NG", { day: "2-digit" })
const monthFormat = new Intl.DateTimeFormat("en-NG", { month: "short" })
const yearFormat = new Intl.DateTimeFormat("en-NG", { year: "numeric" })

function ActivityCard({ activity }: { activity: Activity }) {
  // Noon avoids timezone shifts moving the date to the previous day
  const date = new Date(`${activity.date}T12:00:00`)

  return (
    <Card className="group gap-0 overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={activity.image}
          alt={`${activity.title} at the academy`}
          loading="lazy"
          className="size-full object-cover transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        <Badge
          variant={activity.type === "Competition" ? "default" : "secondary"}
          className="absolute left-4 top-4 uppercase tracking-widest"
        >
          {activity.type}
        </Badge>

        <div className="absolute bottom-0 right-0 flex flex-col items-center bg-background px-4 py-2 text-foreground">
          <span className="text-3xl font-black leading-none tracking-tighter">
            {dayFormat.format(date)}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            {monthFormat.format(date)}
          </span>
        </div>
      </div>

      <CardContent className="space-y-3 px-0 pb-0 pt-5">
        <h3 className="text-2xl font-black uppercase leading-none tracking-tighter sm:text-3xl">
          {activity.title}
        </h3>
        <p className="text-muted-foreground">{activity.description}</p>

        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            <time dateTime={activity.date}>
              {dayFormat.format(date)} {monthFormat.format(date)}{" "}
              {yearFormat.format(date)}
            </time>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {activity.location}
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export function UpcomingActivities() {
  return (
    <section
      id="programs"
      aria-labelledby="activities-heading"
      className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2
          id="activities-heading"
          className="text-[clamp(3.25rem,11vw,11rem)] font-black uppercase leading-[0.85] tracking-tighter"
        >
          Upcoming{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            Activities
          </span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">
          Competitions and sport camps to test, sharpen and grow every player.
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </div>
    </section>
  )
}