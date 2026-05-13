import axiosInstance from "@/lib/axiosInstance";
import { TCaseStudy } from "@/types/api";

export const postCaseStudy = async (formData: TCaseStudy) => {
  const res = await axiosInstance.post("/case-studies", formData);

  return res.data;
};

export const getCaseStudy = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(
    `/case-studies?limit=${limit}&page=${page}`,
  );

  return res.data;
};

export const updateCaseStudy = async (formData: TCaseStudy, id: string) => {
  const res = await axiosInstance.patch(`/case-studies/${id}`, formData);

  return res.data;
};

export const deleteCaseStudy = async (id: string) => {
  const res = await axiosInstance.delete(`/case-studies/${id}`);

  return res.data;
};
