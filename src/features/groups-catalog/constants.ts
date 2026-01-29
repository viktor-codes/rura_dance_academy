import type { AgeGroup, DanceStyle } from "./types";

export const GROUPS_DATA: DanceStyle[] = [
  {
    id: "intro-latin",
    title: "Intro to Latin",
    description:
      "Focus on posture, coordination, and basic rhythm in a fun environment.",
    benefit: ["Early Development", "Fun", "Social"],
    ageGroup: "kids",
    image: "/images/kids.jpg",
  },
  {
    id: "latin-energy",
    title: "Latin Energy",
    description:
      "Master Cha-cha and Samba while building stage confidence and speed.",
    benefit: ["Confidence"],
    ageGroup: "teens",
    image: "/images/teens.jpg",
  },
  {
    id: "sensual-flow",
    title: "Sensual Flow",
    description:
      "Embrace femininity through Rumba and Stretching. Your time for self-care.",
    benefit: ["Self-Care"],
    ageGroup: "adults",
    image: "/images/adults.jpg",
  },
];

export const AGE_TABS: { value: AgeGroup; label: string }[] = [
  { value: "kids", label: "Kids" },
  { value: "teens", label: "Teens" },
  { value: "adults", label: "Adults" },
];
