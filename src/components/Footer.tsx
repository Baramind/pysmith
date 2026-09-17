import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ps-footer">
      <div className="ps-wrap ps-footer__grid">
        <div>
          <div style={{ marginBottom: 18 }}>
            <Logo compact />
          </div>
          <p className="ps-sub" style={{ maxWidth: 280, fontSize: 14 }}>
            {site.oneLiner}
          </p>
        </div>
        <div>
          <div className="ps-footer__t">Product</div>
          <ul>
            <li>
              <Link href="/product/">Product</Link>
            </li>
            <li>
              <Link href="/pricing/">Pricing</Link>
            </li>
            <li>
              <Link href="/docs/">Docs</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ps-footer__t">Writing</div>
          <ul>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
            <li>
              <Link href="/blog/why-agent-builders-keep-overpaying-for-servers/">
                Overpaying for servers
              </Link>
            </li>
            <li>
              <Link href="/blog/your-agent-needs-a-desk-not-a-data-centre/">
                A desk, not a data centre
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ps-footer__t">Company</div>
          <ul>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <a href={site.github}>GitHub</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ps-footer__bar">
        <div className="ps-wrap">
          <span>
            © {new Date().getFullYear()} {site.name}. A {site.org} product.
          </span>
          <span
            style={{
              fontFamily: "var(--ps-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
            }}
          >
            WWW.PYSMITH.COM
          </span>
        </div>
      </div>
    </footer>
  );
}
