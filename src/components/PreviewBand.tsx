import { accessMailto, site } from "@/lib/site";

export function PreviewBand() {
  return (
    <section className="ps-section ps-section--white">
      <div className="ps-wrap ps-pad-s">
        <div className="ps-newsletter">
          <div style={{ maxWidth: 560 }}>
            <h2 style={{ fontSize: 26, marginBottom: 10 }}>Private preview</h2>
            <p className="ps-sub" style={{ margin: 0 }}>
              Runtimes are not self-serve yet. Email {site.email} — no fake
              subscribe form, no invented waitlist count.
            </p>
          </div>
          <a className="ps-btn" href={accessMailto}>
            Request access
          </a>
        </div>
      </div>
    </section>
  );
}
