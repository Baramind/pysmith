import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-17");
  const routes = ["", "/product/", "/pricing/", "/docs/", "/blog/", "/about/"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    }),
  );
  const articles = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
  }));
  return [...routes, ...articles];
}
