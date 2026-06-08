import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { NAV, COMPANY, type NavChild } from "@/lib/site";
import logoUrl from "@/assets/logo.png";

const NAV_BG = "#29ABE2";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: scrolled ? NAV_BG : "transparent" }}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="POOLCAP" className="h-11 w-auto" style={{ clipPath: "ellipse(49% 47% at 50% 50%)", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <MegaItem key={item.to} item={item} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center text-white hover:text-white/80 transition-colors [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.5))]"
            aria-label={COMPANY.phone}
          >
            <Phone className="size-5" />
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90"
            style={{ color: NAV_BG }}
          >
            Angebot anfordern
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/20 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.to} className="border-b border-border/60 pb-1">
                <button
                  className="w-full flex items-center justify-between py-2 text-left font-medium"
                  onClick={() => setOpenMobile(openMobile === item.to ? null : item.to)}
                >
                  <Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
                  {item.children && <ChevronDown className={`size-4 transition ${openMobile === item.to ? "rotate-180" : ""}`} />}
                </button>
                {item.children && openMobile === item.to && (
                  <div className="pl-3 pb-2 space-y-1">
                    {item.children.map((c) => (
                      <MobileSub key={c.to} item={c} onPick={() => setOpen(false)} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 font-medium">
                <Phone className="size-4" /> {COMPANY.phone}
              </a>
              <Link to="/kontakt" onClick={() => setOpen(false)} className="rounded-full px-4 py-3 text-center font-semibold text-white" style={{ backgroundColor: NAV_BG }}>
                Angebot anfordern
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileSub({ item, onPick }: { item: NavChild; onPick: () => void }) {
  const [o, setO] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to={item.to} onClick={onPick} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
          {item.label}
        </Link>
        {item.children && (
          <button onClick={() => setO((v) => !v)} className="p-1">
            <ChevronDown className={`size-3 transition ${o ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {item.children && o && (
        <div className="pl-3 border-l border-border ml-1">
          {item.children.map((c) => (
            <Link key={c.to} to={c.to} onClick={onPick} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MegaItem({ item }: { item: NavChild }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.to}
        className="flex items-center gap-1 px-3 py-2 text-base font-semibold text-white hover:text-white/80 transition rounded-md [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_1px_3px_rgba(0,0,0,0.5)]"
        activeProps={{ className: "text-white" }}
      >
        {item.label}
        {item.children && <ChevronDown className="size-3.5 opacity-70" />}
      </Link>
      {item.children && open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="w-auto min-w-max rounded-2xl border border-border bg-popover shadow-elegant p-3 grid">
            {item.children.map((c) => (
              <div key={c.to} className="group">
                <Link
                  to={c.to}
                  className="block rounded-lg px-3 py-2 text-base font-medium whitespace-nowrap hover:bg-accent hover:text-primary transition"
                >
                  {c.label}
                </Link>
                {c.children && (
                  <div className="pl-4 pb-2">
                    {c.children.map((cc) => (
                      <Link
                        key={cc.to}
                        to={cc.to}
                        className="block rounded-md px-3 py-1.5 text-sm whitespace-nowrap text-muted-foreground hover:text-primary"
                      >
                        {cc.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
