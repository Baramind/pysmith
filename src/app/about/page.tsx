import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { accessMailto, site } from "@/lib/site";
import { offering } from "@/lib/offering";

export const metadata: Metadata = {
  title: "About",
  description: offering.providerNeutral,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Agents need a desk. Builders should not need a data centre."
        lead={`${site.name} is a ${site.org} product. The thesis is small on purpose.`}
      >
        <p className="ps-sub" style={{ marginBottom: 0, maxWidth: 680 }}>
          {offering.providerNeutral}
        </p>
      </PageHero>

      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-cols">
            <div className="ps-col-main ps-prose">
              <h2>Founding thesis</h2>
              <p>
                Long-horizon agents waste money on leftover VMs and time on
                leftover ops. Per-second sandboxes are the right tool when the
                job is short or untrusted. They are a poor desk when the Python
                has to stay set up for days.
              </p>
              <p>
                We sell the desk: a managed, persistent interpreter at a fixed
                hourly rate, with an MCP connector, without you running the
                host. Model-agnostic. Installation-light. No brochureware about
                “platforms”.
              </p>
              <p>
                The market is crowded. Modal, E2B, Northflank and RunPod already
                cover persistence, agents, or always-on containers — often with
                stronger isolation than we will ship first. The remaining wedge
                is budget predictability for week-long processes, and a Python
                that agents can find without SSH. Thin. Real.
              </p>
              <p>
                {site.name} is the product name. {site.org} is the organisation.
                The site is {site.domain}. If you are building an agent that
                should still be working on Thursday,{" "}
                <a href={accessMailto}>say hello</a>.
              </p>
              <p>
                We publish sources when we use numbers. See the{" "}
                <Link href="/blog/">blog</Link>. We do not print fake logos.
              </p>
            </div>
            <aside className="ps-col-side">
              <div className="ps-box">
                <div className="ps-box__t">Facts</div>
                <ul>
                  <li>Product: {site.name}</li>
                  <li>Organisation: {site.org}</li>
                  <li>
                    Mail:{" "}
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="About"
        title="That is the whole pitch."
        body="Persistent Python. Fixed $/hr. No infra. If it is the wrong shape, the product page will say so."
        primary={{ href: "/product/", label: "Product" }}
        secondary={{ href: "/pricing/", label: "Pricing" }}
      />
    </>
  );
}
