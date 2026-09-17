import { IdleSpendChart } from "@/components/charts/IdleSpendChart";
import { ArticleChrome } from "@/components/blog/ArticleChrome";
import { posts } from "@/lib/posts";

const post = posts[0];

const toc = [
  { id: "the-overnight-vm", label: "The overnight VM" },
  { id: "waste-is-not-a-mystery", label: "Waste is not a mystery" },
  { id: "what-databricks-already-tells-you", label: "What Databricks already tells you" },
  { id: "a-worked-example", label: "A worked example" },
  { id: "what-to-do-instead", label: "What to do instead" },
];

const sources = [
  {
    href: "https://resources.flexera.com/web/pdf/Flexera-State-of-the-Cloud-Report-2025.pdf",
    label: "Flexera State of the Cloud 2025 (PDF)",
  },
  {
    href: "https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend",
    label: "Flexera 2025 press release",
  },
  {
    href: "https://aws.amazon.com/ec2/instance-types/t3/",
    label: "AWS T3 instance pricing",
  },
  {
    href: "https://www.databricks.com/blog/best-practices-cost-management-databricks",
    label: "Databricks cost-management blog",
  },
  {
    href: "https://docs.databricks.com/aws/en/lakehouse-architecture/cost-optimization/best-practices",
    label: "Databricks cost-optimisation docs",
  },
  {
    href: "https://www.databricks.com/blog/beyond-provisioning-developers-guide-databricks-lakebase-autoscaling",
    label: "Lakebase autoscaling guide",
  },
  {
    href: "https://www.databricks.com/blog/cost-savings-serverless-compute-notebooks-jobs-and-pipelines",
    label: "Databricks serverless cost savings",
  },
];

