import axiosInstance from "@/lib/axiosInstance";
import { TInsightDownload } from "@/types/api";

export const postInsightDownload = async (formData: TInsightDownload) => {
  const res = await axiosInstance.post("/insights-download", formData);

  return res.data;
};

export const getInsightDownloads = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(
    `/insights-download/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const updateInsightDownload = async (
  formData: TInsightDownload,
  id: string,
) => {
  const res = await axiosInstance.patch(`/insights-download/${id}`, formData);

  return res.data;
};

export const deleteInsightDownload = async (id: string) => {
  const res = await axiosInstance.delete(`/insights-download/${id}`);

  return res.data;
};
