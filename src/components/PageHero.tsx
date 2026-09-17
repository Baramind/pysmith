import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="ps-hero">
      <div className="ps-wrap" style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <div className="ps-eyebrow">{eyebrow}</div>
        <h1 className="ps-h1" style={{ marginBottom: 22, maxWidth: 820 }}>
          {title}
        </h1>
        <p className="ps-lead" style={{ marginBottom: children ? 18 : 0 }}>
          {lead}
        </p>
        {children}
      </div>
    </section>
  );
}
