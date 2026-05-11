export type Category =
  | "All"
  | "Web Design"
  | "Branding"
  | "Marketing"
  | "Social Media"
  | "CGI";

export interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  client: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  type: "blog" | "case-study";
}

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface StatItem {
  value: string;
  label: string;
}

//Portfolio
export interface Media {
  id: number;
  type: "image" | "video";
  url: string;
}

export interface PortfolioItem {
  id: number;
  industry: string;
  service: string;
  media: Media[]; // array of media objects
}

// New Portfolio Types
export interface PortfolioSection {
  id: number;
  name: string;
  sector: string;
  folderPath: string;
  images: string[];
  videos?: string[];
}

export interface PortfolioSector {
  id: number;
  name: string;
  folderPath: string;
  sections: PortfolioSection[];
}
