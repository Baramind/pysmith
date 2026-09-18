import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FieldPanels } from "@/components/field/FieldPanels";
import { PageHero } from "@/components/PageHero";
import { architectureCaption, fieldIntro } from "@/lib/field";
import { offering } from "@/lib/offering";
import { accessMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "In the field",
  description: offering.executionLayer,
};

export default function FieldIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={fieldIntro.eyebrow}
        title={fieldIntro.title}
        lead={fieldIntro.lead}
      >
        <p className="ps-sub" style={{ marginBottom: 0, maxWidth: 680 }}>
          {offering.executionLayer}
        </p>
      </PageHero>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <FieldPanels />
          <p className="ps-caption" style={{ marginTop: 32, marginBottom: 0 }}>
            {architectureCaption}
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="In the field"
        title="Agents call tools. Python lands on a desk."
        body="If one of these operating loops is yours, request preview access. Bring the duty cycle, not a wish-list of autonomous miracles."
        primary={{ href: accessMailto, label: "Request access" }}
        secondary={{ href: "/product/", label: "Product" }}
      />
    </>
  );
}
