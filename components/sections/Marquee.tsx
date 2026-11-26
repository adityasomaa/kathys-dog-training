import { issues } from "@/lib/shop";

const words = [...issues.map((i) => i.title), "Force-free methods", "As seen on Channel 9"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-rule bg-coal py-5" aria-hidden>
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-[20px] font-bold text-bone/70">
            {w}
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
