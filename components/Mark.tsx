// Kathy's logo, rebuilt for the web (the original is a 175px PNG): "Kathy's" in a brush script with
// "Dog Training & Behaviour Consulting" set below in rounded Nunito. The paw is the round mark used
// for the favicon, loader and chat avatar. Everything takes the current text colour.

/** A paw print: favicon, loader, chat avatar. */
export function Paw({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="50" cy="66" rx="21" ry="18" />
      <ellipse cx="24" cy="44" rx="9" ry="11.5" transform="rotate(-18 24 44)" />
      <ellipse cx="40" cy="27" rx="9" ry="12" transform="rotate(-6 40 27)" />
      <ellipse cx="60" cy="27" rx="9" ry="12" transform="rotate(6 60 27)" />
      <ellipse cx="76" cy="44" rx="9" ry="11.5" transform="rotate(18 76 44)" />
    </svg>
  );
}

/** "Kathy's" over "Dog Training & Behaviour Consulting", sized by font-size. */
export function Wordmark({ className = "", tagline = true }: { className?: string; tagline?: boolean }) {
  return (
    <span role="img" aria-label="Kathy's Dog Training & Behaviour Consulting" className={`inline-flex flex-col leading-none ${className}`}>
      <span aria-hidden className="font-script text-[1em] leading-[1.05]">
        Kathy&apos;s
      </span>
      {tagline && (
        <span aria-hidden className="mt-[0.24em] font-sans text-[0.3em] font-bold leading-tight text-gold">
          Dog Training &amp; Behaviour Consulting
        </span>
      )}
    </span>
  );
}

/** Alias kept so components from the template keep working. */
export const Emblem = Paw;
