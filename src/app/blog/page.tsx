import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on idle cloud spend, persistent Python, and the cost of leaving a server up for an agent.",
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Short notes for people whose agents will not go to bed."
        lead="Plain language. Cited numbers. No invented savings percentages."
      />
      <section className="ps-section ps-section--white">
        <div className="ps-wrap ps-pad">
          <div className="ps-gap">
            {posts.map((post) => (
              <article className="ps-card" key={post.slug}>
                <div style={{ padding: 28, flex: 1 }}>
                  <div className="ps-meta" style={{ marginBottom: 16 }}>
                    {post.category} · {post.dateLabel} · {post.readingMinutes} min
                  </div>
                  <h2 className="ps-h3" style={{ fontSize: 24, marginBottom: 12 }}>
                    {post.title}
                  </h2>
                  <p className="ps-sub" style={{ margin: 0 }}>
                    {post.description}
                  </p>
                </div>
                <div className="ps-card__foot">
                  <Link href={`/blog/${post.slug}/`}>Read</Link>
                  <Link href={`/blog/${post.slug}/`}>Open article</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
