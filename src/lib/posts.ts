export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  readingMinutes: number;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "why-agent-builders-keep-overpaying-for-servers",
    title: "Why agent builders keep overpaying for servers",
    description:
      "Teams buy a full VM so Python packages survive overnight. Most of the bill is idle time. The data-platform world already has a name for this leak.",
    date: "2026-09-17",
    dateLabel: "17 Sep 2026",
    readingMinutes: 8,
    category: "Cost",
  },
  {
    slug: "your-agent-needs-a-desk-not-a-data-centre",
    title: "Your agent needs a desk, not a data centre",
    description:
      "Ephemeral sandboxes forget installed packages. Raw VMs want a human on call. Long-horizon agents need a warm Python desk that stays set up.",
    date: "2026-09-17",
    dateLabel: "17 Sep 2026",
    readingMinutes: 7,
    category: "Product",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function newestPostDate(): string {
  return posts.reduce((max, post) => (post.date > max ? post.date : max), "");
}

export function isNewestPost(post: Post): boolean {
  return post.date === newestPostDate();
}
