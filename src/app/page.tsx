import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GetStarted } from "@/components/GetStarted";
import { RecentPosts } from "@/components/RecentPosts";
import { CallMixStrip } from "@/components/motion/CallMixStrip";
import { LiveOpsBoard } from "@/components/motion/LiveOpsBoard";
import { WhereCallsLand } from "@/components/motion/WhereCallsLand";
import { accessMailto, site } from "@/lib/site";
import { offering } from "@/lib/offering";
import { monthlyFromHourly, skus, usd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.hero}` },
  description:
    "PySmith is the persistent, controlled Python runtime for long-horizon AI agents.",
  alternates: { canonical: site.url },
};

const problems = [
  {
    n: "01",
    title: "Ephemeral sandboxes forget",
    body: "The room is reset. Packages vanish. Week-long agents do not enjoy unpacking every morning.",
  },
  {
    n: "02",
    title: "A raw VM is a second job",
    body: "You wanted Python. You got patching, SSH, and a disk that fills up on a Saturday.",
  },
  {
    n: "03",
    title: "Per-second bills surprise you",
    body: "Honest when idle. Noisy when a child process runs for days. Spreadsheets prefer a fixed rate.",
  },
  {
    n: "04",
    title: "Agents need a socket, not a ticket",
    body: "MCP is how they find tools. Exec Python should not require a human with a console.",
  },
];

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Point your agent at the PySmith MCP connector. No cluster YAML.",
  },
  {
    n: "02",
    title: "Install",
    body: "uv or Pixi on a warm cache. Common libraries are already close.",
  },
  {
    n: "03",
    title: "Stay up",
    body: "The interpreter, the files, the child processes — still there tomorrow.",
  },
  {
    n: "04",
    title: "Spawn",
    body: "Agents exec Python and start more agents. Model-agnostic. You buy hours, not drama.",
  },
];

const features = [
  {
    k: "Always-on",
    title: "Days and weeks, not session caps",
    body: "Built for agents that keep a workspace. Continuous processes, not a 24-hour hotel room.",
  },
  {
    k: "Fixed $/hr",
    title: "A number you can budget",
    body: "Small, Medium, Large. The clock is the product. Idle-heavy work should use someone else.",
  },
  {
    k: "MCP-native",
    title: "Agents exec Python",
    body: "The connector is the API. Your planner does not SSH. Your runtime does not care which model called it.",
  },
  {
    k: "Warm packages",
    title: "uv / Pixi, not a blank pip",
    body: "Install once. Come back. We cache per tenant. We do not silently share wheels across customers.",
  },
  {
    k: "No infra",
    title: "You do not run the host",
    body: "No EC2 console. No security group folklore. You buy a desk. We keep it standing.",
  },
  {
    k: "Honest limits",
    title: "Not Firecracker. Not 100k sandboxes.",
    body: "System containers, fixed SKUs, Python first. Modal, E2B and Northflank already exist. We sell the leftover wedge.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="ps-hero">
        <div className="ps-wrap ps-hero__grid">
          <div>
            <div className="ps-badge">{site.tagline}</div>
            <h1 className="ps-h1" style={{ marginBottom: 26 }}>
              {site.hero}
            </h1>
            <p className="ps-lead" style={{ marginBottom: 20, maxWidth: 560 }}>
              {site.description}
            </p>
            <p className="ps-sub" style={{ marginBottom: 38, maxWidth: 540 }}>
              {site.oneLiner}
            </p>
            <div className="ps-hero__cta">
              <a className="ps-btn ps-btn--blue" href={accessMailto}>
                Request access
              </a>
              <Link className="ps-btn ps-btn--ghost" href="/pricing/">
                See pricing
              </Link>
              <Link className="ps-btn ps-btn--ghost" href="/field/">
                In the field
              </Link>
            </div>
            <div className="ps-hero__tags">
              <span>Fixed $/hr</span>
              <span>MCP-native</span>
              <span>Packages persist</span>
            </div>
          </div>
          <LiveOpsBoard />
        </div>
      </section>

      <CallMixStrip />

      <WhereCallsLand />

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="ps-eyebrow">The problem</div>
            <h2 className="ps-h2">Agents do not sleep like web apps</h2>
          </div>
          <div className="ps-grid ps-grid--4">
            {problems.map((item) => (
              <div className="ps-cell" key={item.n}>
                <div className="ps-step__n">{item.n}</div>
                <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="ps-eyebrow">How it works</div>
            <h2 className="ps-h2">A desk. A rate. A socket.</h2>
            <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
              {offering.multiStep}
            </p>
          </div>
          <div className="ps-flow">
            <span>CONNECT</span>
            <span>INSTALL</span>
            <span>STAY UP</span>
            <span>SPAWN</span>
            <span>PYTHON</span>
          </div>
          <div className="ps-grid ps-grid--4">
            {steps.map((item) => (
              <div className="ps-cell" key={item.n}>
                <div className="ps-step__n">{item.n}</div>
                <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 720, marginBottom: 52 }}>
            <div className="ps-eyebrow">What you buy</div>
            <h2 className="ps-h2">Persistent Python. No infra.</h2>
            <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
              {offering.managedSandboxes}
            </p>
          </div>
          <div className="ps-grid ps-grid--3">
            {features.map((item) => (
              <Link key={item.k} className="ps-cell ps-cell--link" href="/product/">
                <div className="ps-meta" style={{ color: "var(--ps-blue)", marginBottom: 20 }}>
                  {item.k}
                </div>
                <h3 className="ps-h3" style={{ marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p className="ps-sub" style={{ margin: 0, fontSize: 14.5 }}>
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--navy">
        <div className="ps-wrap ps-pad ps-cols">
          <div className="ps-col-main">
            <div className="ps-eyebrow ps-eyebrow--light">The wedge</div>
            <h2 className="ps-h2" style={{ marginBottom: 26 }}>
              Always-on, fixed-price, MCP-first Python
            </h2>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.72,
                color: "var(--ps-navy-soft)",
                marginBottom: 18,
              }}
            >
              Modal, E2B and Northflank already cover burst scale, Firecracker
              sandboxes, and long-running volumes. We do not pretend otherwise.
            </p>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.72,
                color: "var(--ps-navy-soft)",
                marginBottom: 32,
              }}
            >
              The leftover job is smaller: indie builders who want a warm Python
              desk for days and weeks, a known hourly rate, and an MCP socket —
              without babysitting EC2. Thin wedge. Useful desk.
            </p>
            <Link className="ps-btn ps-btn--light" href="/product/">
              Read the product story
            </Link>
          </div>
          <div
            className="ps-col-side"
            style={{
              flex: "1 1 320px",
              border: "1px solid var(--ps-navy-line)",
              background: "var(--ps-navy-deep)",
              padding: "34px 32px",
            }}
          >
            <div className="ps-meta ps-eyebrow--light" style={{ marginBottom: 22 }}>
              Category, not a dunk
            </div>
            <div
              style={{
                fontFamily: "var(--ps-mono)",
                fontSize: 15,
                lineHeight: 1.9,
                color: "#fff",
              }}
            >
              Serverless sandbox → <span style={{ color: "#8FB4FF" }}>hours</span>
              <br />
              Raw VM → <span style={{ color: "#E7A662" }}>ops</span>
              <br />
              PySmith → <span style={{ color: "#8FB4FF" }}>desk</span>
            </div>
            <div
              style={{
                marginTop: 26,
                paddingTop: 22,
                borderTop: "1px solid var(--ps-navy-line)",
                fontFamily: "var(--ps-mono)",
                fontSize: 11,
                color: "#9AA6BC",
                letterSpacing: "0.06em",
                lineHeight: 1.7,
              }}
            >
              Isolation: system containers, not microVMs.
              <br />
              Scale: a desk, not a fleet of 100k.
            </div>
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">Pricing sketch</div>
              <h2 className="ps-h2">Fixed SKUs. Illustrative until launch.</h2>
            </div>
            <Link className="ps-link-more" href="/pricing/">
              Full pricing →
            </Link>
          </div>
          <div className="ps-gap">
            {skus.map((sku) => (
              <article className="ps-card" key={sku.name}>
                <div style={{ padding: "26px 26px 0" }}>
                  <div className="ps-meta" style={{ marginBottom: 18 }}>
                    {sku.featured ? "Default · " : ""}
                    {sku.vcpu} vCPU · {sku.memoryGb} GB
                  </div>
                  <h3 className="ps-h3" style={{ fontSize: 22, marginBottom: 10 }}>
                    {sku.name}
                  </h3>
                  <div className="ps-price" style={{ marginBottom: 14 }}>
                    {usd(sku.hourlyUsd)} <span>/ hr</span>
                  </div>
                  <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                    {sku.blurb} About {usd(monthlyFromHourly(sku.hourlyUsd), 0)}{" "}
                    / mo if you leave it up.
                  </p>
                </div>
                <div className="ps-card__foot">
                  <Link href="/pricing/">See SKU</Link>
                  <a href={accessMailto}>Request access</a>
                </div>
              </article>
            ))}
          </div>
          <p className="ps-caption" style={{ marginTop: 28, marginBottom: 0 }}>
            Illustrative launch pricing, not a quote. Rates will move. No fake
            discounts, no invented free-tier minutes.
          </p>
        </div>
      </section>

      <CtaBand
        title="Python that stays up for your agents."
        body="Spin a fixed-rate instance. Install what you need. Leave it running. Your agents already know how to use a tool socket."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/docs/", label: "Read the docs stub" }}
      />

      <GetStarted />
      <RecentPosts />
    </>
  );
}
