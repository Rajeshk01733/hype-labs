import axiosInstance from "@/lib/axiosInstance";
import { TInsights } from "@/types/api";

export const postInsights = async (formData: TInsights) => {
  const res = await axiosInstance.post("/insights", formData);

  return res.data;
};

export const getInsights = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(`/insights/?limit=${limit}&page=${page}`);

  return res.data;
};

export const updateInsights = async (formData: TInsights, id: string) => {
  const res = await axiosInstance.patch(`/insights/${id}`, formData);

  return res.data;
};

export const deleteInsights = async (id: string) => {
  const res = await axiosInstance.delete(`/insights/${id}`);

  return res.data;
};
