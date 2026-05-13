import axiosInstance from "@/lib/axiosInstance";

export const getEnquireForms = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(
    `/enquire-form/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteEnquireForm = async (id: string) => {
  const res = await axiosInstance.delete(`/enquire-form/${id}`);

  return res.data;
};
