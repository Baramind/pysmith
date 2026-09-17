import Link from "next/link";
import { EvidenceBadge } from "@/components/field/EvidenceBadge";
import { ImpactChip } from "@/components/field/ImpactChip";
import { fieldStories } from "@/lib/field";

const MOTION: Record<string, string[]> = {
  finance: ["Scope", "Retrieve", "Analyse", "Approve"],
  mining: ["Fleet", "Plant", "Scenario", "Supervisor"],
  supply: ["Refresh", "Simulate", "Recommend", "Monitor"],
};

export function FieldPanels() {
  return (
    <div className="mv-field-grid">
      {fieldStories.map((story) => (
        <Link key={story.slug} href={story.href} className="mv-field-panel">
          <div className="mv-field-panel__top">
            <EvidenceBadge />
            <span className="mv-field-panel__kicker">{story.kicker}</span>
          </div>
          <h3 className="ps-h3" style={{ marginBottom: 10 }}>
            {story.title}
          </h3>
          <p className="ps-sub" style={{ marginBottom: 18, fontSize: 15 }}>
            {story.panelLead}
          </p>
          <div className="mv-field-panel__stages" aria-hidden="true">
            {(MOTION[story.slug] ?? story.loop.slice(0, 4)).map((stage) => (
              <span key={stage}>{stage}</span>
            ))}
          </div>
          <div className="mv-field-panel__chips">
            {story.chips.slice(0, 3).map((chip) => (
              <ImpactChip key={chip.value} chip={chip} />
            ))}
          </div>
          <span className="mv-field-panel__more">Read the story →</span>
        </Link>
      ))}
    </div>
  );
}
