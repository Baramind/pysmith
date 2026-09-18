import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { offering } from "@/lib/offering";
import { accessMailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description: offering.policyControlled,
};

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Docs"
        title="Getting started — stub"
        lead="Runtimes are in private preview. This page is the shape of the docs, not a live API reference. Nothing here will provision a machine."
      >
        <p className="ps-sub" style={{ marginBottom: 0, maxWidth: 680 }}>
          {offering.policyControlled}
        </p>
      </PageHero>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-note ps-note--blue" id="waitlist">
            Request access at {site.email}. When an instance exists, you will
            get a connector URL and a SKU. Until then, treat the snippets as
            intent.
          </div>

          <div className="ps-prose" style={{ maxWidth: 760 }}>
            <h2 id="mcp">1. Connect MCP</h2>
            <p>
              Agents discover tools over the Model Context Protocol. Point your
              client at the instance connector when we issue one. Local stdio
              wrappers may follow; HTTP is the default.
            </p>
            <pre className="ps-code">{`{
  "mcpServers": {
    "pysmith": {
      "url": "https://api.pysmith.com/mcp/<instance>"
    }
  }
}`}</pre>
            <p>
              Expected tools, names not final: <code>exec_python</code>,{" "}
              <code>list_files</code>, <code>spawn_agent</code>. Your planner
              should not need SSH.
            </p>

            <h2 id="packages">2. Install packages</h2>
            <p>
              The instance is a real interpreter. Use uv or Pixi. Installs land
              in the persistent environment and stay there. We keep a per-tenant
              cache so the second pandas install is not a blank CDN trip.
            </p>
            <pre className="ps-code">{`# on the instance, once
uv pip install pandas httpx numpy

# later, from an agent
exec_python("import pandas as pd; print(pd.__version__)")`}</pre>
            <p>
              We will not mount a shared read-only site-packages across
              customers. If a wheel is on your desk, it is yours.
            </p>

            <h2 id="persist">3. Persistence</h2>
            <p>
              The workspace directory survives process restart and overnight
              idle. Child processes you start stay running until you stop them
              or the instance is deleted. That is the product. It is also why
              the SKU is billed while the instance exists.
            </p>
            <pre className="ps-code">{`# Tuesday
open("notes.txt", "w").write("still here")

# Friday
open("notes.txt").read()  # 'still here'`}</pre>

            <h2 id="limits">Limits (preview)</h2>
            <ul>
              <li>CPU and RAM are the SKU. No silent bursting.</li>
              <li>Isolation is a system container, not a microVM.</li>
              <li>No GPU SKU on this page, because we are not shipping one.</li>
              <li>Quotas, regions, and SLAs: unpublished. We will not invent them.</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Docs"
        title="When the stub becomes a reference."
        body="If you already know the SKU you want, skip the prose and request access."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/pricing/", label: "See pricing" }}
      />
    </>
  );
}
