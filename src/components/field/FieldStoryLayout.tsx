import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { EvidenceBadge } from "@/components/field/EvidenceBadge";
import { FinanceLoop } from "@/components/field/FinanceLoop";
import { ImpactChip } from "@/components/field/ImpactChip";
import { MiningSwarm } from "@/components/field/MiningSwarm";
import { PageHero } from "@/components/PageHero";
import { RoutingVisual } from "@/components/field/RoutingVisual";
import { SupplyLoop } from "@/components/field/SupplyLoop";
import type { FieldStory } from "@/lib/field";
import { accessMailto } from "@/lib/site";

function MotionFor({ story }: { story: FieldStory }) {
  if (story.slug === "mining") return <MiningSwarm story={story} />;
  if (story.slug === "supply") return <SupplyLoop story={story} />;
  return <FinanceLoop story={story} />;
}

export function FieldStoryLayout({ story }: { story: FieldStory }) {
  return (
    <>
      <PageHero eyebrow="In the field" title={story.title} lead={story.panelLead} />

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="mv-story-meta">
            <EvidenceBadge />
            <p className="mv-story-promise">{story.promise}</p>
          </div>
          <div className="ps-note" style={{ marginTop: 28, marginBottom: 0 }}>
            {story.mustNot}
          </div>
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">Loop</div>
              <h2 className="ps-h2">How the work moves</h2>
            </div>
          </div>
          <MotionFor story={story} />
        </div>
      </section>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">Routing</div>
              <h2 className="ps-h2">What MCP allows onto the desk</h2>
            </div>
          </div>
          <RoutingVisual story={story} />
        </div>
      </section>

      <section className="ps-section">
        <div className="ps-wrap ps-pad">
          <div className="ps-cols">
            <div className="ps-col-main ps-prose">
              <h2>{story.problemTitle}</h2>
              {story.problem.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
              <h2>{story.workflowTitle}</h2>
              {story.workflow.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
              <h2>{story.pilotTitle}</h2>
              {story.pilot.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
            <aside className="ps-col-side">
              <div className="ps-box">
                <div className="ps-box__t">Attributed impact</div>
                <div className="mv-field-panel__chips">
                  {story.chips.map((chip) => (
                    <ImpactChip key={chip.value} chip={chip} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="ps-section ps-section--white" id="sources">
        <div className="ps-wrap ps-pad">
          <div className="ps-eyebrow">Sources</div>
          <h2 className="ps-h2" style={{ marginBottom: 28 }}>
            Every number has a home
          </h2>
          <ol className="mv-sources">
            {story.sources.map((source) => (
              <li key={source.id}>
                <a href={source.href} rel="noreferrer" target="_blank">
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="ps-caption" style={{ marginBottom: 0 }}>
            Evidence-led concept — not a claimed PySmith customer deployment.{" "}
            <Link href="/field/">All field stories</Link>.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="In the field"
        title="The desk is the product. The decision stays human."
        body="If this operating loop is the one you already run, request preview access. We will not invent a return on investment for you."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/product/", label: "Product" }}
      />
    </>
  );
}
