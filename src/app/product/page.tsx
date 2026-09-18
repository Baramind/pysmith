import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { OperatingLoop } from "@/components/motion/OperatingLoop";
import { accessMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "PySmith gives AI agents a persistent Python workspace for long-running work. Agents can execute code, run simulations, preserve state and resume safely across days or weeks, with controlled dependencies, resources, network access and auditability.",
};

const persistent = [
  "Loaded datasets and validated dataframes",
  "Scenario configurations and simulation state",
  "Trained models and solver outputs",
  "Intermediate calculations and checkpoints",
  "Logs, decisions and previous observations",
  "Installed or cached Python dependencies",
];

const controlled = [
  "Per-tenant isolation",
  "CPU, memory, storage and runtime quotas",
  "Approved package and dependency policies",
  "Restricted network and secret access",
  "Sandboxed code execution",
  "Reproducible environments",
  "Audit logs and human approval checkpoints",
];

const domains = [
  {
    href: "/field/supply/",
    k: "Supply planning",
    title: "Keep the plan when the facts move",
    body: "An end-to-end supply plan is not a single forecast. When a supplier misses a date or demand shifts, planners need to diagnose the cause, test alternatives and replan without losing the assumptions already completed. PySmith keeps the planning computation available through every replan — people and solvers keep the decision.",
  },
  {
    href: "/field/mining/",
    k: "Mining",
    title: "Run the shift, not the plant",
    body: "An open-pit mine is a coupled system across a shift: trucks, shovels, crushers, breakdowns and production targets. PySmith hosts a persistent, inspectable Python environment for testing coordinated decisions across that horizon. It is decision support only. It does not control haul trucks, blasting, braking or other safety-critical equipment.",
  },
  {
    href: "/field/finance/",
    k: "Financial analysis",
    title: "Evidence that survives the session",
    body: "Financial teams do not need a plausible paragraph. They need the applicable policy, the correct document version and a traceable explanation that can continue across sessions. PySmith keeps computation and review history together long enough to inspect, challenge and reproduce. It does not approve credit, execute trades or file reports.",
  },
];

