import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBand({
  eyebrow = "Get a desk",
  title,
  body,
  primary,
  secondary,
}: CtaBandProps) {
  return (
    <section className="ps-section ps-section--navy">
      <div className="ps-wrap ps-pad ps-cols" style={{ alignItems: "center" }}>
        <div className="ps-col-main">
          <div className="ps-eyebrow ps-eyebrow--light">{eyebrow}</div>
          <h2 className="ps-h2" style={{ marginBottom: 18 }}>
            {title}
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.72,
              color: "var(--ps-navy-soft)",
              marginBottom: 32,
              maxWidth: 640,
            }}
          >
            {body}
          </p>
          <div className="ps-hero__cta">
            {primary.href.startsWith("mailto:") ? (
              <a className="ps-btn ps-btn--light" href={primary.href}>
                {primary.label}
              </a>
            ) : (
              <Link className="ps-btn ps-btn--light" href={primary.href}>
                {primary.label}
              </Link>
            )}
            {secondary ? (
              <Link className="ps-btn ps-btn--light" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
