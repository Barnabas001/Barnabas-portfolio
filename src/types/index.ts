export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
  category?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
};

export type NavItem = {
  label: string;
  href: string;
};