export function OverpayingPost() {
  return (
    <ArticleChrome post={post} toc={toc} sources={sources}>
      <p>
        People building autonomous agents do a very ordinary thing. They rent a
        whole server. They install Python. They leave it running so the packages
        are still there in the morning.
      </p>
      <p>
        The agent might work for twenty minutes. The bill is for twenty-four
        hours. That gap is not a rounding error. It is the product.
      </p>

      <h2 id="the-overnight-vm">The overnight VM</h2>
      <p>
        A long-horizon agent is not a web request. It keeps a workspace. It
        pip-installs a library at 2am. It writes a file it will need on Thursday.
        If the machine dies, the agent is back to a blank interpreter.
      </p>
      <p>
        So teams buy a virtual machine “just in case”. The machine is cheap by
        cloud standards. It is expensive as a night light. Most of the hours you
        pay for, nothing useful is happening. The Python is merely&nbsp;warm.
      </p>

      <h2 id="waste-is-not-a-mystery">Waste is not a mystery</h2>
      <p>
        Cloud waste is measured in public. Flexera’s 2025 State of the Cloud
        report still puts wasted IaaS and PaaS spend at{" "}
        <a
          href="https://resources.flexera.com/web/pdf/Flexera-State-of-the-Cloud-Report-2025.pdf"
          rel="noreferrer"
          target="_blank"
        >
          27%
        </a>
        . The same series peaked at{" "}
        <a
          href="https://resources.flexera.com/web/pdf/Flexera-State-of-the-Cloud-Report-2025.pdf"
          rel="noreferrer"
          target="_blank"
        >
          32% four years earlier
        </a>
        . FinOps is working. Idle boxes have not vanished.
      </p>
      <p>
        Flexera’s accompanying{" "}
        <a
          href="https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend"
          rel="noreferrer"
          target="_blank"
        >
          2025 press release
        </a>{" "}
        is blunt: 84% of organisations name managing cloud spend as their top
        cloud challenge. Agent builders are not a special species. They just
        leave more processes running because the process <em>is</em> the
        product.
      </p>

      <h2 id="what-databricks-already-tells-you">
        What Databricks already tells you
      </h2>
      <p>
        Data platforms learned this the hard way. Databricks’ own cost guidance
        treats idle interactive compute as a leak, not a lifestyle.
      </p>
      <p>
        The{" "}
        <a
          href="https://docs.databricks.com/aws/en/lakehouse-architecture/cost-optimization/best-practices"
          rel="noreferrer"
          target="_blank"
        >
          lakehouse cost-optimisation docs
        </a>{" "}
        tell you to configure auto-termination on every interactive cluster: after
        a specified idle time, the compute shuts down. For bursty BI they argue
        that people leave non-serverless warehouses up because startup takes
        minutes — and that serverless, which starts in seconds, is how you get
        both availability and idle termination.
      </p>
      <p>
        The{" "}
        <a
          href="https://www.databricks.com/blog/best-practices-cost-management-databricks"
          rel="noreferrer"
          target="_blank"
        >
          cost-management blog
        </a>{" "}
        makes the same cultural point: the expensive habit is a cluster that
        stays up because someone might come back.
      </p>
      <blockquote>
        Databricks’ Lakebase guide is even clearer on bursty desks: combining
        autoscaling with scale-to-zero “can reduce monthly compute costs by 70%
        or more” for development environments and internal dashboards used only
        during business hours.
      </blockquote>
      <p>
        That sentence is from{" "}
        <a
          href="https://www.databricks.com/blog/beyond-provisioning-developers-guide-databricks-lakebase-autoscaling"
          rel="noreferrer"
          target="_blank"
        >
          Beyond Provisioning: The Developer’s Guide to Databricks Lakebase
          Autoscaling
        </a>
        . It is about databases, not agents. The economics are the same: if the
        workload is bursty, paying for a full day of compute is a choice.
      </p>
      <p>
        On their serverless notebooks, jobs and pipelines, Databricks later
        claimed efficiency work that produces{" "}
        <a
          href="https://www.databricks.com/blog/cost-savings-serverless-compute-notebooks-jobs-and-pipelines"
          rel="noreferrer"
          target="_blank"
        >
          a greater than 25% reduction
        </a>{" "}
        in serverless compute cost for most customers, especially short
        workloads. The number is theirs. The lesson is ours: idle is the first
        place the bill hides.
      </p>

      <h2 id="a-worked-example">A worked example</h2>
      <p>
        Take a small always-on box. Amazon lists a Linux{" "}
        <a
          href="https://aws.amazon.com/ec2/instance-types/t3/"
          rel="noreferrer"
          target="_blank"
        >
          t3.medium in US East (N. Virginia) at US$0.0418 per hour
        </a>
        . Over a 730-hour month that is US$30.51 if you never stop it — before
        disk, before traffic, before the afternoon you forget it exists.
      </p>
      <p>
        The chart below splits that US$30.51 into “useful” and “idle” at three
        utilisation levels. The heights do not change. Only the colour does.
        That is the whole trick of an always-on VM: you pay the same whether the
        agent is thinking or napping.
      </p>
      <IdleSpendChart />
      <p className="ps-caption">
        Figure 1. Illustrative split of a month of Linux t3.medium On-Demand
        spend (US$0.0418/hr × 730 hours = US$30.51) into useful versus idle
        time. Utilisation levels are assumptions, labelled as such. Price from{" "}
        <a
          href="https://aws.amazon.com/ec2/instance-types/t3/"
          rel="noreferrer"
          target="_blank"
        >
          AWS T3 pricing
        </a>
        , US East (N. Virginia), retrieved for this article. Storage, egress,
        and CPU-credit overages are omitted.
      </p>
      <p>
        At 20% useful time you are buying four hours of empty room for every
        hour of work. Agent teams often sit in that band: a planner that wakes
        on a cron, a researcher that runs a tool loop, a watcher that mostly
        waits. The VM is not wrong. The billing shape is.
      </p>

      <h2 id="what-to-do-instead">What to do instead</h2>
      <p>
        If the agent is bursty, turn the machine off. Databricks has been
        saying this in public for years. Pause, auto-terminate, scale to zero.
        Per-second sandboxes exist for a reason.
      </p>
      <p>
        If the agent must stay up — days, not minutes; a workspace that should
        not be rebuilt; children that should be able to exec Python at 4am —
        then stop pretending a leftover EC2 box is a product. Buy a known
        hourly rate. Keep the desk. Do not staff a pager for it.
      </p>
      <p>
        That is the narrow case PySmith is for. We are not claiming your cloud
        bill will fall 27%, or 70%, or 25%. Those figures belong to Flexera and
        Databricks, about their worlds. They are here because they name the
        leak: idle compute that nobody meant to keep.
      </p>
    </ArticleChrome>
  );
}
