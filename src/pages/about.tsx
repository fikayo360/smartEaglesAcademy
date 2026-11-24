import { Separator } from "@/components/ui/separator"

// TODO: replace all copy below with your friend's real content
const CEO = {
  name: "Aderinto",
  title: "Founder & CEO",
  image: "/smartCeo.jpeg", // put the file in /public
}

const story = [
  "It started on a dusty pitch with a handful of kids and one belief: talent in Lagos is everywhere, but opportunity is not. What began as weekend training sessions grew into a full academy built around structure, coaching and care.",
  "Today, our players train with purpose, compete at a high level and carry the name of the academy with pride, in school, at home and on the pitch.",
]

const values = [
  { title: "Discipline", text: "Show up, work hard, repeat." },
  { title: "Respect", text: "For teammates, coaches and the game." },
  { title: "Excellence", text: "Small details, every single day." },
  { title: "Community", text: "We rise together, on and off the pitch." },
  { title: "Integrity", text: "Do the right thing when nobody is watching." },
]

function Block({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-4 py-10 sm:grid-cols-12 sm:gap-6 sm:py-14">
      <div className="sm:col-span-4">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {index}
        </span>
        <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
          {title}
        </h3>
      </div>
      <div className="sm:col-span-8">{children}</div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <h2
        id="about-heading"
        className="mb-10 text-[clamp(3.25rem,13vw,13rem)] font-black uppercase leading-[0.85] tracking-tighter md:mb-16"
      >
        About{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          Us
        </span>
      </h2>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Portrait: first on mobile, sticky on the right on desktop */}
        <aside className="order-first lg:order-last lg:col-span-5">
          <figure className="lg:sticky lg:top-24">
            <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
              <img
                src={CEO.image}
                alt={`Portrait of ${CEO.name}, ${CEO.title}`}
                className="size-full object-cover transition duration-500"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t pt-4">
              <span className="text-lg font-black uppercase tracking-tight">
                {CEO.name}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {CEO.title}
              </span>
            </figcaption>
          </figure>
        </aside>

        {/* Content */}
        <div className="lg:col-span-7">
          <Separator />
          <Block index="01" title="Our Story">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Block>

          <Separator />
          <Block index="02" title="Vision">
            <p className="text-xl font-medium leading-snug sm:text-2xl">
              To be West Africa's leading football academy, producing
              world-class players and good people who represent Nigeria on
              the biggest stages.
            </p>
          </Block>

          <Separator />
          <Block index="03" title="Mission">
            <p className="text-xl font-medium leading-snug sm:text-2xl">
              To give young players elite coaching, a safe environment and a
              clear pathway from the local pitch to international football,
              without ever neglecting their education and character.
            </p>
          </Block>

          <Separator />
          <Block index="04" title="Values">
            <ul className="divide-y">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  className="flex items-baseline gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="w-6 text-xs font-medium text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                      {v.title}
                    </p>
                    <p className="text-muted-foreground">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Block>
          <Separator />
        </div>
      </div>
    </section>
  )
}