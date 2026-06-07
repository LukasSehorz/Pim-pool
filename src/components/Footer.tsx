import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Youtube, FileDown } from "lucide-react";
import { COMPANY, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 gradient-deep text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-lg bg-primary grid place-items-center font-bold">P</div>
              <div className="font-extrabold text-xl">POOLCAP</div>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              {COMPANY.full}. Premium Poolabdeckungen, Überdachungen und Wassertechnik –
              seit {COMPANY.since} im {COMPANY.region}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-primary" />{COMPANY.street}, {COMPANY.zip} {COMPANY.city}</div>
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-primary"><Phone className="size-4 text-primary" />{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="size-4 text-primary" />{COMPANY.email}</a>
              <a href={COMPANY.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><Youtube className="size-4 text-primary" />YouTube-Kanal</a>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <FileDown className="size-4" /> Komplettes Angebot als PDF
            </a>
          </div>

          <div className="lg:col-span-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {NAV.filter((n) => n.children).map((sec) => (
              <div key={sec.to}>
                <Link to={sec.to} className="font-semibold mb-3 inline-block hover:text-primary">{sec.label}</Link>
                <ul className="space-y-1.5">
                  {sec.children!.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to} className="text-primary-foreground/70 hover:text-primary">{c.label}</Link>
                      {c.children && (
                        <ul className="pl-3 mt-1 space-y-1">
                          {c.children.map((cc) => (
                            <li key={cc.to}>
                              <Link to={cc.to} className="text-primary-foreground/55 hover:text-primary text-xs">
                                {cc.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} {COMPANY.full}. Alle Rechte vorbehalten.</div>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-primary">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
