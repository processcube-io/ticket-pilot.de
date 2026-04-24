const usefulLinks = [
  { href: "https://www.processcube.io/", label: "Home" },
  { href: "https://www.processcube.io/", label: "\u00DCber uns" },
  { href: "https://www.processcube.io/support-1", label: "Support" },
  { href: "https://www.processcube.io/contactus", label: "Kontakt" },
  { href: "https://www.processcube.io/impressum", label: "Impressum" },
  { href: "https://www.processcube.io/datenschutz", label: "Datenschutz" },
  {
    href: "https://www.processcube.io/third-party-licenses",
    label: "Drittanbieterlizenzen",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/processcube-ug",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/processcube-io",
    icon: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@processcube",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/processcubeio",
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/processcubeio",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/processcube",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line text-text-muted text-sm">
      <div className="container py-12 max-tablet:py-8">
        {/* Oberer Bereich: 3 Spalten + Brand */}
        <div className="grid gap-10 desktop:grid-cols-[1.2fr_1fr_1fr_1fr] max-desktop:grid-cols-2 max-tablet:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="" width={32} height={32} className="rounded-lg" />
              <span className="text-text-primary font-bold">
                ProcessCube® | ticketpilot
              </span>
            </div>
            <p className="m-0 max-w-[320px]">
              KI-Support, den dein Dev freigibt. On-Prem auf deiner
              Infrastruktur, monatlich k&uuml;ndbar.
            </p>
            <p className="m-0 mt-4 text-[13px]">
              Ein Produkt der ProcessCube UG (haftungsbeschr&auml;nkt).
            </p>
          </div>

          {/* Nützliche Links */}
          <div>
            <h3 className="font-headline text-[18px] uppercase tracking-[0.08em] text-text-primary m-0 mb-4">
              N&uuml;tzliche Links
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {usefulLinks.map((l) => (
                <li key={l.label + l.href}>
                  <a
                    href={l.href}
                    className="hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-headline text-[18px] uppercase tracking-[0.08em] text-text-primary m-0 mb-4">
              Nimm Kontakt zu uns auf
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>
                <a
                  href="https://www.processcube.io/contactus"
                  className="hover:text-text-primary transition-colors"
                >
                  Kontaktformular
                </a>
              </li>
              <li>
                <a
                  href="https://www.processcube.io/kontakt"
                  className="hover:text-text-primary transition-colors"
                >
                  info@processcube.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+492098833988"
                  className="hover:text-text-primary transition-colors"
                >
                  +49 209-883 39 883
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-headline text-[18px] uppercase tracking-[0.08em] text-text-primary m-0 mb-4">
              Social Media
            </h3>
            <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-10 h-10 grid place-items-center rounded-md border border-line text-text-muted hover:text-accent hover:border-accent-border transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unterer Bereich: Copyright */}
        <div className="mt-10 pt-6 border-t border-line/60 flex flex-wrap items-center justify-between gap-3 text-[13px]">
          <span>
            Copyright &copy; {new Date().getFullYear()} ProcessCube UG (haftungsbeschr&auml;nkt)
          </span>
          <span>
            On-Prem auf deiner Infrastruktur &middot; Monatlich k&uuml;ndbar
          </span>
        </div>
      </div>
    </footer>
  );
}
