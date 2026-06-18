import resume from "./resume.json";

export type ResumeEntry = {
  name?: string;
  company?: string;
  jobTitle?: string;
  dates?: string;
  link?: string;
  quote?: string;
  description: string[];
};

type ResumeProfile = {
  name: string;
  title: string;
  email: string;
  website: string;
  image: string;
  about: string[];
  more: string[];
};

type ResumeData = {
  profile: ResumeProfile;
  experience: ResumeEntry[];
  projects: ResumeEntry[];
  skills: ResumeEntry[];
  education: ResumeEntry[];
  certificates: ResumeEntry[];
};

const data = resume as ResumeData;

export const { profile, experience, projects, skills, education, certificates } = data;
