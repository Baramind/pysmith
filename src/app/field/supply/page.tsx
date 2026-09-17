import type { Metadata } from "next";
import { FieldStoryLayout } from "@/components/field/FieldStoryLayout";
import { fieldBySlug } from "@/lib/field";

const story = fieldBySlug("supply");

export const metadata: Metadata = {
  title: story.title,
  description: story.panelLead,
};

export default function SupplyFieldPage() {
  return <FieldStoryLayout story={story} />;
}
