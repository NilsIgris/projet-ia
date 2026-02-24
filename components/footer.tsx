"use client"

export function Footer() {
  return (
    <footer id="about" className="relative border-t border-border/50">
      {/* Gradient line */}
      <div className="absolute left-1/2 top-0 h-px w-1/3 max-w-xs -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
                  <line x1="8" y1="2" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="8" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-serif text-lg tracking-wider text-foreground">CHRONOS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world&apos;s premier luxury time travel agency. Making history
              accessible to those who refuse to merely read about it.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-foreground">
                Journeys
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {["Popular Eras", "Private Tours", "Group Expeditions", "Custom Timelines"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-foreground">
                Company
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {["About Us", "Safety", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Stay Informed
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Receive exclusive destination reveals and early booking access.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"Chronos Voyages. All timelines reserved."}
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Temporal Accords"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
