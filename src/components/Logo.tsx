import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="ps-logo" rel="home">
      <span className="ps-logo__mark" aria-hidden="true">
        P
      </span>
      <span
        className="ps-logo__text"
        style={compact ? { fontSize: 14 } : undefined}
      >
        PySmith
      </span>
    </Link>
  );
}
