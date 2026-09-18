import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { offering } from "@/lib/offering";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Benchmarking",
  description: offering.multiStep,
};

export default function BenchmarkingPage() {
  return (
    <>
      <PageHero
        eyebrow="From the blog"
        title="Benchmarking"
        lead="Pain, with citations. Cited numbers on idle spend and a warm Python desk. No invented savings percentages."
      />
      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-headrow">
            <div style={{ maxWidth: 720 }}>
              <div className="ps-eyebrow">From the blog</div>
              <h2 className="ps-h2">Pain, with citations</h2>
            </div>
            <Link className="ps-link-more" href="/blog/">
              All posts →
            </Link>
          </div>
          <div className="ps-gap">
            {posts.map((post) => (
              <Link key={post.slug} className="ps-post-card" href={`/blog/${post.slug}/`}>
                <div className="ps-meta" style={{ marginBottom: 16 }}>
                  {post.category} · {post.readingMinutes} min
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
          <p className="ps-caption" style={{ marginTop: 28, marginBottom: 0 }}>
            {offering.multiStep} The posts cite public numbers. They are not a
            brochure.
          </p>
        </div>
      </section>
    </>
  );
}
