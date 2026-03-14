export interface ResumeData {
  basics: {
    name: string;
    label: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    titles: string[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    duration: string;
    location: string;
    bullets: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    dates: string;
  }[];
  skills: {
    top: string[];
    languages: string[];
    technical: string[];
  };
  certifications: string[];
  awards: string[];
  extra: string[];
}
