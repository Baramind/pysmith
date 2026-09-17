import { evidenceBadge } from "@/lib/field";

type EvidenceBadgeProps = {
  className?: string;
};

export function EvidenceBadge({ className }: EvidenceBadgeProps) {
  return (
    <span className={`mv-badge ${className ?? ""}`.trim()}>{evidenceBadge}</span>
  );
}
