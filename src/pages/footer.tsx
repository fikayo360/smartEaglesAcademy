import { ArrowUpRight } from "lucide-react"

// TODO: replace with the academy's real profiles
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/aderintoazeez?knvt=MTZ6NTA0YTB6N2pkNw==" },
  { label: "Facebook", href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fchat.whatsapp.com%2FG6Ir3AP0RunD1B1iaRLME7%3Fmode%3Dgi_t%26fbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgFicmlkETFYa2xPZWRlaTJvbXhJbmNTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHxzQbqGbMu1JPwOrkrFSmV9VbOKi-NVkkkGu20me7c_OVt0WYpCUhp7l4sbo_aem_yGy8HlTgWQGm-Zha45SnPg&h=AUB8UrhbEgsyEspOgjcYeazzE7DGhgQJvYJi1JlSgblFykCRGsZFM9wfuwCiaohOqM_JnokObjzlnuJE-3NOuzwDcuQkoVAEyZo7BjPIeHSvhCmdTh4WAVa4GESGLaaUdg" },
]

// TODO: your own name and website
const DEVELOPER = { name: "FikayoBytes", href: "https://fikayobytes.netlify.app/" }

export function Footer() {
  return (
    <footer>
      {/* Social links strip */}
      <div className="border-y bg-muted/40">
        <nav
          aria-label="Social media"
          className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6 md:justify-between lg:px-10"
        >
          <span className="hidden text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:block">
            Follow the journey
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-lg font-black uppercase tracking-tight transition-colors hover:text-primary sm:text-xl"
                >
                  {s.label}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-2 px-4 py-5 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:px-6 lg:px-10">
        <span>Powered by</span>
        <a
          href={DEVELOPER.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-foreground underline-offset-4 hover:underline"
        >
          {DEVELOPER.name}
        </a>
      </div>
    </footer>
  )
}