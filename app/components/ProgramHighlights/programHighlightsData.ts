import {
  Activity,
  Brain,
  BookOpen,
  AmbulanceIcon,
  FileText,
  Eye,
  type LucideIcon,
} from "lucide-react";

// Theme colors used consistently across the application
export const themeColors = {
  primary: "#151561", // Primary blue
  secondary: "#fc8732", // Orange accent
  tertiaryText: "#7c4933", // Brown text
};

export interface HighlightItem {
  title: string;
  icon: LucideIcon;
  color: string;
  services: string[];
}

export const highlights: HighlightItem[] = [
  {
    title: "Physical Health",
    icon: Activity,
    color: themeColors.primary,
    services: [
      "Regular health screenings and checkups",
      "Sports injury assessment and care",
      "Nutrition counseling and guidance",
      "Vision and hearing evaluations",
    ],
  },
  {
    title: "Mental Wellness",
    icon: Brain,
    color: themeColors.secondary,
    services: [
      "Stress management techniques",
      "Anxiety and depression screening",
      "Individual counseling sessions",
      "Group support workshops",
    ],
  },
  {
    title: "Education & Prevention",
    icon: BookOpen,
    color: themeColors.primary,
    services: [
      "Health education workshops",
      "Drug and alcohol awareness",
      "First aid and CPR training",
      "Healthy lifestyle promotion",
    ],
  },
];

export interface ProgramDetailItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const programDetails: ProgramDetailItem[] = [
  {
    title: "GENERAL HEALTH CHECKUPS",
    description: "Pediatricians & general physicians to assess overall health.",
    icon: Activity,
  },
  {
    title: "VISION & HEARING SCREENINGS",
    description:
      "Optometrists and audiologists to identify potential issues early.",
    icon: Eye,
  },
  {
    title: "DENTAL CHECKUPS & HYGIENE",
    description: "Dentists to evaluate oral health and educate students.",
    icon: BookOpen,
  },
  {
    title: "MENTAL HEALTH SESSIONS",
    description:
      "Psychologists for leading awareness sessions on stress, anxiety, and emotional well-being.",
    icon: Brain,
  },
  {
    title: "FIRST AID & BASIC HEALTH SUPPORT",
    description: "Nurses and medical coordinators to ensure smooth operations.",
    icon: AmbulanceIcon,
  },
  {
    title: "INDIVIDUAL HEALTH CARD",
    description: "For each student to record medical history & health details.",
    icon: FileText,
  },
];
