import axiosInstance from "@/lib/axiosInstance";

export interface Contact {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
}

export const getContacts = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(`/api/contact`, {
    params: { page, limit },
  });
  return res.data;
};

export const getContactById = async (id: string) => {
  const res = await axiosInstance.get(`/api/contact/${id}`);
  return res.data;
};

export const deleteContact = async (id: string) => {
  const res = await axiosInstance.delete(`/api/contact/${id}`);
  return res.data;
};
