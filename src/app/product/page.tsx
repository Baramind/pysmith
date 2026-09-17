import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { accessMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Always-on Python runtimes for autonomous agents: persistence, MCP, warm packages, and a fixed hourly rate.",
};

const pillars = [
  {
    k: "Persistence",
    title: "The interpreter is still there",
    body: "Files, installed packages, and long-running processes survive the night. You are not reconstituting a sandbox from a snapshot every session unless you choose to.",
  },
  {
    k: "MCP",
    title: "Agents exec. Humans do not SSH.",
    body: "The Model Context Protocol connector is how planners discover exec_python and friends. Model-agnostic on purpose: we do not care which vendor spawned the child.",
  },
  {
    k: "Packages",
    title: "uv and Pixi, per tenant",
    body: "Warm caches make numpy and friends cheap the second time. We will not mount a shared read-only wheelhouse across customers. Supply-chain trust is not a mount flag.",
  },
  {
    k: "Rate",
    title: "Fixed $/hr while the desk exists",
    body: "Busy or idle, the SKU is the SKU. That wins when utilisation is high and the process must not die. It loses when the agent mostly sleeps — use a pause-billed sandbox then.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="A warm Python desk for agents that run for days."
        lead="PySmith is managed, persistent Python: a fixed-rate instance, a workspace that keeps its packages, and an MCP socket. You do not run the host."
      />

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-grid ps-grid--2">
            {pillars.map((item) => (
              <div className="ps-cell" key={item.k}>
                <div className="ps-meta" style={{ color: "var(--ps-blue)", marginBottom: 18 }}>
                  {item.k}
                </div>
                <h2 className="ps-h3" style={{ marginBottom: 12 }}>
                  {item.title}
                </h2>
                <p className="ps-sub" style={{ margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">How an agent uses it</div>
              <h2 className="ps-h2">Connect, install, leave it running</h2>
            </div>
          </div>
          <div className="ps-flow">
            <span>MCP</span>
            <span>INSTANCE</span>
            <span>UV / PIXI</span>
            <span>EXEC</span>
            <span>STAY</span>
          </div>
          <div className="ps-cols">
            <div className="ps-col-main">
              <p className="ps-lead" style={{ fontSize: 18 }}>
                Your agent already speaks tools. PySmith is one more: a Python
                that does not evaporate. Spawn children against the same desk.
                Come back in a week. The site-packages directory is not a
                souvenir.
              </p>
              <p className="ps-sub">
                Docs are a stub while runtimes are in private preview. The shape
                will not surprise you: a connector URL, an instance size, a
                working directory that persists.
              </p>
              <div className="ps-hero__cta" style={{ marginTop: 28 }}>
                <Link className="ps-btn" href="/docs/">
                  Docs stub
                </Link>
                <Link className="ps-btn ps-btn--ghost" href="/pricing/">
                  SKUs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 760, marginBottom: 36 }}>
            <div className="ps-eyebrow">Honest comparison</div>
            <h2 className="ps-h2">Where we sit. Where we do not.</h2>
            <p className="ps-sub" style={{ marginTop: 16 }}>
              Category names, then vendors. Figures below are from public
              pricing pages as of 17 Sep 2026. They will move. Isolation and
              session limits matter more than a headline rate.
            </p>
          </div>
          <div className="ps-table-wrap">
            <table className="ps-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>PySmith</th>
                  <th>Modal</th>
                  <th>E2B</th>
                  <th>Northflank</th>
                  <th>RunPod</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Persistence</td>
                  <td>Always-on instance</td>
                  <td>Volumes across restarts</td>
                  <td>Pause / resume (FS + memory)</td>
                  <td>Volumes; no session cap</td>
                  <td>Pod volumes</td>
                </tr>
                <tr>
                  <td>Agent / MCP</td>
                  <td>MCP-first</td>
                  <td>Strong APIs</td>
                  <td>Native + MCP gateway</td>
                  <td>API / CLI / SSH</td>
                  <td>DIY box</td>
                </tr>
                <tr>
                  <td>Python packages</td>
                  <td>uv / Pixi, per-tenant cache</td>
                  <td>Image + mounts</td>
                  <td>Templates</td>
                  <td>Images / builds</td>
                  <td>DIY</td>
                </tr>
                <tr>
                  <td>Pricing shape</td>
                  <td>Fixed $/hr SKU</td>
                  <td>Per-second</td>
                  <td>Plan + per-second</td>
                  <td>Allocated + disk</td>
                  <td>Per-second + storage</td>
                </tr>
                <tr>
                  <td>Isolation</td>
                  <td>System containers</td>
                  <td>Isolated containers</td>
                  <td>Firecracker</td>
                  <td>Firecracker / gVisor / Kata</td>
                  <td>Dedicated pod</td>
                </tr>
                <tr>
                  <td>Infra burden</td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>Low–medium</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ps-caption">
            Sources:{" "}
            <a href="https://modal.com/pricing" rel="noreferrer" target="_blank">
              modal.com/pricing
            </a>
            ,{" "}
            <a href="https://e2b.dev/pricing" rel="noreferrer" target="_blank">
              e2b.dev/pricing
            </a>
            ,{" "}
            <a href="https://northflank.com/pricing" rel="noreferrer" target="_blank">
              northflank.com/pricing
            </a>
            ,{" "}
            <a href="https://docs.runpod.io/pods/pricing" rel="noreferrer" target="_blank">
              docs.runpod.io
            </a>
            . E2B Pro documents a 24-hour continuous sandbox limit; pause is
            unlimited. We are not claiming a durability moat.
          </p>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-grid ps-grid--3">
            <div className="ps-cell">
              <div className="ps-step__n">Won</div>
              <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                High duty cycle, long horizon
              </h3>
              <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                The agent must keep state and stay scheduled. A spreadsheet
                wants one hourly number.
              </p>
            </div>
            <div className="ps-cell">
              <div className="ps-step__n">Lost</div>
              <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                Idle-heavy, untrusted burst
              </h3>
              <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                Pause billing and microVMs exist. Use them. A desk you never sit
                at is a wasteful desk.
              </p>
            </div>
            <div className="ps-cell">
              <div className="ps-step__n">Not yet</div>
              <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                GPUs, 100k concurrency, BYOC
              </h3>
              <p className="ps-sub" style={{ margin: 0, fontSize: 15 }}>
                Other products already sell those. We will not print a roadmap
                as if it were shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Product"
        title="Buy compute that stays warm."
        body="Request preview access, or read the two notes on idle VMs and why a desk is not a data centre."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/blog/", label: "Read the blog" }}
      />
    </>
  );
}
