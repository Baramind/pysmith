type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="ps-hero">
      <div className="ps-wrap" style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <div className="ps-eyebrow">{eyebrow}</div>
        <h1 className="ps-h1" style={{ marginBottom: 22, maxWidth: 820 }}>
          {title}
        </h1>
        <p className="ps-lead" style={{ marginBottom: 0 }}>
          {lead}
        </p>
      </div>
    </section>
  );
}
