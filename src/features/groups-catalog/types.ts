export type AgeGroup = "kids" | "teens" | "adults";

export type DanceStyle = {
  id: string;
  title: string;
  description: string;
  benefit: string[];
  ageGroup: AgeGroup;
  image: string;
};
