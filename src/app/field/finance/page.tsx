import type { Metadata } from "next";
import { FieldStoryLayout } from "@/components/field/FieldStoryLayout";
import { fieldBySlug } from "@/lib/field";

const story = fieldBySlug("finance");

export const metadata: Metadata = {
  title: story.title,
  description: story.panelLead,
};

export default function FinanceFieldPage() {
  return <FieldStoryLayout story={story} />;
}
