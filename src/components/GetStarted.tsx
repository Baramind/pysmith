import Link from "next/link";
import { skus, usd } from "@/lib/pricing";
import { accessMailto, site } from "@/lib/site";

const steps = [
  {
    n: "1",
    title: "Request access",
    body: `Private preview. Email ${site.email}. There is no self-serve signup.`,
    href: accessMailto,
    mailto: true,
  },
  {
    n: "2",
    title: "Choose an instance",
    body: "Small, Medium, or Large. Fixed US$/hr while the instance exists. Illustrative until launch.",
    href: "/pricing/",
    mailto: false,
  },
  {
    n: "3",
    title: "Connect the agent",
    body: "Point the MCP connector at the instance. python.exec on a workspace that persists.",
    href: "/docs/#mcp",
    mailto: false,
  },
] as const;

function AccessVisual() {
  return (
    <div className="ps-start-viz" aria-hidden="true">
      <div className="ps-start-viz__id">
        <span className="ps-start-viz__mark">P</span>
        <span className="ps-start-viz__lines">
          <span />
          <span />
        </span>
      </div>
      <div className="ps-start-viz__chips">
        <span>{site.email}</span>
        <span>Private preview</span>
      </div>
    </div>
  );
}

function SkuVisual() {
  return (
    <div className="ps-start-viz" aria-hidden="true">
      <div className="ps-start-viz__skus">
        {skus.map((sku) => (
          <div
            className={`ps-start-viz__sku${sku.featured ? " is-featured" : ""}`}
            key={sku.name}
          >
            <span className="ps-start-viz__sku-name">{sku.name}</span>
            <span className="ps-start-viz__bar" />
            <span className="ps-start-viz__sku-rate">
              {usd(sku.hourlyUsd)}
              <em>/hr</em>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function McpVisual() {
  return (
    <div className="ps-start-viz" aria-hidden="true">
      <div className="ps-start-viz__mcp">
        <span className="ps-start-viz__mcp-chip">
          <span className="ps-start-viz__dot" />
          MCP
        </span>
        <span className="ps-start-viz__key">python.exec</span>
      </div>
      <div className="ps-start-viz__persist">workspace persists</div>
    </div>
  );
}

function StepVisual({ n }: { n: string }) {
  if (n === "1") return <AccessVisual />;
  if (n === "2") return <SkuVisual />;
  return <McpVisual />;
}

export function GetStarted() {
  return (
    <section className="ps-section ps-section--white">
      <div className="ps-wrap ps-pad">
        <div className="ps-start">
          {steps.map((step) => {
            const inner = (
              <>
                <div className="ps-start__head">
                  <span className="ps-start__n">{step.n}</span>
                  <h3 className="ps-start__title">{step.title}</h3>
                </div>
                <p className="ps-start__body">{step.body}</p>
                <StepVisual n={step.n} />
              </>
            );

            return step.mailto ? (
              <a className="ps-start__col" href={step.href} key={step.n}>
                {inner}
              </a>
            ) : (
              <Link className="ps-start__col" href={step.href} key={step.n}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
