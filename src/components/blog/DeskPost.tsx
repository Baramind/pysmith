import { DutyCycleChart } from "@/components/charts/DutyCycleChart";
import { ArticleChrome } from "@/components/blog/ArticleChrome";
import { posts } from "@/lib/posts";

const post = posts[1];

const toc = [
  { id: "two-bad-desks", label: "Two bad desks" },
  { id: "what-staying-up-actually-costs", label: "What staying up actually costs" },
  { id: "the-databricks-habit", label: "The Databricks habit" },
  { id: "a-desk-is-a-product", label: "A desk is a product" },
];

const sources = [
  {
    href: "https://modal.com/pricing",
    label: "Modal pricing",
  },
  {
    href: "https://e2b.dev/pricing",
    label: "E2B pricing",
  },
  {
    href: "https://northflank.com/pricing",
    label: "Northflank pricing",
  },
  {
    href: "https://docs.databricks.com/aws/en/lakehouse-architecture/cost-optimization/best-practices",
    label: "Databricks auto-termination docs",
  },
  {
    href: "https://www.databricks.com/blog/beyond-provisioning-developers-guide-databricks-lakebase-autoscaling",
    label: "Lakebase scale-to-zero",
  },
];

export function DeskPost() {
  return (
    <ArticleChrome post={post} toc={toc} sources={sources}>
      <p>
        An agent that runs for weeks is not a function. It is a worker with a
        desk. The desk has a Python on it. The Python has packages. The packages
        took twenty minutes to install and the agent would like them still to be
        there on Monday.
      </p>
      <p>
        Most of the market sells either a hotel room that is reset every night,
        or a building you have to plumb yourself. Neither is a desk.
      </p>

      <h2 id="two-bad-desks">Two bad desks</h2>
      <p>
        Serverless sandboxes are excellent at the thing they were built for:
        untrusted code, short jobs, a filesystem you can throw away. Pause and
        resume is a real feature. Per-second billing is honest. Then you come
        back and the room has been remade. Common libraries are gone. Long-lived
        child processes are a conversation with the vendor’s session cap.
      </p>
      <p>
        Raw VMs are the opposite failure. The desk survives. So does the
        patching, the SSH key, the disk that filled up, the security group you
        meant to tighten. You wanted Python. You bought a data centre square.
      </p>
      <p>
        Agents do not care which cloud account the desk sits in. They care that
        <code> import pandas</code> still works, that a file written on Tuesday
        is readable on Friday, and that another agent can exec code without
        someone opening a ticket.
      </p>

      <h2 id="what-staying-up-actually-costs">What staying up actually costs</h2>
      <p>
        Fixed hourly rates look dear when the process is mostly idle. They look
        simple when it is not. The chart below is a labelled benchmark, not a
        bake-off with a trophy.
      </p>
      <p>
        We price a 2 vCPU / 4&nbsp;GiB shape — the same size as PySmith Medium —
        using public unit rates collected on 17 Sep 2026:
      </p>
      <ul>
        <li>
          Modal Sandboxes:{" "}
          <a href="https://modal.com/pricing" rel="noreferrer" target="_blank">
            US$0.00003942 per core-second
          </a>{" "}
          and US$0.00000667 per GiB-second. Running: about US$0.38/hr.
        </li>
        <li>
          E2B usage:{" "}
          <a href="https://e2b.dev/pricing" rel="noreferrer" target="_blank">
            US$0.000014 per vCPU-second
          </a>{" "}
          and US$0.0000045 per GiB-second, on top of plan fees. Running: about
          US$0.17/hr.
        </li>
        <li>
          Northflank allocated compute:{" "}
          <a
            href="https://northflank.com/pricing"
            rel="noreferrer"
            target="_blank"
          >
            US$0.01667 per vCPU-hour
          </a>{" "}
          and US$0.00833 per GB-hour. Allocated: about US$0.067/hr.
        </li>
        <li>
          PySmith Medium (illustrative launch price): US$0.08/hr, billed while
          the instance exists, busy or not.
        </li>
      </ul>
      <p>
        Per-second lines assume you only pay while the process runs. The PySmith
        line is flat because that is the point of a desk: you know the number
        before the month starts. Plan fees, storage, and GPUs are omitted. E2B
        Pro still documents a 24-hour continuous sandbox cap; weeks-on is a
        different product.
      </p>
      <DutyCycleChart />
      <p className="ps-caption">
        Figure 1. Monthly cost (730-hour month) for a 2 vCPU / 4&nbsp;GiB shape
        at 10%, 25%, 50% and 100% duty cycle. Modal, E2B and Northflank use
        published unit rates as of 17 Sep 2026 (
        <a href="https://modal.com/pricing" rel="noreferrer" target="_blank">
          Modal
        </a>
        ,{" "}
        <a href="https://e2b.dev/pricing" rel="noreferrer" target="_blank">
          E2B
        </a>
        ,{" "}
        <a href="https://northflank.com/pricing" rel="noreferrer" target="_blank">
          Northflank
        </a>
        ). PySmith Medium is an illustrative fixed SKU at US$0.08/hr. If the
        agent is mostly off, per-second wins. If it must stay up, the fixed line
        stops moving.
      </p>
      <p>
        Read the chart in that order. At 10% duty, Modal and E2B are cheaper
        than a desk you never turn off. Northflank’s allocated rate is already
        in always-on territory and undercuts our illustrative Medium SKU. We
        are not the cheapest computer on the internet. We are a Python that
        stays up, with an MCP socket, at a number you can put in a spreadsheet.
      </p>

      <h2 id="the-databricks-habit">The Databricks habit</h2>
      <p>
        Data teams were trained out of “leave it running”. Databricks’{" "}
        <a
          href="https://docs.databricks.com/aws/en/lakehouse-architecture/cost-optimization/best-practices"
          rel="noreferrer"
          target="_blank"
        >
          cost-optimisation guide
        </a>{" "}
        puts auto-termination on every interactive cluster. Idle time is treated
        as a defect. For databases that only work office hours, their Lakebase
        write-up says scale-to-zero can cut compute{" "}
        <a
          href="https://www.databricks.com/blog/beyond-provisioning-developers-guide-databricks-lakebase-autoscaling"
          rel="noreferrer"
          target="_blank"
        >
          70% or more
        </a>
        .
      </p>
      <p>
        That habit is correct for bursty notebooks. It is the wrong habit for an
        agent whose job is to still be there. Turning the desk off every time
        the human looks away is how you get a clean bill and a stupid agent.
      </p>
      <p>
        The useful import from Databricks is cultural, not a cluster setting:
        know which workloads should die when idle, and which should not. Then
        price them differently.
      </p>

      <h2 id="a-desk-is-a-product">A desk is a product</h2>
      <p>
        PySmith is the second kind. You get a persistent interpreter, a
        workspace that keeps packages, and an MCP connector so agents exec
        Python without SSH. The hourly rate does not change because a child
        process spawned. Isolation is a system container, not a microVM. Burst
        to a hundred thousand sandboxes is someone else’s chart.
      </p>
      <p>
        If you need a hotel room for an hour, rent a hotel room. If you need a
        data centre, you already know the vendors. If you need a desk that is
        still there next week, that is a smaller shop — and it should cost a
        number you can say out loud.
      </p>
    </ArticleChrome>
  );
}
