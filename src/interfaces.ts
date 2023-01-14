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

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  git: string;
  img: string;
}

export interface ProjectProps {
  project: Project;
}

export interface Projects {
  nativeJsProjects: Project[];
  reactProjects: Project[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface ContactProps {
  title: string;
  subTitle: string;
  icon: string;
}
