import { ShieldCheck, Award, MapPin, Factory, Star } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Award, label: "Seit 2000" },
    { icon: Factory, label: "Hersteller-Qualität" },
    { icon: MapPin, label: "Made for Bayern" },
    { icon: ShieldCheck, label: "Garantie" },
    { icon: Star, label: "5★ Kundenbewertungen" },
  ];
  return (
    <div className="border-y border-border bg-muted/50">
      <div className="container-page py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <it.icon className="size-4 text-primary" />
            <span className="font-medium text-foreground/80">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
