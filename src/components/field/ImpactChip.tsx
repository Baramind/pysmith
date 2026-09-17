import type { ImpactChip as ImpactChipData } from "@/lib/field";

type ImpactChipProps = {
  chip: ImpactChipData;
};

export function ImpactChip({ chip }: ImpactChipProps) {
  return (
    <figure className="mv-chip" title={`${chip.attribution} [${chip.sourceId}]`}>
      <div className="mv-chip__value">{chip.value}</div>
      <figcaption>
        <span className="mv-chip__label">{chip.label}</span>
        <cite className="mv-chip__src">
          [{chip.sourceId}] {chip.attribution}
        </cite>
      </figcaption>
    </figure>
  );
}
