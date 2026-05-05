import { SVGProps } from "react";

/**
 * Custom hand-drawn brand illustrations.
 * Hairline strokes, editorial style. Single color (currentColor).
 * Use semantic name prop to render the appropriate mark.
 */

type IconName =
  // Service areas
  | "separazioni"
  | "minori"
  | "famiglia"
  | "persone"
  | "civile"
  // Trust / values
  | "formazione"
  | "specializzazione"
  | "riservatezza"
  | "famiglie-assistite"
  | "umanita"
  | "aggiornamento"
  // Problems
  | "tensione"
  | "futuro-figli"
  | "incertezza"
  | "solitudine"
  // Contact
  | "telefono"
  | "email"
  | "studio";

interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

const BrandIcon = ({ name, size = 48, className, ...rest }: BrandIconProps) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...rest,
  };

  switch (name) {
    /* ───────── SERVICE AREAS ───────── */
    case "separazioni":
      // Two interlocking rings drifting apart
      return (
        <svg {...common}>
          <circle cx="24" cy="32" r="13" />
          <circle cx="42" cy="32" r="13" />
          <path d="M16 16 L20 20" />
          <path d="M48 48 L44 44" opacity="0.5" />
        </svg>
      );

    case "minori":
      // Two figures (parent + child) holding hands
      return (
        <svg {...common}>
          <circle cx="22" cy="20" r="5" />
          <path d="M14 50 V36 a8 8 0 0 1 16 0 V50" />
          <circle cx="44" cy="26" r="3.5" />
          <path d="M38 50 V40 a6 6 0 0 1 12 0 V50" />
          <path d="M30 42 L38 42" />
        </svg>
      );

    case "famiglia":
      // House with heart inside (home + care)
      return (
        <svg {...common}>
          <path d="M10 30 L32 12 L54 30 V52 H10 Z" />
          <path d="M32 44 c-4 -3 -8 -6 -8 -10 a4 4 0 0 1 8 -2 a4 4 0 0 1 8 2 c0 4 -4 7 -8 10 Z" />
        </svg>
      );

    case "persone":
      // Single figure inside protective oval
      return (
        <svg {...common}>
          <ellipse cx="32" cy="32" rx="20" ry="24" />
          <circle cx="32" cy="26" r="5" />
          <path d="M22 48 V42 a10 10 0 0 1 20 0 V48" />
        </svg>
      );

    case "civile":
      // Classical column (architecture of law)
      return (
        <svg {...common}>
          <path d="M14 14 H50" />
          <path d="M16 18 H48" />
          <path d="M22 22 V46" />
          <path d="M32 22 V46" />
          <path d="M42 22 V46" />
          <path d="M14 50 H50" />
          <path d="M10 54 H54" />
        </svg>
      );

    /* ───────── TRUST POINTS ───────── */
    case "formazione":
      // Mortarboard / academic cap
      return (
        <svg {...common}>
          <path d="M6 26 L32 14 L58 26 L32 38 Z" />
          <path d="M16 30 V42 c0 4 8 8 16 8 s16 -4 16 -8 V30" />
          <path d="M58 26 V42" />
        </svg>
      );

    case "specializzazione":
      // Bilancia (scales of justice)
      return (
        <svg {...common}>
          <path d="M32 12 V52" />
          <path d="M14 52 H50" />
          <path d="M14 22 H50" />
          <path d="M14 22 L8 36 a6 6 0 0 0 12 0 Z" />
          <path d="M50 22 L44 36 a6 6 0 0 0 12 0 Z" />
        </svg>
      );

    case "riservatezza":
      // Lock inside shield
      return (
        <svg {...common}>
          <path d="M32 8 L52 14 V32 c0 12 -8 20 -20 24 c-12 -4 -20 -12 -20 -24 V14 Z" />
          <rect x="24" y="28" width="16" height="14" rx="1" />
          <path d="M28 28 V24 a4 4 0 0 1 8 0 V28" />
        </svg>
      );

    case "famiglie-assistite":
      // Three figures, side by side
      return (
        <svg {...common}>
          <circle cx="16" cy="22" r="4" />
          <path d="M10 46 V36 a6 6 0 0 1 12 0 V46" />
          <circle cx="32" cy="20" r="5" />
          <path d="M24 48 V36 a8 8 0 0 1 16 0 V48" />
          <circle cx="48" cy="22" r="4" />
          <path d="M42 46 V36 a6 6 0 0 1 12 0 V46" />
        </svg>
      );

    case "umanita":
      // Two hands offering / cradling
      return (
        <svg {...common}>
          <path d="M8 36 c0 -4 2 -8 6 -10 l8 6 V32 a4 4 0 0 1 8 0 V40" />
          <path d="M56 36 c0 -4 -2 -8 -6 -10 l-8 6 V32 a4 4 0 0 0 -8 0 V40" />
          <path d="M14 40 c4 6 12 10 18 10 s14 -4 18 -10" />
        </svg>
      );

    case "aggiornamento":
      // Open book
      return (
        <svg {...common}>
          <path d="M8 16 H28 a4 4 0 0 1 4 4 V52 a4 4 0 0 0 -4 -4 H8 Z" />
          <path d="M56 16 H36 a4 4 0 0 0 -4 4 V52 a4 4 0 0 1 4 -4 H56 Z" />
          <path d="M14 24 H24" />
          <path d="M14 30 H24" />
          <path d="M40 24 H50" />
          <path d="M40 30 H50" />
        </svg>
      );

    /* ───────── PROBLEMS ───────── */
    case "tensione":
      // Two arrows pulling apart
      return (
        <svg {...common}>
          <path d="M22 32 H6" />
          <path d="M12 26 L6 32 L12 38" />
          <path d="M42 32 H58" />
          <path d="M52 26 L58 32 L52 38" />
          <path d="M28 22 V42" opacity="0.4" />
          <path d="M36 22 V42" opacity="0.4" />
        </svg>
      );

    case "futuro-figli":
      // Small heart held between two hands
      return (
        <svg {...common}>
          <path d="M32 38 c-6 -4 -12 -8 -12 -14 a6 6 0 0 1 12 -3 a6 6 0 0 1 12 3 c0 6 -6 10 -12 14 Z" />
          <path d="M8 50 c4 -4 10 -6 16 -6 H40 c6 0 12 2 16 6" />
        </svg>
      );

    case "incertezza":
      // Question mark in a circle, hand-drawn
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="22" />
          <path d="M24 26 a8 8 0 0 1 16 0 c0 6 -8 6 -8 12" />
          <circle cx="32" cy="44" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case "solitudine":
      // Lone figure with empty space around
      return (
        <svg {...common}>
          <circle cx="32" cy="22" r="5" />
          <path d="M22 50 V40 a10 10 0 0 1 20 0 V50" />
          <path d="M8 56 H14" opacity="0.4" />
          <path d="M50 56 H56" opacity="0.4" />
          <path d="M8 8 H14" opacity="0.4" />
          <path d="M50 8 H56" opacity="0.4" />
        </svg>
      );

    /* ───────── CONTACT ───────── */
    case "telefono":
      // Vintage phone handset
      return (
        <svg {...common}>
          <path d="M14 12 L24 12 L28 22 L22 26 c2 6 8 12 14 14 L40 36 L50 40 V50 c0 2 -2 4 -4 4 C28 54 10 36 10 18 c0 -2 2 -4 4 -4 Z" />
        </svg>
      );

    case "email":
      // Envelope, hand-drawn
      return (
        <svg {...common}>
          <rect x="8" y="16" width="48" height="32" rx="1" />
          <path d="M8 18 L32 36 L56 18" />
        </svg>
      );

    case "studio":
      // Map pin
      return (
        <svg {...common}>
          <path d="M32 8 c-9 0 -16 7 -16 16 c0 12 16 32 16 32 s16 -20 16 -32 c0 -9 -7 -16 -16 -16 Z" />
          <circle cx="32" cy="24" r="5" />
        </svg>
      );

    default:
      return null;
  }
};

export default BrandIcon;
