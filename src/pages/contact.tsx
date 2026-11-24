import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// TODO: academy's WhatsApp number in international format, digits only
// (Nigeria example: 2348012345678, no "+", spaces or leading 0)
const WHATSAPP_NUMBER = "2348028299398"

type Errors = Partial<Record<"name" | "phone" | "message", string>>

const fieldClass =
  "rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 text-lg shadow-none focus-visible:border-foreground focus-visible:ring-0 aria-invalid:border-destructive"

function validate(name: string, phone: string, message: string): Errors {
  const errors: Errors = {}
  if (!name.trim()) errors.name = "Please enter your name."
  const digits = phone.replace(/[\s()+-]/g, "")
  if (!/^\d{7,15}$/.test(digits)) {
    errors.phone = "Please enter a valid phone number."
  }
  if (!message.trim()) errors.message = "Please write a short message."
  return errors
}

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "")
    const phone = String(data.get("phone") ?? "")
    const message = String(data.get("message") ?? "")

    const found = validate(name, phone, message)
    setErrors(found)
    setSent(false)
    if (Object.keys(found).length > 0) return

    const text = [
      "Hello, I'd like to learn more about the academy.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      message.trim(),
    ].join("\n")

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")

    form.reset()
    setSent(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <h2
        id="contact-heading"
        className="mb-10 text-[clamp(3.25rem,13vw,13rem)] font-black uppercase leading-[0.85] tracking-tighter md:mb-16"
      >
        Learn{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          More
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="space-y-4 md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Get in touch
          </p>
          <p className="text-xl font-medium leading-snug sm:text-2xl">
            Questions about programs, trials, camps or tours? Send us a
            message and we'll reply on WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8 md:col-span-8 lg:col-span-7"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldClass}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                Phone number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+234 800 000 0000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={fieldClass}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your child, their age and what you're looking for"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} resize-none`}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" className="group rounded-full px-8">
              Learn more
              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            {sent && (
              <p role="status" className="text-sm text-muted-foreground">
                WhatsApp should have opened with your message. Just tap send.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}