export function TrustBar() {
  const stats = [
    { value: "25+", label: "Jahre Erfahrung" },
    { value: "500+", label: "Zufriedene Kunden" },
    { value: "14", label: "Produktkategorien" },
  ];

  return (
    <div className="relative z-10 -mt-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elegant grid grid-cols-3 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <span
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#29ABE2", fontFamily: "'Playfair Display', serif" }}
            >
              {s.value}
            </span>
            <span className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
