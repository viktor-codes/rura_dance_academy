export type StatItem = {
  value: string;
  label: string;
};

export const STATS_ITEMS: readonly StatItem[] = [
  { value: "Technique", label: "Foundation of Movement" },
  { value: "Confidence", label: "Built on the Floor" },
  { value: "Passion", label: "The Heart of Rura Academy" },
  { value: "Grace", label: "In Every Step" },
  { value: "Growth", label: "Your Journey Starts Here" },
] as const;

/** Index of the central stat (displayed as heart on desktop). */
export const CENTER_STAT_INDEX = 2;