const category = [
  { k: "Generic cloud", v: "Compute" },
  { k: "Agent frameworks", v: "Reasoning and orchestration" },
  { k: "Vector databases", v: "Retrieval" },
  { k: "Optimisers", v: "Domain computation" },
  {
    k: "PySmith",
    v: "Durable, controlled execution for the agent's ongoing work",
    focus: true,
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Give agents somewhere to work"
        lead="AI agents are good at reasoning, but reasoning alone is not enough for operational work. Supply plans need to be recalculated. Mining scenarios need to run through an entire shift. Financial investigations need to preserve evidence and continue across multiple sessions."
      >
        <div className="ps-hero__story">
          <p>
            PySmith gives every agent a persistent Python environment built for
            this kind of work.
          </p>
          <p>
            The agent can install approved dependencies, load data, run analysis,
            call solvers, execute simulations, save checkpoints and resume later
            without rebuilding its environment from scratch. PySmith provides the
            execution controls around that workflow: isolated workspaces,
            resource limits, permissioned access, reproducible environments and
            auditable activity.
          </p>
          <p>Instead of a stateless tool call, agents get a durable computational workspace.</p>
          <p className="ps-hero__lock">
            Build agents that do not just respond, but continue the work.
          </p>
          <div className="ps-hero__cta">
            <a className="ps-btn ps-btn--blue" href={accessMailto}>
              Request access
            </a>
            <Link className="ps-btn ps-btn--ghost" href="/field/">
              In the field
            </Link>
            <Link className="ps-btn ps-btn--ghost" href="/pricing/">
              See pricing
            </Link>
          </div>
        </div>
      </PageHero>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-cols">
            <div className="ps-col-main">
              <div className="ps-eyebrow">The problem</div>
              <h2 className="ps-h2" style={{ marginBottom: 22 }}>
                Stateless agents, multi-day work
              </h2>
              <p className="ps-sub" style={{ marginBottom: 0, fontSize: 18 }}>
                Most AI agents can generate a response or call a tool, but they
                are not designed to maintain a working environment across
                complex, multi-day tasks. Every new session may require
                reinstalling dependencies, reloading data, rebuilding
                intermediate state and reconstructing previous decisions.
              </p>
              <blockquote className="ps-quote">
                Most AI agents are built for short conversations, but real
                operational work takes hours, days or weeks. PySmith gives agents
                a persistent, controlled Python environment where they can load
                data once, run analysis and simulations, use approved libraries
                and tools, save their state and resume when conditions change.
                With isolation, resource controls, policy-managed access and
                reproducible execution, PySmith helps teams build agents for
                supply planning, mining simulation and financial decision support
                without managing a full cloud environment themselves. PySmith is
                the persistent execution layer between an AI agent and real-world
                computational workflows.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <div className="ps-eyebrow">What PySmith is</div>
            <h2 className="ps-h2">Persistent. Controlled.</h2>
            <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
              PySmith gives an agent a persistent, controlled Python workspace
              where it can execute real code, maintain state, use approved
              libraries, run simulations and resume work over time.
            </p>
          </div>
          <div className="ps-grid ps-grid--2">
            <div className="ps-cell">
              <div className="ps-meta" style={{ color: "var(--ps-blue)", marginBottom: 18 }}>
                Persistent
              </div>
              <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                The workspace is still there
              </h3>
              <p className="ps-sub" style={{ marginBottom: 8 }}>
                The agent can retain:
              </p>
              <ul className="ps-sku-list">
                {persistent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ps-cell">
              <div className="ps-meta" style={{ color: "var(--ps-blue)", marginBottom: 18 }}>
                Controlled
              </div>
              <h3 className="ps-h3" style={{ marginBottom: 12 }}>
                Execution inside explicit bounds
              </h3>
              <p className="ps-sub" style={{ marginBottom: 8 }}>
                Work runs within operational boundaries:
              </p>
              <ul className="ps-sku-list">
                {controlled.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="ps-caption" style={{ marginTop: 28, marginBottom: 0 }}>
            Isolation is per-tenant system containers with resource quotas — not
            Firecracker. MCP is how agents find the desk; it is not unique to
            PySmith.
          </p>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">Operating loop</div>
              <h2 className="ps-h2">Load, work, checkpoint, resume</h2>
              <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
                Agents route tool calls through MCP. PySmith is the always-on
                Python desk those calls land on — packages warm, state intact,
                work able to continue.
              </p>
            </div>
          </div>
          <div className="ps-flow">
            <span>Load</span>
            <span>Analyse</span>
            <span>Run</span>
            <span>Simulate</span>
            <span>Validate</span>
            <span>Checkpoint</span>
            <span>Wait</span>
            <span>Replan</span>
          </div>
          <OperatingLoop />
          <div className="mv-route" style={{ marginTop: 40 }}>
            <div className="mv-route__canon">
              <span>Agent</span>
              <span className="mv-route__chev">→</span>
              <span>MCP Gateway</span>
              <span className="mv-route__chev">→</span>
              <span className="mv-route__desk">PySmith runtime</span>
              <span className="mv-route__chev">→</span>
              <span>Checkpoint / resume</span>
            </div>
            <p className="mv-loop__cap">
              The connector is familiar. The difference is a durable workspace
              on the other side of <code>python.exec</code>, not a one-off tool
              call that evaporates.
            </p>
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">In the field</div>
              <h2 className="ps-h2">Where the work actually lives</h2>
              <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
                Evidence-led concepts, not claimed deployments. Each story shows
                where a persistent Python workspace sits — never the system that
                signs the decision.
              </p>
            </div>
            <Link className="ps-link-more" href="/field/">
              All field stories →
            </Link>
          </div>
          <div className="ps-grid ps-grid--3">
            {domains.map((item) => (
              <Link key={item.href} className="ps-cell ps-cell--link" href={item.href}>
                <div className="ps-meta" style={{ color: "var(--ps-blue)", marginBottom: 20 }}>
                  {item.k}
                </div>
                <h3 className="ps-h3" style={{ marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p className="ps-sub" style={{ margin: 0, fontSize: 14.5 }}>
                  {item.body}
                </p>
                <span className="mv-field-panel__more">Read the story →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-cols">
            <div className="ps-col-main">
              <div className="ps-eyebrow">Category</div>
              <h2 className="ps-h2" style={{ marginBottom: 22 }}>
                What PySmith is not
              </h2>
              <p className="ps-sub" style={{ fontSize: 18 }}>
                Not the forecasting model, optimisation solver, knowledge base
                or domain application. It is the execution layer that gives
                agents a reliable place to perform long-running computational
                work.
              </p>
              <p className="ps-sub" style={{ marginBottom: 0 }}>
                Other products already sell burst scale, Firecracker sandboxes
                and GPU fleets. We will not print those as if they were
                shipping. The job here is a durable, controlled Python workspace
                for work that takes days.
              </p>
            </div>
            <aside className="ps-col-side" style={{ flex: "1 1 340px" }}>
              <div className="ps-meta" style={{ marginBottom: 14 }}>
                Where each layer sits
              </div>
              <ul className="ps-catmap">
                {category.map((row) => (
                  <li key={row.k} className={row.focus ? "is-focus" : undefined}>
                    <span className="ps-catmap__k">{row.k}</span>
                    <span>{row.v}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad" style={{ maxWidth: 920 }}>
          <div className="ps-eyebrow">Position</div>
          <p className="ps-lock">
            PySmith is the persistent, controlled Python runtime for long-horizon
            AI agents.
          </p>
          <p className="ps-sub" style={{ margin: 0, fontSize: 20, maxWidth: 640 }}>
            From one-off tool calls to persistent computational workflows.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Product"
        title="Build agents that do not just respond, but continue the work."
        body="Request preview access. Docs are a stub while runtimes are in private preview. The shape will not surprise you: a connector, an instance, a workspace that persists."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/docs/", label: "Docs stub" }}
      />
    </>
  );
}
