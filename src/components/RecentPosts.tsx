import Link from "next/link";
import { isNewestPost, posts, type Post } from "@/lib/posts";

function IdleThumb() {
  return (
    <div className="ps-recent-thumb ps-recent-thumb--idle" aria-hidden="true">
      <span className="ps-recent-thumb__k">Idle vs used</span>
      <span className="ps-recent-thumb__stack">
        <span className="ps-recent-thumb__used" style={{ width: "28%" }} />
        <span className="ps-recent-thumb__idle" style={{ width: "72%" }} />
      </span>
      <span className="ps-recent-thumb__stack">
        <span className="ps-recent-thumb__used" style={{ width: "46%" }} />
        <span className="ps-recent-thumb__idle" style={{ width: "54%" }} />
      </span>
      <span className="ps-recent-thumb__stack">
        <span className="ps-recent-thumb__used" style={{ width: "78%" }} />
        <span className="ps-recent-thumb__idle" style={{ width: "22%" }} />
      </span>
    </div>
  );
}

function DeskThumb() {
  return (
    <div className="ps-recent-thumb ps-recent-thumb--desk" aria-hidden="true">
      <span className="ps-recent-thumb__desk-head">
        <span className="ps-recent-thumb__desk-dot" />
        Python desk
      </span>
      <span className="ps-recent-thumb__desk-lines">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

function FallbackThumb({ post }: { post: Post }) {
  return (
    <div className="ps-recent-thumb ps-recent-thumb--fallback" aria-hidden="true">
      <span className="ps-recent-thumb__fallback-k">{post.category}</span>
    </div>
  );
}

function PostThumb({ post }: { post: Post }) {
  if (post.slug === "why-agent-builders-keep-overpaying-for-servers") {
    return <IdleThumb />;
  }
  if (post.slug === "your-agent-needs-a-desk-not-a-data-centre") {
    return <DeskThumb />;
  }
  return <FallbackThumb post={post} />;
}

export function RecentPosts() {
  return (
    <section className="ps-section">
      <div className="ps-wrap ps-pad">
        <div className="ps-recent__head">
          <h2 className="ps-recent__title">Recent Blog Posts</h2>
          <Link className="ps-link-more" href="/blog/">
            View all →
          </Link>
        </div>
        <div className="ps-recent-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              className="ps-recent-row"
              href={`/blog/${post.slug}/`}
            >
              <PostThumb post={post} />
              <div className="ps-recent-row__body">
                <h3 className="ps-recent-row__title">{post.title}</h3>
                <p className="ps-recent-row__excerpt">{post.description}</p>
                <div className="ps-recent-row__meta">
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  {isNewestPost(post) ? <span className="ps-chip-new">New</span> : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
