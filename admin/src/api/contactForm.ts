import axiosInstance from "@/lib/axiosInstance";

export const getContactForms = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(
    `/contact-form/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteContactForm = async (id: string) => {
  const res = await axiosInstance.delete(`/contact-form/${id}`);

  return res.data;
};
