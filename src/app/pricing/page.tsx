import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { accessMailto } from "@/lib/site";
import { hoursPerMonth, monthlyFromHourly, skus, usd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Illustrative launch pricing for PySmith Small, Medium and Large persistent Python instances. Fixed US$/hr.",
};

const faqs = [
  {
    q: "Is this the real price?",
    a: "No. These are illustrative launch SKUs so you can budget the shape. We will not invent a discount, a free-tier minute count, or a ‘typical customer saves X%’ banner.",
  },
  {
    q: "When does the clock run?",
    a: "While the instance exists. Busy or idle. If your agent is mostly off, a per-second sandbox is cheaper. See the desk post for a labelled comparison.",
  },
  {
    q: "What about storage and egress?",
    a: "Workspace disk is included at SKU quota in preview thinking; extras will be itemised when they exist. We are not printing fake GB prices.",
  },
  {
    q: "Can I pause billing?",
    a: "Not in v1. Pause is the competing product. Our wedge is the process that should not pause.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed dollars per hour. No surprise child processes."
        lead="Three sizes. One clock. Illustrative launch pricing — labelled as such until we have a rate card we will honour."
      />

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-note">
            Illustrative launch pricing in US dollars. Not a quote. A 730-hour
            month is used for the monthly sketch. No GST, no reserved-instance
            theatre.
          </div>
          <div className="ps-gap">
            {skus.map((sku) => (
              <article className="ps-card" key={sku.name} id={sku.href}>
                <div style={{ padding: 28, flex: 1 }}>
                  <div className="ps-meta" style={{ marginBottom: 16 }}>
                    {sku.featured ? "Most builders · " : ""}
                    {sku.vcpu} vCPU · {sku.memoryGb} GB RAM
                  </div>
                  <h2 className="ps-h3" style={{ fontSize: 26, marginBottom: 14 }}>
                    {sku.name}
                  </h2>
                  <div className="ps-price" style={{ marginBottom: 8 }}>
                    {usd(sku.hourlyUsd)} <span>/ hr</span>
                  </div>
                  <p className="ps-meta" style={{ marginBottom: 18 }}>
                    ~{usd(monthlyFromHourly(sku.hourlyUsd), 0)} / mo at {hoursPerMonth}{" "}
                    hours
                  </p>
                  <p className="ps-sub" style={{ marginBottom: 0 }}>
                    {sku.blurb}
                  </p>
                  <ul className="ps-sku-list">
                    <li>Persistent workspace</li>
                    <li>uv / Pixi installs kept</li>
                    <li>MCP connector</li>
                    <li>Fixed rate, no burst multiplier</li>
                  </ul>
                </div>
                <div className="ps-card__foot">
                  <Link href="/docs/">How it works</Link>
                  <a href={accessMailto}>Request {sku.name}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">Context</div>
              <h2 className="ps-h2">Other people sell computers too</h2>
            </div>
            <Link className="ps-link-more" href="/blog/your-agent-needs-a-desk-not-a-data-centre/">
              Duty-cycle chart →
            </Link>
          </div>
          <div className="ps-table-wrap">
            <table className="ps-table">
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Shape of the bill</th>
                  <th>Public unit (Sep 2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Modal Sandboxes</td>
                  <td>Per-second CPU + memory</td>
                  <td>
                    US$0.00003942 / core-sec, US$0.00000667 / GiB-sec (
                    <a href="https://modal.com/pricing" rel="noreferrer" target="_blank">
                      source
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td>E2B</td>
                  <td>Plan + usage; Pro 24h cap</td>
                  <td>
                    US$0.000014 / vCPU-sec, US$0.0000045 / GiB-sec (
                    <a href="https://e2b.dev/pricing" rel="noreferrer" target="_blank">
                      source
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td>Northflank</td>
                  <td>Allocated vCPU + memory + disk</td>
                  <td>
                    US$0.01667 / vCPU-hr, US$0.00833 / GB-hr (
                    <a href="https://northflank.com/pricing" rel="noreferrer" target="_blank">
                      source
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td>PySmith Medium</td>
                  <td>Fixed $/hr while up</td>
                  <td>US$0.08 / hr, illustrative</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ps-caption">
            Benchmarks, not a promise we are cheaper. At low duty cycle,
            per-second wins. At continuous runtime, allocated and fixed SKUs
            are the comparable set.
          </p>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 720, marginBottom: 36 }}>
            <div className="ps-eyebrow">Questions</div>
            <h2 className="ps-h2">Short answers</h2>
          </div>
          <div className="ps-grid ps-grid--2">
            {faqs.map((item) => (
              <div className="ps-cell" key={item.q}>
                <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                  {item.q}
                </h3>
                <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Pricing"
        title="Pick a size when preview opens."
        body="Email hello@pysmith.com with the SKU you would actually run. We would rather hear duty cycle than a wish-list."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/product/", label: "Product" }}
      />
    </>
  );
}
