import axiosInstance from "@/lib/axiosInstance";
import { TCareersOpening } from "@/types/api";

export const postCareersOpening = async (formData: TCareersOpening) => {
  const res = await axiosInstance.post("/careers", formData);

  return res.data;
};

export const getCareersOpenings = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(`/careers/?limit=${limit}&page=${page}`);
  return res.data;
};

export const updateCareersOpening = async (
  formData: TCareersOpening,
  id: string,
) => {
  const res = await axiosInstance.patch(`/careers/${id}`, formData);

  return res.data;
};

export const deleteCareersOpening = async (id: string) => {
  const res = await axiosInstance.delete(`/careers/${id}`);

  return res.data;
};
