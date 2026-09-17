import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskPost } from "@/components/blog/DeskPost";
import { OverpayingPost } from "@/components/blog/OverpayingPost";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Not found" };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.description,
      url: `${site.url}/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  if (post.slug === "why-agent-builders-keep-overpaying-for-servers") {
    return <OverpayingPost />;
  }
  if (post.slug === "your-agent-needs-a-desk-not-a-data-centre") {
    return <DeskPost />;
  }
  notFound();
}
