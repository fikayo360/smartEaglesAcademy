import { Badge } from "@/components/ui/badge"

type Sport = {
  name: string
  tagline: string
  /** Put images in /public/sports and update the paths if needed */
  image: string
  /** Controls the tile height so the grid looks like a masonry layout */
  ratio: string
}

// TODO: replace taglines with the academy's real descriptions
const sports: Sport[] = [
  {
    name: "Football",
    tagline: "Our home. Technique, tactics and match craft.",
    image: "./football.jpeg",
    ratio: "aspect-[4/5]",
  },
  {
    name: "Basketball",
    tagline: "Speed, spacing and team play.",
    image: "./basketball.jpeg",
    ratio: "aspect-square",
  },
  {
    name: "Swimming",
    tagline: "Water confidence, stroke technique and endurance.",
    image: "./swimming.jpeg",
    ratio: "aspect-[3/4]",
  },
  {
    name: "Tennis",
    tagline: "Footwork, focus and fierce one-on-one competition.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tInC8gm_YujZVnudb1Y26hGnGwp6769s5iCcjVKvJ0DVjk_F70QQYCYJ&s=10",
    ratio: "aspect-[4/3]",
  },
  {
    name: "Gymnastics",
    tagline: "Strength, balance and body control.",
    image: "./gym.jpeg",
    ratio: "aspect-[4/5]",
  },
]

export function SportCategories() {
  return (
    <section
      id="categories"
      aria-labelledby="sports-heading"
      className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2
          id="sports-heading"
          className="text-[clamp(3.25rem,11vw,11rem)] font-black uppercase leading-[0.85] tracking-tighter"
        >
          Sport{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            Programs
          </span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">
          Football is where we started, but great athletes are built across
          disciplines.
        </p>
      </div>

      {/* CSS columns give a true masonry flow with no JS */}
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {sports.map((sport, i) => (
          <figure
            key={sport.name}
            className="group relative mb-4 break-inside-avoid overflow-hidden bg-muted sm:mb-6"
          >
            <div className={`w-full ${sport.ratio}`}>
              <img
                src={sport.image}
                alt={`${sport.name} training at the academy`}
                loading="lazy"
                className="size-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <Badge
              variant="secondary"
              className="absolute left-4 top-4 uppercase tracking-widest"
            >
              {String(i + 1).padStart(2, "0")}
            </Badge>

            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
                {sport.name}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-white/80 opacity-100 transition-all duration-300 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {sport.tagline}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}