import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { NAV, COMPANY, type NavChild } from "@/lib/site";

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
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-lg gradient-water grid place-items-center text-primary-foreground font-bold shadow-card">
            P
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight">POOLCAP</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Schwimmbad & Wassertechnik
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <MegaItem key={item.to} item={item} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="size-4" />
            {COMPANY.phone}
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center rounded-full gradient-water px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-95 transition"
          >
            Angebot anfordern
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
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
              <Link to="/kontakt" onClick={() => setOpen(false)} className="rounded-full gradient-water px-4 py-3 text-center font-semibold text-primary-foreground">
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
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition rounded-md"
        activeProps={{ className: "text-primary" }}
      >
        {item.label}
        {item.children && <ChevronDown className="size-3.5 opacity-70" />}
      </Link>
      {item.children && open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="w-[320px] rounded-2xl border border-border bg-popover shadow-elegant p-3 grid">
            {item.children.map((c) => (
              <div key={c.to} className="group">
                <Link
                  to={c.to}
                  className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-primary transition"
                >
                  {c.label}
                </Link>
                {c.children && (
                  <div className="pl-4 pb-2">
                    {c.children.map((cc) => (
                      <Link
                        key={cc.to}
                        to={cc.to}
                        className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-primary"
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
