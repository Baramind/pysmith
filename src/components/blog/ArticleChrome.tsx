import type { ReactNode } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

type ArticleChromeProps = {
  post: Post;
  toc: { id: string; label: string }[];
  sources: { href: string; label: string }[];
  children: ReactNode;
};

export function ArticleChrome({ post, toc, sources, children }: ArticleChromeProps) {
  return (
    <>
      <header className="ps-article-head">
        <div className="ps-wrap" style={{ paddingBottom: 40 }}>
          <div className="ps-crumbs">
            <Link href="/">Home</Link>
            {" / "}
            <Link href="/blog/">Blog</Link>
            {" / "}
            <span>{post.category}</span>
          </div>
          <h1 className="ps-h1" style={{ marginTop: 22, marginBottom: 18, maxWidth: 860 }}>
            {post.title}
          </h1>
          <p className="ps-lead" style={{ marginBottom: 0 }}>
            {post.description}
          </p>
          <div className="ps-byline">
            <strong>PySmith</strong>
            <span>{post.dateLabel}</span>
            <span className="ps-meta">
              {post.category} · {post.readingMinutes} min
            </span>
          </div>
        </div>
      </header>
      <div className="ps-wrap ps-layout">
        <article className="ps-content ps-prose">{children}</article>
        <aside className="ps-rail">
          <div className="ps-box">
            <div className="ps-box__t">On this page</div>
            <ul>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ps-box">
            <div className="ps-box__t">Sources</div>
            <ul>
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
