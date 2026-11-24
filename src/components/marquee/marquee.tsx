import './marquee.css'

type School = {
  name: string
  /** Drop real logo files in /public/schools and set the path, e.g. "/schools/greensprings.svg" */
  logo?: string
}

const schools: School[] = [
  { name: "Greensprings",logo:'./gslLogo.png' },
  { name: "Corona Schools",logo:'./corona.webp' },
  { name: "BIS Lagos",logo:'./bis.png' },
  { name: "The Grange School",logo:'./grange.webp' },
  { name: "Atlantic Hall",logo:'./atlhall.png' },
  { name: "Chrisland",logo:'./chrisland.png' },
  { name: "Dowen College",logo:'./dowen.png' },
]

function SchoolMark({ school }: { school: School }) {
  if (school.logo) {
    return (
      <img
        src={school.logo}
        alt={school.name}
        className=" h-30 w-auto opacity-70  transition hover:opacity-100 invert dark:invert-0"
        loading="lazy"
      />
    )
  }

  // Wordmark fallback until real logos are added
  return (
    <span className="whitespace-nowrap text-xl font-black uppercase tracking-tight text-muted-foreground transition-colors hover:text-foreground sm:text-2xl">
      {school.name}
    </span>
  )
}

export function SchoolMarquee() {
  return (
    <section
      aria-label="Schools our players come from"
      className="relative overflow-hidden border-y bg-muted/40 py-6 sm:py-8"
    >
      <p className="mb-8 px-4 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground sm:px-6">
        Trusted by top schools across Lagos
      </p>

      <div className="marquee-mask group flex overflow-hidden">
        {/* Two identical tracks give a seamless loop */}
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="marquee-track flex shrink-0 items-center gap-[2rem] pr-12 sm:gap-20 sm:pr-20"
          >
            {schools.map((school) => (
              <li key={`${track}-${school.name}`}>
                <SchoolMark school={school} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}