import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="ps-hero">
      <div className="ps-wrap" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: "clamp(64px,8vw,120px)" }}>
        <div className="ps-eyebrow">404</div>
        <h1 className="ps-h1" style={{ marginBottom: 22 }}>
          This page is gone. The runtime is not.
        </h1>
        <p className="ps-lead" style={{ marginBottom: 36 }}>
          No such path on pysmith.com. If you followed a link from the blog,
          the slug may have moved.
        </p>
        <div className="ps-hero__cta">
          <Link className="ps-btn ps-btn--blue" href="/">
            Home
          </Link>
          <Link className="ps-btn ps-btn--ghost" href="/docs/">
            Docs stub
          </Link>
          <Link className="ps-btn ps-btn--ghost" href="/blog/">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
