export interface Skills {
  frontend?: string[];
  design?: string[];
  backend?: string[];
  other?: string[];
}

export interface SkillsProps {
  title: string;
  icon: string;
  skills: string[] | undefined;
}

export interface SkillProps {
  skill: string;
}
