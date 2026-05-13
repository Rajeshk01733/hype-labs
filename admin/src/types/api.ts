export type TLogin = {
  email: string;
  password: string;
};
export type TSignup = {
  name: string;
  email: string;
  password: string;
};

export type TResetPassword = {
  otp: string;
  password: string;
};

export type TUploadImage = {
  file: File;
  folder: string;
};

export type TTestimonial = {
  _id?: string;
  name: string;
  description: string;
  star: number;
  publish: boolean;
  createdAt?: string;
};

export type TNewsletterSub = {
  _id?: string;
  email: string;
  createdAt?: string;
};

export type TEnquireForm = {
  _id?: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  createdAt?: string;
};

export type TContactForm = {
  _id?: string;
  firstName: string;
  lastName: string;
  websiteAddress?: string;
  companyName?: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  createdAt?: string;
};

export type TContact = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName?: string;
  businessSize?: string;
  budget?: string;
  message?: string;
  services?: string[];
  websiteAddress?: string;
  companyName?: string;
  sourcePage: string;
  sourcePath: string;
  sectionName: string;
  additionalData?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
};

export type TCareersOpening = {
  _id?: string;
  jobId: string;
  title: string;
  description: string;
  location: string;
  department: string;
  jobType: "FullTime" | "Contract" | "Internship";
  salary: string;
  jobDescription: string;
  coreMandate: string;
  keyResponsibilities: string;
  technicalSkills: string[];
  softSkills: string[];
  qualification: string;
  whatWeOffer: string;
  whyJoin: string;
  aboutLr: string;
  compensationPackage: string;
  note: string;
  slug?: string;
  requiredFields: {
    documents: boolean;
    personalInfo: boolean;
    workExperience: boolean;
    education: boolean;
    reAllocate: boolean;
  };
  publish: boolean;
  closed: boolean;
  createdAt?: string;
};

export type TInsights = {
  _id?: string;
  image: string;
  title: string;
  category: string;
  cardDescription: string;
  heroDescription: string;
  description: string;
  ctaQuestion: string;
  pdf?: string;
  order: number;
  publish: boolean;
  slug?: string;
  createdAt?: string;
};

export type TCaseStudy = {
  _id?: string;
  image: string;
  title: string;
  category: string;
  cardDescription: string;
  heroDescription: string;
  description: string;
  objectives: {
    description: string;
  }[];
  statusDescription: string;
  status: { data: string; title: string }[];
  ctaQuestion: string;
  pdf?: string;
  order: number;
  publish: boolean;
  slug?: string;
  createdAt?: string;
};

export type TBrochureDownload = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: string;
};

export type TCaseStudyDownload = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseStudy: any;
  createdAt?: string;
};

export type TInsightDownload = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insight: any;
  createdAt?: string;
};

export type TCareersSubmission = {
  _id?: string;
  careerId: any;
  prefix: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  resume: string;
  coverLetter?: string;
  experience: {
    companyName: string;
    jobTitle: string;
    currentEmployer: boolean;
    startDate: Date;
    endDate?: Date;
    country: string;
  }[];
  education: {
    schoolName: string;
    degree: string;
    major: string;
    startDate: Date;
    endDate: Date;
    country: string;
  }[];
  reAllocate: boolean;
  preferedLocation: string;
  createdAt?: string;
};

export type TSuperAdmin = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
};
