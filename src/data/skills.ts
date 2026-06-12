import { Activity, AppWindow, Code2, Database, ServerCog } from "lucide-react";
import type { SkillGroup } from "../types/content";
import type { Translation } from "../i18n";

const skillIcons = [Code2, ServerCog, Database, AppWindow, Activity] as const;

export function getSkillGroups(skills: Translation["skills"]): SkillGroup[] {
  return skills.groups.map((group, index) => ({
    title: group.title,
    items: [...group.items],
    icon: skillIcons[index],
  }));
}
